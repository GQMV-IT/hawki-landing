'use client';

import { useState, useEffect, useMemo } from 'react';
import { X, AlertTriangle, Clock, Zap, TrendingUp } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useInactivityTimer } from '@/hooks/useInactivityTimer';

const INACTIVITY_TIMEOUT = 90 * 1000; // 1.5 minutes
const COUNTDOWN_DURATION = 15 * 60; // 15 minutes in seconds

export default function InactivityPopup() {
  const { name, phone, instagram } = useUserStore();
  const hasUserData = useUserStore((state) => state.hasUserData());
  
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_DURATION);

  // Only enable timer if user has data and hasn't dismissed
  const { isInactive } = useInactivityTimer({
    timeout: INACTIVITY_TIMEOUT,
    enabled: hasUserData && !isDismissed,
  });

  // Show popup when inactive
  useEffect(() => {
    if (isInactive && !isDismissed) {
      setIsVisible(true);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }
  }, [isInactive, isDismissed]);

  // Countdown timer
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Format countdown as MM:SS
  const formattedCountdown = useMemo(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [countdown]);

  // Construct Typeform URL
  const typeformUrl = useMemo(() => {
    const baseUrl = 'https://hawki.pro.typeform.com/to/fPcFisqB';
    const params = new URLSearchParams({
      utm_source: 'landing',
      utm_medium: 'inactivity_popup',
      utm_campaign: 'lead_recovery',
    });

    if (name) params.append('nome_dentista', name);
    if (phone) params.append('phone_number', phone);
    if (instagram) params.append('instagram', instagram);

    return `${baseUrl}?${params.toString()}`;
  }, [name, phone, instagram]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    document.body.style.overflow = '';
  };

  const bulletPoints = [
    {
      icon: AlertTriangle,
      highlight: 'Sua clínica ainda depende de indicações?',
      text: 'Enquanto isso, seus concorrentes já captam pacientes no automático com IA.',
    },
    {
      icon: Clock,
      highlight: 'Quanto tempo sua equipe perde',
      text: 'respondendo mensagens e agendando consultas manualmente?',
    },
    {
      icon: TrendingUp,
      highlight: 'Clínicas que usam IA convertem 3x mais.',
      text: 'E você, vai continuar perdendo pacientes?',
    },
  ];

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
            }}
          >
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
                  >
                    {name}
                  </span>
                  , antes de sair preciso te contar umas verdades...
                </h2>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4 mb-6">
                {bulletPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(101, 92, 177, 0.1)' }}
                    >
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm">
                        <span className="text-yellow-400 font-semibold">
                          {point.highlight}
                        </span>{' '}
                        <span className="text-gray-300">{point.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Urgency message */}
              <div className="text-center mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/20">
                <p className="text-gray-300 text-sm">
                  Agende uma avaliação gratuita e descubra como{' '}
                  <span className="text-white font-semibold">
                    automatizar sua captação e conversão de pacientes com IA.
                  </span>
                </p>
              </div>

              {/* Countdown */}
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm mb-1">Oferta expira em</p>
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-2xl font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
                >
                  <Clock className="w-5 h-5" />
                  {formattedCountdown}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={typeformUrl}
                className="block w-full py-4 text-center text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #655cb1, #5dd6d5)',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quero automatizar minha clínica com IA
                </span>
              </a>

              {/* Skip link */}
              <button
                onClick={handleDismiss}
                className="w-full mt-4 text-center text-gray-500 text-sm hover:text-gray-400 transition-colors"
              >
                Agora não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

