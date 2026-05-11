'use client';

import { Clock, MessageSquareOff, TrendingDown, AlertTriangle } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

const problems = [
  {
    icon: Clock,
    text: 'Ninguém responde a tempo. O paciente vai pro concorrente que respondeu primeiro.',
  },
  {
    icon: MessageSquareOff,
    text: 'A secretária está ocupada. O WhatsApp acumula mensagens e os leads esfriam.',
  },
  {
    icon: TrendingDown,
    text: 'No final do mês, o investimento em anúncios não volta como consulta na agenda.',
  },
  {
    icon: AlertTriangle,
    text: 'Você já tentou agência, já tentou impulsionar post. O resultado? Leads que nunca agendaram.',
  },
];

export default function FunnelProblem() {
  return (
    <Section className="bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <MotionWrapper>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Você investe em anúncios. Mas o lead chega e...
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="space-y-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <MotionWrapper key={index} delay={index * 0.12}>
                  <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md border border-red-100">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-red-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed pt-1">
                      {problem.text}
                    </p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Punch Line */}
          <MotionWrapper delay={0.6}>
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl p-6 shadow-lg">
              <p className="text-white text-center text-lg sm:text-xl font-semibold leading-relaxed">
                O problema nunca foi o anúncio. O problema é o que acontece <span className="underline decoration-2 underline-offset-4">depois do clique</span>.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </Section>
  );
}
