'use client';

import { useEffect, useState } from 'react';
import { 
  Header, 
  IntroModal, 
  HeroPremium,
  CTASectionPremium,
  SolutionSection,
  ComparisonSection,
  WhatYouGetSection,
  FinancialImpact,
  HowItWorks,
  AboutPietro,
  TargetAudience,
  Problems,
  FinalCTA
} from './components';
import { useUserStore } from '@/store/userStore';
import { getUserInfo } from '@/services';

export default function Home() {
  const { setUserData, hasUserData, instagram } = useUserStore();
  const [isLoadingStoredData, setIsLoadingStoredData] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadStoredUserData = async () => {
      try {
        const storedData = localStorage.getItem('userData');

        if (!storedData) {
          return;
        }

        const userData = JSON.parse(storedData);
        const instagramInfo = await getUserInfo(userData.instagram);

        setUserData({
          name: userData.name,
          phone: userData.phone,
          instagram: userData.instagram,
          instagramInfo: instagramInfo,
        });
      } catch (error) {
        console.error('Error loading stored user data:', error);
      } finally {
        setIsLoadingStoredData(false);
      }
    };

    loadStoredUserData();
  }, [setUserData]);

  // Scroll to top when user data changes (after initial load)
  useEffect(() => {
    if (!isLoadingStoredData && instagram) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [instagram, isLoadingStoredData]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero with Instagram Profile Info + AI Analysis + CTA */}
      <HeroPremium />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Comparison */}
      <ComparisonSection />
      
      {/* CTA 2 */}
      <CTASectionPremium 
        title="Pronto para Transformar sua Clínica?"
        subtitle="Não espere mais - Agende sua avaliação estratégica e descubra como escalar"
        buttonText="QUERO AGENDAR MINHA REUNIÃO"
        utmContent="cta_after_comparison"
        backgroundVariant="light"
        buttonIcon="rocket"
      />
      
      {/* What You Get */}
      <WhatYouGetSection />
      
      {/* Financial Impact + CTA */}
      <FinancialImpact />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* CTA 4 */}
      <CTASectionPremium 
        title="Quer Este Sistema Funcionando na Sua Clínica?"
        subtitle="Agende sua avaliação e descubra o potencial real da sua clínica"
        buttonText="QUERO DESCOBRIR MEU POTENCIAL"
        utmContent="cta_after_how_it_works"
        backgroundVariant="light"
        buttonIcon="rocket"
      />
      
      {/* About Pietro */}
      <AboutPietro />
      
      {/* Target Audience */}
      <TargetAudience />
      
      {/* Problems */}
      <Problems />
      
      {/* Final CTA with Urgency */}
      <FinalCTA />

      {/* Intro Modal for first-time visitors */}
      {!hasUserData() && <IntroModal />}
    </div>
  );
}
