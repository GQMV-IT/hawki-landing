'use client';

import { Bot, TrendingUp, BarChart3, Calendar, Cog, Rocket } from 'lucide-react';
import { Section, MotionWrapper } from './ui';
import { useUserStore } from '@/store';

type Variant = 'default' | 'sofia' | 'trafego';

const COPY = {
  default: {
    preTitle: 'É exatamente por isso que criamos o',
    title: 'SISTEMA DE ATENDIMENTO COM A SOFIA IA™',
    description:
      'O único sistema completo de IA que transforma sua clínica em uma máquina previsível de atendimento e agendamento de pacientes – mesmo que você não entenda nada de tecnologia.',
    features: [
      {
        icon: Bot,
        title: 'Sofia IA atendendo 24h por dia',
        description: 'Atendimento humanizado que qualifica pacientes e agenda automaticamente via WhatsApp',
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
        description: 'IA funcionando no atendimento, qualificação, agendamento e análise de dados da sua clínica',
      },
    ],
  },
  sofia: {
    preTitle: 'É exatamente por isso que criamos a',
    title: 'SOFIA IA™',
    description:
      'A IA especializada em clínicas que atende, qualifica e agenda pacientes pelo WhatsApp — 24 horas por dia, 7 dias por semana, sem intervenção humana.',
    features: [
      {
        icon: Bot,
        title: 'Sofia atende 24h por dia',
        description: 'Atendimento humanizado via WhatsApp que qualifica pacientes e agenda automaticamente — sem depender da sua equipe',
      },
      {
        icon: TrendingUp,
        title: 'Conversão de 30 a 50% dos leads',
        description: 'A Sofia identifica urgência, qualifica o lead e conduz o paciente até o agendamento',
      },
      {
        icon: BarChart3,
        title: 'Dados em tempo real',
        description: 'Dashboards com tudo que acontece no atendimento — de onde vieram os pacientes, quantos agendaram, onde estão os gargalos',
      },
      {
        icon: Calendar,
        title: 'Agenda previsível e cheia',
        description: 'Chega de dias vazios e correria sem controle — a Sofia organiza o fluxo de pacientes de forma consistente',
      },
      {
        icon: Cog,
        title: 'Implementação personalizada',
        description: 'A Sofia é configurada especificamente para a sua clínica, especialidade e fluxo de atendimento',
      },
    ],
  },
  trafego: {
    preTitle: 'Por isso criamos o',
    title: 'SISTEMA DE CAPTAÇÃO + CONVERSÃO HAWKI',
    description:
      'Tráfego pago de alta performance combinado com a Sofia IA, que atende, qualifica e agenda seus pacientes 24 horas por dia. Do anúncio à consulta agendada, sem buracos no caminho.',
    features: [
      {
        icon: Rocket,
        title: 'Anúncios segmentados para sua especialidade',
        description: 'Campanhas criadas com base no perfil real dos seus pacientes ideais. Nada genérico, nada jogado.',
      },
      {
        icon: TrendingUp,
        title: 'Leads chegando todos os dias no seu WhatsApp',
        description: 'Fluxo constante de pessoas interessadas nos seus serviços, prontas para agendar.',
      },
      {
        icon: Bot,
        title: 'Sofia IA respondendo cada lead em segundos',
        description: 'Enquanto outros demoram horas para responder, a Sofia já está qualificando e conduzindo o paciente para o agendamento.',
      },
      {
        icon: Calendar,
        title: 'Agendamento direto na sua agenda',
        description: 'O paciente agenda sem precisar de secretária, ligação ou troca infinita de mensagens.',
      },
      {
        icon: BarChart3,
        title: 'Dashboard com retorno real do investimento',
        description: 'Você sabe exatamente quanto investiu, quantos leads chegaram, quantos agendaram e quanto faturou.',
      },
    ],
  },
};

export default function SolutionSection({ variant = 'default' }: { variant?: Variant }) {
  const { name } = useUserStore();
  const copy = COPY[variant];
  const features = copy.features;

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título da Solução */}
          <div className="text-center space-y-4">
            <div className="inline-block">
              <span
                className="inline-block px-5 py-2 text-sm font-bold uppercase tracking-wider text-white rounded-full shadow-lg"
                style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
              >
                SOLUÇÃO EXCLUSIVA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              {copy.preTitle}
            </h2>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-extrabold"
              style={{ color: '#655cb1' }}
            >
              {copy.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed pt-4">
              {copy.description}
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
                          <h5 className="text-lg font-bold text-gray-900">{feature.title}</h5>
                          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
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
