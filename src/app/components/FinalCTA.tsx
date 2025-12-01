'use client';

import { CheckCircle2, Rocket, Target, ArrowRight } from 'lucide-react';
import { Section, MotionWrapper, CTAButton } from './ui';

export default function FinalCTA() {
  const benefits = [
    'Como gerar 50-150 leads qualificados por mês para sua clínica',
    'Como Sofia IA pode automatizar seu atendimento e aumentar conversão para 30-50%',
    'O potencial real de faturamento da sua clínica com um sistema previsível',
    'O caminho exato para sair da dependência de indicações',
  ];

  return (
    <Section className="bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 text-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Título Principal */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Agende Sua Avaliação Estratégica
            </h2>
            <p className="text-base sm:text-lg text-cyan-200 max-w-4xl mx-auto leading-relaxed">
              Pietro Hummel e a equipe Hawki estão selecionando clínicas para implementar 
              o Sistema de Captação Premium™.
            </p>
          </div>

          {/* Informações da Reunião */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 border border-white/20 shadow-2xl">
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold text-cyan-200">
                Em uma reunião de 30 minutos, você vai descobrir:
              </p>
            </div>

            {/* Lista de Benefícios */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <MotionWrapper key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-white leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="text-center pt-2">
              <p className="text-sm sm:text-base text-cyan-200 italic max-w-3xl mx-auto leading-relaxed">
                Esta não é uma reunião genérica de vendas. É uma análise estratégica do seu 
                cenário atual e como IA pode resolver problemas específicos da sua clínica.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <CTAButton utmContent="final_cta">
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                AGENDAR AVALIAÇÃO
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </CTAButton>
          </div>

          {/* Urgência Final */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-xl">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua clínica está perdendo pacientes neste exato momento.
              </h3>
              <p className="text-sm sm:text-base text-cyan-100 max-w-4xl mx-auto leading-relaxed">
                Cada hora que passa sem um sistema estruturado é receita deixada na mesa. 
                Enquanto você pensa, outras clínicas já estão usando IA para captar, qualificar 
                e converter pacientes 24 horas por dia.
              </p>
              <p className="text-base sm:text-lg font-bold text-yellow-300 pt-2">
                A pergunta não é se sua clínica precisa disso. A pergunta é: quanto tempo você 
                vai esperar para tomar controle do seu crescimento?
              </p>
            </div>
          </div>

          {/* CTA Button Final */}
          <div className="flex justify-center">
            <CTAButton utmContent="final_urgency">
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                AGENDAR REUNIÃO
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </CTAButton>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}

