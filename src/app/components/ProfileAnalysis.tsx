'use client';

import { useState, useEffect } from 'react';
import { analyzeProfileWithAI } from '@/services';
import { useUserStore } from '@/store/userStore';
import { Section, MotionWrapper, CTAButton } from "./ui";
import ProfileAnalysisResult from './ProfileAnalysisResult';

export default function ProfileAnalysis() {
    const [analysis, setAnalysis] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const instagramInfo = useUserStore((state) => state.instagramInfo);
    const hasUserData = useUserStore((state) => state.hasUserData());

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

    if (error) {
        return (
            <Section className="bg-white">
                <MotionWrapper>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                            <h3 className="text-lg font-bold text-red-600 mb-2">
                                Erro ao gerar análise
                            </h3>
                            <p className="text-red-700">{error}</p>
                        </div>
                    </div>
                </MotionWrapper>
            </Section>
        );
    }

    return (
        <Section className="bg-white">
            <MotionWrapper>
                <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
                    <ProfileAnalysisResult
                        userInfo={instagramInfo}
                        analysis={analysis}
                        isStreaming={isStreaming}
                    />
                    <CTAButton className="mt-4">
                        Começar agora
                    </CTAButton>
                </div>
            </MotionWrapper>
        </Section>
    );
}