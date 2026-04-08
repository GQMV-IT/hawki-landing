'use client';

import { useEffect, useState } from 'react';
import {
  IntroModal,
  InactivityPopup,
  HeroPremium,
  CTASectionPremium,
  SolutionSection,
  ComparisonSection,
  WhatYouGetSection,
  FinancialImpact,
  HowItWorks,
  AboutPietro,
  TargetAudience,
} from '../components';
import { useUserStore } from '@/store/userStore';
import { getUserInfo } from '@/services';
import type { Variant } from './page';
import { FormContext, getFormUrl } from './FormContext';

// ---------------------------------------------------------------------------
// Section IDs
// ---------------------------------------------------------------------------
type SectionId =
  | 'hero'
  | 'solution'
  | 'comparison'
  | 'what-you-get'
  | 'financial'
  | 'how-it-works'
  | 'about'
  | 'target-full'           // cards + checklist
  | 'target-identification' // checklist only (sem cards genéricos)
  | 'cta-mid'
  | 'cta-final';

// ---------------------------------------------------------------------------
// Layouts — cada variant define a ordem das seções
// ---------------------------------------------------------------------------
// default: fluxo original completo
// sofia: arco Identificação → Dor → Solução → Diferenciação → Mecanismo → Credibilidade → CTA
// sofia-pain: abre com golpe financeiro (tráfego frio)
// sofia-prova: abre com credibilidade Pietro (audiência cética)
// sofia-rapida: abre com simplicidade/HowItWorks (donos ocupados, medo de complexidade)
const LAYOUTS: Record<Variant, SectionId[]> = {
  default: [
    'hero',
    'solution',
    'comparison',
    'cta-mid',
    'what-you-get',
    'financial',
    'how-it-works',
    'cta-final',
    'about',
    'target-full',
  ],
  sofia: [
    'hero',
    'target-identification',
    'financial',
    'solution',
    'comparison',
    'how-it-works',
    'about',
    'cta-final',
  ],
  'sofia-pain': [
    'hero',
    'financial',
    'target-identification',
    'solution',
    'comparison',
    'about',
    'how-it-works',
    'cta-final',
  ],
  'sofia-prova': [
    'hero',
    'about',
    'target-identification',
    'comparison',
    'solution',
    'how-it-works',
    'financial',
    'cta-final',
  ],
  'sofia-rapida': [
    'hero',
    'how-it-works',
    'solution',
    'target-identification',
    'financial',
    'comparison',
    'about',
    'cta-final',
  ],
};

// ---------------------------------------------------------------------------
// CTA copy por variant
// ---------------------------------------------------------------------------
interface CtaConfig {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CTA_COPY: Record<Variant, { mid?: CtaConfig; final: CtaConfig }> = {
  default: {
    mid: {
      title: 'Pronto para Transformar sua Clínica?',
      subtitle: 'Não espere mais - Agende sua avaliação estratégica e descubra como escalar',
      buttonText: 'Quero começar agora',
    },
    final: {
      title: 'Quer Este Sistema Funcionando na Sua Clínica?',
      subtitle: 'Agende sua avaliação e descubra o potencial real da sua clínica',
      buttonText: 'Quero descobrir meu potencial',
    },
  },
  sofia: {
    final: {
      title: 'Pronto para ter a Sofia trabalhando por você?',
      subtitle: 'Agende sua avaliação gratuita e descubra como a Sofia se adapta à sua clínica',
      buttonText: 'Agendar avaliação gratuita',
    },
  },
  'sofia-pain': {
    final: {
      title: 'Chega de perder pacientes por atendimento lento.',
      subtitle:
        'A Sofia atende, qualifica e agenda — enquanto você cuida do que importa. Agende sua avaliação agora.',
      buttonText: 'Quero parar de perder pacientes',
    },
  },
  'sofia-prova': {
    final: {
      title: 'Dezenas de clínicas já usam a Sofia. Sua pode ser a próxima.',
      subtitle:
        'Agende sua avaliação e veja na prática como a Sofia funciona na sua especialidade.',
      buttonText: 'Quero ver a Sofia em ação',
    },
  },
  'sofia-rapida': {
    final: {
      title: 'Em 72 horas a Sofia pode estar atendendo na sua clínica.',
      subtitle:
        'Sem complicação, sem dependência de TI. Agende e entendemos juntos como ativar.',
      buttonText: 'Quero ativar em 72 horas',
    },
  },
};

// ---------------------------------------------------------------------------
// Client component
// ---------------------------------------------------------------------------
export default function LandingClient({ variant }: { variant: Variant }) {
  const { setUserData, hasUserData, instagram } = useUserStore();
  const [isLoadingStoredData, setIsLoadingStoredData] = useState(true);

  useEffect(() => {
    const loadStoredUserData = async () => {
      try {
        const storedData = localStorage.getItem('userData');
        if (!storedData) return;
        const userData = JSON.parse(storedData);
        const instagramInfo = await getUserInfo(userData.instagram);
        setUserData({
          name: userData.name,
          phone: userData.phone,
          instagram: userData.instagram,
          instagramInfo,
        });
      } catch (error) {
        console.error('Error loading stored user data:', error);
      } finally {
        setIsLoadingStoredData(false);
      }
    };
    loadStoredUserData();
  }, [setUserData]);

  useEffect(() => {
    if (!isLoadingStoredData && instagram) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [instagram, isLoadingStoredData]);

  // Todos os variants sofia-* compartilham o mesmo copy de componente.
  // A diferença entre eles está na ordem das seções e no copy dos CTAs.
  const copyGroup: 'default' | 'sofia' = variant === 'default' ? 'default' : 'sofia';

  const layout = LAYOUTS[variant];
  const cta = CTA_COPY[variant];

  const renderSection = (section: SectionId, key: number) => {
    switch (section) {
      case 'hero':
        return <HeroPremium key={key} />;

      case 'solution':
        return <SolutionSection key={key} variant={copyGroup} />;

      case 'comparison':
        return <ComparisonSection key={key} variant={copyGroup} />;

      case 'what-you-get':
        return <WhatYouGetSection key={key} variant={copyGroup} />;

      case 'financial':
        return <FinancialImpact key={key} variant={copyGroup} />;

      case 'how-it-works':
        return <HowItWorks key={key} />;

      case 'about':
        return <AboutPietro key={key} variant={copyGroup} />;

      case 'target-full':
        return <TargetAudience key={key} mode="full" />;

      case 'target-identification':
        return <TargetAudience key={key} mode="identification-only" />;

      case 'cta-mid':
        return cta.mid ? (
          <CTASectionPremium
            key={key}
            title={cta.mid.title}
            subtitle={cta.mid.subtitle}
            buttonText={cta.mid.buttonText}
            utmContent="cta_mid"
            backgroundVariant="light"
            buttonIcon="rocket"
          />
        ) : null;

      case 'cta-final':
        return (
          <CTASectionPremium
            key={key}
            title={cta.final.title}
            subtitle={cta.final.subtitle}
            buttonText={cta.final.buttonText}
            utmContent="cta_final"
            backgroundVariant="gradient"
            buttonIcon="rocket"
          />
        );

      default:
        return null;
    }
  };

  return (
    <FormContext.Provider value={{ formBaseUrl: getFormUrl(variant) }}>
      <div className="min-h-screen bg-white">
        {layout.map((section, i) => renderSection(section, i))}
        {!hasUserData() && <IntroModal />}
        <InactivityPopup />
      </div>
    </FormContext.Provider>
  );
}
