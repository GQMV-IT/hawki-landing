'use client';

import { CheckCircle2, Bot, Headphones, BarChart3, RefreshCw, Megaphone, MousePointerClick, CalendarCheck } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

type Variant = 'default' | 'sofia' | 'trafego';

const COPY = {
  default: {
    title: 'Como Funciona a Sofia na Sua Clínica',
    subtitle: 'O ecossistema completo para automatizar o atendimento e os agendamentos da sua clínica',
    highlight: {
      title: 'Otimização Constante:',
      text: 'Com a Sofia IA funcionando 24/7 e gerando métricas em tempo real, sua clínica terá previsibilidade e eficiência máxima no atendimento.',
    },
    steps: [
      {
        icon: CheckCircle2,
        title: 'Implementação Estratégica',
        description: 'Análise completa da sua clínica e implementação personalizada do sistema',
        gradient: 'from-purple-500 to-blue-500',
      },
      {
        icon: Bot,
        title: 'Sofia IA 24/7',
        description: 'Atendimento inteligente funcionando sem parar, qualificando e agendando pacientes',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        icon: Headphones,
        title: 'Suporte Contínuo',
        description: 'Acompanhamento e otimização constante para maximizar resultados',
        gradient: 'from-cyan-500 to-purple-500',
      },
      {
        icon: BarChart3,
        title: 'Dashboard em Tempo Real',
        description: 'Acesso a todos os dados e métricas dos seus atendimentos e agendamentos',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        icon: RefreshCw,
        title: 'Atualizações Constantes',
        description: 'Sistema sempre atualizado com as melhores práticas de conversão',
        gradient: 'from-pink-500 to-cyan-500',
      },
    ],
  },
  sofia: {
    title: 'Como Funciona a Sofia na Sua Clínica',
    subtitle: 'O ecossistema completo para automatizar o atendimento e os agendamentos da sua clínica',
    highlight: {
      title: 'Otimização Constante:',
      text: 'Com a Sofia IA funcionando 24/7 e gerando métricas em tempo real, sua clínica terá previsibilidade e eficiência máxima no atendimento.',
    },
    steps: [
      {
        icon: CheckCircle2,
        title: 'Implementação Estratégica',
        description: 'Análise completa da sua clínica e implementação personalizada do sistema',
        gradient: 'from-purple-500 to-blue-500',
      },
      {
        icon: Bot,
        title: 'Sofia IA 24/7',
        description: 'Atendimento inteligente funcionando sem parar, qualificando e agendando pacientes',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        icon: Headphones,
        title: 'Suporte Contínuo',
        description: 'Acompanhamento e otimização constante para maximizar resultados',
        gradient: 'from-cyan-500 to-purple-500',
      },
      {
        icon: BarChart3,
        title: 'Dashboard em Tempo Real',
        description: 'Acesso a todos os dados e métricas dos seus atendimentos e agendamentos',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        icon: RefreshCw,
        title: 'Atualizações Constantes',
        description: 'Sistema sempre atualizado com as melhores práticas de conversão',
        gradient: 'from-pink-500 to-cyan-500',
      },
    ],
  },
  trafego: {
    title: 'Do Anúncio à Consulta Agendada',
    subtitle: 'Veja como cada etapa do funil trabalha pra você, sem deixar nenhum lead escapar.',
    highlight: {
      title: 'Funil completo, sem buracos:',
      text: 'Você investe no anúncio. A gente cuida de todo o resto. Da atração até o agendamento, cada etapa é monitorada e otimizada pra gerar o máximo de consultas com o menor custo.',
    },
    steps: [
      {
        icon: Megaphone,
        title: 'Anúncio Segmentado',
        description: 'Criamos campanhas focadas no perfil dos seus pacientes ideais. Nada genérico, nada jogado.',
        gradient: 'from-purple-500 to-blue-500',
      },
      {
        icon: MousePointerClick,
        title: 'Lead Chega no WhatsApp',
        description: 'O paciente interessado clica e cai direto no seu WhatsApp, pronto pra ser atendido.',
        gradient: 'from-blue-500 to-cyan-500',
      },
      {
        icon: Bot,
        title: 'Sofia Atende em Segundos',
        description: 'A Sofia responde na hora, tira dúvidas, qualifica o paciente e conduz ele até o agendamento.',
        gradient: 'from-cyan-500 to-purple-500',
      },
      {
        icon: CalendarCheck,
        title: 'Consulta Agendada',
        description: 'O paciente agenda direto na sua agenda. Sem ligação, sem espera, sem perder o timing.',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        icon: BarChart3,
        title: 'Dados e Otimização',
        description: 'Você acompanha tudo no dashboard: quanto investiu, quantos leads chegaram, quantos agendaram.',
        gradient: 'from-pink-500 to-cyan-500',
      },
    ],
  },
};

export default function HowItWorks({ variant = 'default' }: { variant?: Variant }) {
  const copy = COPY[variant];
  const steps = copy.steps;

  return (
    <Section className="bg-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {copy.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {copy.subtitle}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <MotionWrapper key={index} delay={index * 0.1}>
                  <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center shadow-md mb-4`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Destaque Final */}
          <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {copy.highlight.title}
              </h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {copy.highlight.text}
              </p>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}
