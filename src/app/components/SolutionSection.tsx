'use client';

import { CheckCircle2, Bot, Users, TrendingUp, BarChart3, Calendar, Cog, Rocket } from 'lucide-react';
import { Section, MotionWrapper } from './ui';
import { useUserStore } from '@/store';

export default function SolutionSection() {
  const { name } = useUserStore();

  const features = [
    {
      icon: Bot,
      title: 'Sofia IA atendendo 24h por dia',
      description: 'Atendimento humanizado que qualifica pacientes e agenda automaticamente via WhatsApp',
    },
    {
      icon: Users,
      title: 'Fluxo constante de leads qualificados',
      description: '50-150 leads por mês chegando direto para sua clínica através do Funil Odonto Target™',
    },
    {
      icon: TrendingUp,
      title: 'Taxa de conversão de 30-50%',
      description: 'Sistema Elite de Conversão™ que transforma leads em pacientes agendados',
    },
    {
      icon: BarChart3,
      title: 'Dashboards em tempo real',
      description: 'Dados organizados e trackeados mostrando exatamente onde investir e otimizar',
    },
    {
      icon: Calendar,
      title: 'Previsibilidade total no crescimento',
      description: 'Acabe com a agenda fantasma e dependência de indicações',
    },
    {
      icon: Cog,
      title: 'Sistema completo integrado',
      description: 'IA funcionando na captação, qualificação, agendamento e análise de dados da sua clínica',
    },
  ];

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título da Solução */}
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#659fcf' }}>
              SOLUÇÃO EXCLUSIVA
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              É exatamente por isso que criamos o
            </h2>
            <h3 
              className="text-xl sm:text-2xl md:text-3xl font-extrabold"
              style={{ color: '#655cb1' }}
            >
              SISTEMA DE CAPTAÇÃO PREMIUM™
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed pt-4">
              O único sistema completo de IA que transforma sua clínica em uma máquina previsível de 
              captação e conversão de pacientes – mesmo que você não entenda nada de tecnologia.
            </p>
          </div>

          {/* Call to action com nome */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Rocket className="w-8 h-8" style={{ color: '#655cb1' }} />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Em poucos dias, <span style={{ color: '#655cb1' }}>{name?.toUpperCase()}</span>, sua clínica terá:
            </h4>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="h-full">
                  <MotionWrapper delay={index * 0.1} className="h-full">
                    <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-lg font-bold text-gray-900">
                            {feature.title}
                          </h5>
                          <p className="text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionWrapper>
                </div>
              );
            })}
          </div>

        </div>
      </MotionWrapper>
    </Section>
  );
}

