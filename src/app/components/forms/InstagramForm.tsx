'use client';

import { useState } from 'react';
import { ArrowLeft, Loader2, Instagram } from 'lucide-react';
import { getUserInfo, InstagramUserInfo } from '@/services';
import { InstagramUserData } from '@/store/userStore';

interface InstagramFormProps {
  onSubmit: (data: InstagramUserData) => void;
  onBack: () => void;
  baseFormData: {
    name: string;
    phone: string;
  };
}

export default function InstagramForm({ onSubmit, onBack, baseFormData }: InstagramFormProps) {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [userInfo, setUserInfo] = useState<InstagramUserInfo | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFailed(false);

    try {
      const data = await getUserInfo(username);
      setUserInfo(data);
    } catch (err) {
      setFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    if (userInfo) {
      onSubmit({ instagram: username, instagramInfo: userInfo });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Voltar
      </button>

      {/* Introductory Message with personalized greeting */}
      <div className="text-center mb-6 pb-6 border-b border-gray-200">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
        >
          <span className="text-3xl">📱</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Ótimo, {baseFormData.name}! 👋</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Agora nos conte qual é o seu Instagram para que possamos analisar o perfil da sua clínica
          e criar uma estratégia personalizada.
        </p>
      </div>

      {/* Show form or user card based on state */}
      {!userInfo ? (
        <>
          <div>
            <label htmlFor="instagram" className="block text-sm font-semibold text-gray-700 mb-2">
              Qual é o seu Instagram?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Instagram className="w-5 h-5 text-gray-400" />
              </div>
              <input
                id="instagram"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="@suaclínica"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Error Message */}
          {failed && (
            <div className="mt-3 p-3 rounded-lg bg-linear-to-r from-purple-50 to-blue-50 border border-purple-100">
              <div className="flex-1 text-xs text-gray-600 leading-relaxed">
                Não conseguimos encontrar o perfil. Por favor, verifique se o instagram está correto
                e tente novamente.
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{ background: 'linear-gradient(135deg, #655cb1, #659fcf)' }}
            disabled={!username || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Buscando perfil...
              </span>
            ) : (
              'Buscar Perfil'
            )}
          </button>
        </>
      ) : (
        <>
          {/* User Info Card */}
          <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-[#659fcf]">
            <div className="flex items-center gap-4 mb-4">
              {userInfo.profile_pic_url && (
                <img
                  src={`/api/proxy-image?url=${encodeURIComponent(userInfo.profile_pic_url)}`}
                  alt={userInfo.username}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  @{userInfo.username}
                  {userInfo.is_verified && <span className="text-blue-500">✓</span>}
                </h4>
                <p className="text-sm text-gray-600">{userInfo.full_name}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xl font-bold text-gray-900">
                  {userInfo.follower_count.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600">Seguidores</div>
              </div>
              <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xl font-bold text-gray-900">
                  {userInfo.following_count.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600">Seguindo</div>
              </div>
              <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xl font-bold text-gray-900">{userInfo.media_count}</div>
                <div className="text-xs text-gray-600">Posts</div>
              </div>
            </div>

            {/* Biography */}
            {userInfo.biography && (
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm text-gray-700 line-clamp-3">{userInfo.biography}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setUserInfo(null);
                setUsername('');
                setFailed(false);
              }}
              className="px-6 py-3 text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Buscar Outro
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 px-6 py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: 'linear-gradient(135deg, #655cb1, #659fcf)' }}
            >
              Confirmar Perfil
            </button>
          </div>
        </>
      )}
    </form>
  );
}
