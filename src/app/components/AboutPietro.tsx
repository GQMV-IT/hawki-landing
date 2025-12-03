'use client';

import { Award, Users, Briefcase, Megaphone, Lightbulb } from 'lucide-react';
import { Section, MotionWrapper } from './ui';

export default function AboutPietro() {
  const credentials = [
    {
      icon: Briefcase,
      text: 'Especialista em IA para Clínicas e Automação de Atendimento',
    },
    {
      icon: Award,
      text: 'Criador de estratégias avançadas que já ajudaram dezenas de clínicas a saírem da dependência de indicações',
    },
    {
      icon: Lightbulb,
      text: 'Fundador de soluções inovadoras que integram IA à captação, conversão e escalabilidade de clínicas',
    },
    {
      icon: Megaphone,
      text: 'Consultor e mentor, ajudando clínicas a dominarem IA para gerar crescimento previsível',
    },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <MotionWrapper>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Quem é Pietro Hummel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça o especialista que vai transformar sua visão sobre IA aplicada a clínicas
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Placeholder */}
            <MotionWrapper delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 flex items-center justify-center shadow-2xl border-4 border-white">
                  <div className="text-center p-8">
                    <Users className="w-32 h-32 mx-auto mb-4" style={{ color: '#655cb1' }} />
                    <p className="text-2xl font-bold text-gray-900">Pietro Hummel</p>
                    <p className="text-lg text-gray-600 mt-2">Fundador Hawki</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Credentials */}
            <div className="space-y-6">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                
                return (
                  <MotionWrapper key={index} delay={0.3 + index * 0.1}>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(to right, #655cb1, #5dd6d5)' }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">
                        {credential.text}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>

          {/* Final Statement */}
          <MotionWrapper delay={0.8}>
            <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-2xl p-8 shadow-lg text-center">
              <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
                <span className="font-bold" style={{ color: '#655cb1' }}>
                  Com experiência prática no setor de saúde
                </span>, Pietro Hummel vai te guiar no caminho para implementar o{' '}
                <span className="font-bold">Sistema de Captação Premium™</span> e transformar 
                sua forma de captar e converter pacientes!
              </p>
            </div>
          </MotionWrapper>
        </div>
      </MotionWrapper>
    </Section>
  );
}

