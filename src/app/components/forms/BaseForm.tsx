'use client';

import { useState } from 'react';

interface BaseFormProps {
    onSubmit: (data: { name: string; phone: string }) => void;
}

export default function BaseForm({ onSubmit }: BaseFormProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+55');

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
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pronto para Renovar sua Clínica?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Compartilhe algumas informações com a gente para que possamos entender melhor suas necessidades e começar a transformar sua clínica em uma máquina de resultados.
                </p>
            </div>

            <div>
                <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
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
                <label 
                    htmlFor="phone" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
                    Qual o seu número?
                </label>
                <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="1 (702) 123-4567"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors"
                />
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ background: 'linear-gradient(135deg, #655cb1, #659fcf)' }}
                disabled={!name || !phone}
            >
                Enviar
            </button>
        </form>
    );
}
