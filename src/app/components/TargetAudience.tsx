'use client';

import { CheckCircle2, Users, TrendingDown, Clock, Target, DollarSign, ArrowRight } from 'lucide-react';
import { Section, MotionWrapper, CTAButton } from './ui';

interface TargetAudienceProps {
  // full: exibe cards + checklist (default original)
  // identification-only: exibe apenas o checklist — para usar no topo do funil
  mode?: 'full' | 'identification-only';
}

const targetGroups = [
  { icon: Users, text: 'Donos de clínicas que querem sair da dependência de indicações' },
  { icon: TrendingDown, text: 'Gestores cansados de agenda inconsistente e faturamento imprevisível' },
  { icon: Clock, text: 'Clínicas que perdem leads por atendimento lento ou despreparado' },
  { icon: Target, text: 'Profissionais de saúde que querem escalar com previsibilidade' },
  { icon: DollarSign, text: 'Quem está cansado de investir em marketing sem resultados concretos' },
];

const identificationPoints = [
  'Sua agenda oscila entre dias vazios e correria sem controle',
  'Leads chegam mas não convertem porque o atendimento é lento',
  'Você depende de indicações e não consegue escalar',
  'Já tentou tráfego pago mas teve baixa conversão',
  'Não sabe quantos leads precisa para bater sua meta de faturamento',
  'Quer crescimento previsível mas não sabe por onde começar',
];

function IdentificationChecklist() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Você Se Identifica?</h2>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="space-y-6">
          {identificationPoints.map((point, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle2
                  className="w-6 h-6 flex-shrink-0 mt-1"
                  style={{ color: '#659fcf' }}
                />
                <p className="text-gray-800 text-lg leading-relaxed">{point}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl shadow-lg">
          <p className="text-white text-center text-lg font-semibold leading-relaxed">
            Se você se identificou com pelo menos 3 desses pontos, a Sofia foi feita para a sua clínica.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <CTAButton utmContent="target_audience_cta">
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              Quero conhecer a Sofia
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default function TargetAudience({ mode = 'full' }: TargetAudienceProps) {
  if (mode === 'identification-only') {
    return (
      <Section className="bg-white">
        <MotionWrapper>
          <div className="max-w-6xl mx-auto">
            <IdentificationChecklist />
          </div>
        </MotionWrapper>
      </Section>
    );
  }

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Cards — Para Quem é Este Sistema */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Para Quem é Este Sistema?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <MotionWrapper key={index} delay={index * 0.1}>
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ background: 'linear-gradient(to right, #655cb1, #5dd6d5)' }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-800 font-medium leading-relaxed">{group.text}</p>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>

          {/* Checklist */}
          <IdentificationChecklist />
        </div>
      </MotionWrapper>
    </Section>
  );
}
