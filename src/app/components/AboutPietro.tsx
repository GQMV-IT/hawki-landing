'use client';

import Image from 'next/image';
import { Award, Briefcase, Megaphone, Lightbulb } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Quem é Pietro Hummel?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça o especialista que vai transformar sua visão sobre IA aplicada a clínicas
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pietro's Photo */}
            <MotionWrapper delay={0.2}>
              <div className="relative flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/Pietro.jpg"
                    alt="Pietro Hummel - Fundador Hawki"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, 320px"
                    priority
                  />
                </div>
                {/* Name Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                  <p className="text-lg font-bold text-gray-900">Pietro Hummel</p>
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

