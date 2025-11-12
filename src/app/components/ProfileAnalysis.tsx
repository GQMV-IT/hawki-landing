'use client';

import { Section, MotionWrapper } from "./ui";
import { useState } from 'react';
import { getUserInfo, analyzeProfileWithAI, InstagramUserInfo } from '@/services';
import ProfileAnalysisForm from './ProfileAnalysisForm';
import ProfileAnalysisResult from './ProfileAnalysisResult';

export default function ProfileAnalysis() {
    const [username, setUsername] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<InstagramUserInfo | null>(null);
    const [analysis, setAnalysis] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsAnalyzing(true);
        setError(null);
        setAnalysis('');
        setUserInfo(null);

        try {
            const data = await getUserInfo(username);
            setUserInfo(data);

            setIsStreaming(true);
            await analyzeProfileWithAI(data, (chunk) => {
                setAnalysis((prev) => prev + chunk);
            });
            setIsStreaming(false);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch profile';
            setError(errorMessage);
            setIsStreaming(false);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <Section id="profile-analysis" className="bg-white">
            <MotionWrapper>
                {userInfo && (analysis || isStreaming) ? (
                    <ProfileAnalysisResult 
                        userInfo={userInfo}
                        analysis={analysis}
                        isStreaming={isStreaming}
                    />
                ) : (
                    <ProfileAnalysisForm 
                        username={username}
                        isAnalyzing={isAnalyzing}
                        error={error}
                        onUsernameChange={setUsername}
                        onSubmit={handleSubmit}
                    />
                )}
            </MotionWrapper>
        </Section>
    );
}