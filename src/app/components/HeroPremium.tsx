'use client';

import { useState, useEffect } from 'react';
import { useUserStore } from '@/store';
import { MotionWrapper, CTAButton } from './ui';
import { analyzeProfileWithAI } from '@/services';
import { ArrowRight, Rocket } from 'lucide-react';
import ProfileAnalysisResult from './ProfileAnalysisResult';

export default function HeroPremium() {
  const { name, instagramInfo } = useUserStore();
  const hasUserData = useUserStore((state) => state.hasUserData());
  const [analysis, setAnalysis] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateAnalysis = async () => {
      if (!instagramInfo) {
        return;
      }

      setAnalysis('');
      setError(null);

      try {
        setIsStreaming(true);

        await analyzeProfileWithAI(instagramInfo, (chunk) => {
          setAnalysis((prev) => prev + chunk);
        });

        setIsStreaming(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to generate analysis';
        setError(errorMessage);
        setIsStreaming(false);
      }
    };

    generateAnalysis();
  }, [instagramInfo]);

  if (!hasUserData || !instagramInfo) {
    return null;
  }

  return (
    <section 
      className="w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-12"
      style={{
        paddingTop: 'max(5rem, env(safe-area-inset-top))',
        paddingRight: 'max(1rem, env(safe-area-inset-right))',
        paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
        paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      }}
    >
      <div className="w-full">
        <MotionWrapper>
          <div className="max-w-5xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Profile Header Card */}
          <div className="flex items-center gap-5 justify-center">
            {/* Profile Picture with gradient ring */}
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] shadow-xl flex-shrink-0"
              style={{ 
                background: 'linear-gradient(135deg, #655cb1, #5dd6d5)',
              }}
            >
              <img
                src={`/api/proxy-image?url=${encodeURIComponent(instagramInfo.profile_pic_url)}`}
                alt={instagramInfo.username}
                className="w-full h-full rounded-full object-cover border-[3px] border-white"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${instagramInfo.username}&background=random`;
                }}
              />
            </div>
            
            {/* Title, Subtitle, and Instagram Badge */}
            <div className="flex flex-col gap-2">
              <h1 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #655cb1, #5dd6d5)' }}
              >
                Proposta exclusiva para {name}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                O momento é agora — sua clínica pode mais!
              </p>
              
              {/* Instagram Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg w-fit text-sm"
                style={{ 
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                }}
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-white font-semibold">
                  @{instagramInfo.username}
                </span>
                {instagramInfo.is_verified && (
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                )}
                <span className="text-white/80">|</span>
                <span className="text-white font-medium">
                  {instagramInfo.follower_count.toLocaleString()} seguidores
                </span>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          {error ? (
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                <h3 className="text-lg font-bold text-red-600 mb-2">Erro ao gerar análise</h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          ) : (
            <ProfileAnalysisResult
              analysis={analysis}
              isStreaming={isStreaming}
            />
          )}

          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <CTAButton utmContent="hero_analysis">
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                Quero automatizar minha clínica com IA
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </CTAButton>
          </div>
        </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

