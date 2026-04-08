'use client';

import { DollarSign, Target, ArrowRight } from 'lucide-react';
import { Section, MotionWrapper, CTAButton } from './ui';

type Variant = 'default' | 'sofia';

const COPY = {
  default: {
    bodyText: (
      <>
        Leads desqualificados, baixa conversão e dependência de indicação estão custando o crescimento
        da sua clínica. Com o <strong>Sistema de Captação Premium™</strong>, você elimina esses
        vazamentos e transforma sua clínica em uma{' '}
        <strong style={{ color: '#655cb1' }}>máquina previsível de faturamento</strong>.
      </>
    ),
    ctaTitle: 'Impressionado com o Sistema Completo?',
    ctaSubtitle: 'Sim, quero descobrir como implementar isso na minha clínica',
  },
  sofia: {
    bodyText: (
      <>
        Leads desqualificados, atendimento lento e dependência de indicação estão custando o
        crescimento da sua clínica. Com a <strong>Sofia IA™</strong>, você elimina esses vazamentos e
        transforma sua clínica em uma{' '}
        <strong style={{ color: '#655cb1' }}>máquina previsível de faturamento</strong>.
      </>
    ),
    ctaTitle: 'Quer a Sofia trabalhando na sua clínica?',
    ctaSubtitle: 'Agende uma avaliação e descubra como implementar a Sofia IA™ na sua realidade',
  },
};

export default function FinancialImpact({ variant = 'default' }: { variant?: Variant }) {
  const copy = COPY[variant];

  return (
    <Section className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <MotionWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              color: '#655cb1',
              background: 'rgba(101, 92, 177, 0.1)',
              border: '1px solid rgba(101, 92, 177, 0.3)',
            }}
          >
            EXCLUSIVO
          </div>

          {/* Título com ícone */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
              >
                <DollarSign className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              IMPACTO FINANCEIRO
            </h2>
          </div>

          {/* Card Principal */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 text-left shadow-xl"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #655cb1, #659fcf, #5dd6d5)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-4">
              <span className="text-gray-900">Cada protocolo perdido = </span>
              <span className="text-red-500">R$20-30k</span>
              <span className="text-gray-900"> que nunca mais voltam</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{copy.bodyText}</p>
          </div>

          {/* CTA Section */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.ctaTitle}</h3>
            <p className="text-base sm:text-lg text-gray-600">{copy.ctaSubtitle}</p>
            <div className="flex justify-center pt-2">
              <CTAButton utmContent="cta_after_financial_impact">
                <span className="flex items-center gap-2 text-sm sm:text-base">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  Agendar avaliação
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </CTAButton>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
