'use client';

import { Target, MessageSquare, TrendingUp } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

export default function WhatYouGetSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Captação',
      subtitle: 'Funil Odonto Target™',
      features: [
        'Tráfego pago otimizado para atrair o perfil ideal de paciente',
        'Geração de 50-150 leads qualificados por mês',
        'Criativos e campanhas testadas especificamente para clínicas',
        'Pré-educação do lead antes do primeiro contato',
      ],
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50',
    },
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
  ];

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Título da Seção */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              O Que Você Vai Ter Na Sua Clínica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você vai ter um sistema completo de IA implementado em toda a jornada do paciente.
            </p>
          </div>

          {/* Pilares do Sistema */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              
              return (
                <MotionWrapper key={index} delay={index * 0.2}>
                  <div className={`relative h-full bg-gradient-to-br ${pillar.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50`}>
                    {/* Ícone */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Título */}
                    <div className="space-y-2 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {pillar.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                        {pillar.subtitle}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center`}>
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

