'use client';

import { X, Check, Layers } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

type Variant = 'default' | 'sofia';

const COPY = {
  default: {
    title: 'Sistema Completo',
    subtitle:
      'Não é apenas mais uma ferramenta. É um sistema completo que transforma sua clínica em uma máquina previsível de resultados.',
    others: {
      p1: 'A maioria das "soluções de IA para clínicas" são chatbots genéricos que nunca foram testados na vida real.',
      p2: 'Te vendem promessas vazias e automações que não convertem. Na hora de implementar... você fica sozinho.',
    },
    here: {
      p1: 'Você trabalha com quem implementa IA em clínicas todos os dias e gera resultados reais.',
      p2: 'Sistema 100% aplicado, testado e validado em dezenas de clínicas.',
    },
  },
  sofia: {
    title: 'Por que a Sofia é diferente?',
    subtitle:
      'Não é um chatbot genérico. A Sofia foi construída especificamente para clínicas — testada, validada e otimizada para converter pacientes de verdade.',
    others: {
      p1: 'A maioria dos "chatbots para clínicas" são genéricos, nunca foram testados na vida real e não entendem o fluxo de um paciente.',
      p2: 'Te vendem promessas de automação. Na hora de implementar, você fica sozinho com uma ferramenta que não converte.',
    },
    here: {
      p1: 'A Sofia foi treinada e validada em dezenas de clínicas reais — com acompanhamento contínuo de quem entende do setor de saúde.',
      p2: 'Implementação feita junto com você, suporte ativo e otimização constante.',
    },
  },
};

export default function ComparisonSection({ variant = 'default' }: { variant?: Variant }) {
  const copy = COPY[variant];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
              >
                <Layers className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{copy.title}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {copy.subtitle}
            </p>
            <div
              className="w-24 h-1 mx-auto mt-6"
              style={{ background: 'linear-gradient(to right, #655cb1, #5dd6d5)' }}
            />
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Outras Soluções */}
            <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white p-5 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">A VERDADE SOBRE OUTRAS SOLUÇÕES</h3>
                  <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <p>{copy.others.p1}</p>
                    <p>{copy.others.p2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aqui é Diferente */}
            <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white p-5 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">AQUI É DIFERENTE</h3>
                  <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
                    <p>{copy.here.p1}</p>
                    <p>{copy.here.p2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
