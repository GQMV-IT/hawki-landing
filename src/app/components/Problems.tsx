'use client';

import { X, AlertCircle } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

export default function Problems() {
  const problems = [
    'Leads desqualificados chegando e consumindo tempo da equipe',
    'Baixa conversão porque o atendimento não está preparado',
    'Agenda fantasma com semanas vazias e outras sobrecarregadas',
    'Dependência de indicação que limita seu crescimento',
    'Cada protocolo perdido = R$60-100k que nunca mais voltam',
  ];

  return (
    <Section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <MotionWrapper>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Título */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center gap-3">
              <AlertCircle className="w-12 h-12 text-red-600" />
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Problemas Comuns que Estão Custando Caro
              </h2>
            </div>
            <p className="text-2xl font-semibold text-red-700">
              Cada dia sem um sistema estruturado significa:
            </p>
          </div>

          {/* Lista de Problemas */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <p className="text-lg text-gray-800 font-medium leading-relaxed pt-1">
                      {problem}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}

