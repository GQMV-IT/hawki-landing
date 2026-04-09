'use client';

import { MessageSquare, TrendingUp } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

type Variant = 'default' | 'sofia';

const COPY = {
  default: {
    title: 'O Que Você Vai Ter Na Sua Clínica',
    subtitle: 'Você vai ter um sistema completo de IA implementado em toda a jornada do paciente.',
    pillars: [
      {
        icon: MessageSquare,
        title: 'Qualificação e Agendamento',
        subtitle: 'Sistema Elite de Conversão™',
        features: [
          'Sofia IA atendendo no WhatsApp de forma humanizada 24/7',
          'Qualificação automática de leads e identificação de urgência',
          'Agendamento inteligente direto na agenda da clínica',
          'Follow-up automático com leads que não responderam',
          'Taxa de conversão entre 30-50% de leads em agendamentos',
        ],
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
      },
      {
        icon: TrendingUp,
        title: 'Inteligência e Escalabilidade',
        subtitle: 'Inteligência de Escalabilidade™',
        features: [
          'Dashboard com dados em tempo real sobre captação e conversão',
          'Insights automáticos sobre origem dos melhores pacientes',
          'Identificação de gargalos no funil de atendimento',
          'Otimização contínua baseada em performance real',
          'Previsibilidade total no crescimento da clínica',
        ],
        gradient: 'from-cyan-500 to-purple-500',
        bgGradient: 'from-cyan-50 to-purple-50',
      },
    ],
  },
  sofia: {
    title: 'O Que a Sofia Faz na Sua Clínica',
    subtitle: 'A Sofia atua em dois pilares fundamentais: atendimento e inteligência — cobrindo toda a jornada do paciente.',
    pillars: [
      {
        icon: MessageSquare,
        title: 'Sofia no Atendimento',
        subtitle: 'Do primeiro contato ao agendamento',
        features: [
          'Atende no WhatsApp de forma humanizada 24 horas por dia',
          'Qualifica automaticamente e identifica urgência do paciente',
          'Agenda diretamente na agenda da clínica sem intervenção humana',
          'Faz follow-up automático com quem não respondeu',
          'Converte entre 30% e 50% dos leads em consultas agendadas',
        ],
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
      },
      {
        icon: TrendingUp,
        title: 'Sofia nos Dados',
        subtitle: 'Visibilidade total sobre o crescimento',
        features: [
          'Dashboard com dados em tempo real de atendimento e conversão',
          'Insights automáticos sobre a origem dos melhores pacientes',
          'Identificação de gargalos no fluxo de agendamento',
          'Otimização contínua com base em performance real',
          'Previsibilidade total para crescer sem depender de indicações',
        ],
        gradient: 'from-cyan-500 to-purple-500',
        bgGradient: 'from-cyan-50 to-purple-50',
      },
    ],
  },
};

export default function WhatYouGetSection({ variant = 'default' }: { variant?: Variant }) {
  const copy = COPY[variant];
  const pillars = copy.pillars;

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Título da Seção */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">{copy.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.subtitle}</p>
          </div>

          {/* Pilares do Sistema */}
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <MotionWrapper key={index} delay={index * 0.2}>
                  <div
                    className={`relative h-full bg-gradient-to-br ${pillar.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <div className="space-y-2 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div
                              className={`w-5 h-5 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}
                            >
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
