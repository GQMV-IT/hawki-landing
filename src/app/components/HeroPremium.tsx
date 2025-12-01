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
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50"
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
          {/* Badge exclusivo */}
          <div className="text-center">
            <div className="inline-block">
              <div 
                className="px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg"
                style={{ background: 'linear-gradient(to right, #655cb1, #659fcf)' }}
              >
                Proposta exclusiva para {name?.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Instagram Info */}
          <div className="flex items-center justify-center gap-3 text-xl sm:text-2xl text-gray-700">
            <span className="font-semibold">@{instagramInfo.username}</span>
            <span className="text-gray-400">|</span>
            <span className="font-bold" style={{ color: '#659fcf' }}>
              {instagramInfo.follower_count.toLocaleString()} seguidores
            </span>
          </div>

          {/* Subtítulo com urgência */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600">
              O Momento é agora!
            </h2>
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
                AGENDAR AVALIAÇÃO
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

