
'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface InstagramFormProps {
    onSubmit: (data: { username: string }) => void;
    onBack: () => void;
    baseFormData: {
        name: string;
        phone: string;
    };
}

export default function InstagramForm({ onSubmit, onBack, baseFormData }: InstagramFormProps) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ username });
    }

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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ótimo, {baseFormData.name}! 👋
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Agora nos conte qual é o seu Instagram para que possamos analisar o perfil da sua clínica e criar uma estratégia personalizada.
                </p>
            </div>

            <div>
                <label 
                    htmlFor="instagram" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
                    Qual é o seu Instagram?
                </label>
                <input
                    id="instagram"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="@suaclínica"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ background: 'linear-gradient(135deg, #655cb1, #659fcf)' }}
                disabled={!username}
            >
                Analisar Perfil
            </button>
        </form>
    );
}
