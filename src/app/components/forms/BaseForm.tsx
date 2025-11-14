'use client';

import { useState } from 'react';
import { BaseUserData } from '@/store/userStore';
import { PhoneInput } from '../ui';
import { useLocationMessage } from '@/hooks/useLocationMessage';

export type BaseFormData = Omit<BaseUserData, 'instagram'>;

interface BaseFormProps {
  onSubmit: (data: BaseFormData) => void;
  initialData?: BaseFormData;
}

export default function BaseForm({ onSubmit, initialData }: BaseFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [phone, setPhone] = useState(initialData?.phone || '');

  const { location, message, isLoading } = useLocationMessage(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Introductory Message */}
      <div className="text-center mb-6 pb-6 border-b border-gray-200">
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
        >
          <span className="text-3xl">🏥</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Pronto para Renovar sua Clínica?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Compartilhe algumas informações com a gente para que possamos entender melhor suas
          necessidades e começar a transformar sua clínica em uma máquina de resultados.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Como podemos te chamar?
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Qual o seu número?
        </label>
        <PhoneInput
          id="phone"
          value={phone}
          onChange={setPhone}
          placeholder="(11) 98765-4321"
          required
        />

        {/* Location-specific message */}
        {location && (
          <div className="mt-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100">
            <div className="flex items-start gap-2">
              <span className="text-lg">📍</span>
              <div className="flex-1">
                {message && <p className="text-xs text-gray-600 leading-relaxed">{message}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        style={{ background: 'linear-gradient(135deg, #655cb1, #659fcf)' }}
        disabled={!name || !phone || phone.replace(/\D/g, '').length < 10}
      >
        Avançar
      </button>
    </form>
  );
}
