'use client';

import { Section, MotionWrapper } from "./ui";
import { useState } from 'react';
import { getUserInfo, analyzeProfileWithAI, InstagramUserInfo } from '@/services';

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

    if (userInfo && (analysis || isStreaming)) {
        return (
            <Section id="profile-analysis" className="bg-white">
                <MotionWrapper>
                    <div className="max-w-4xl mx-auto">
                        {/* Profile Header */}
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                {userInfo.profile_pic_url && (
                                    <img 
                                        src={`/api/proxy-image?url=${encodeURIComponent(userInfo.profile_pic_url)}`}
                                        alt={userInfo.username}
                                        className="w-16 h-16 rounded-full border-2"
                                        style={{ borderColor: '#659fcf' }}
                                        onError={(e) => {
                                            // If image fails to load, hide it
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                )}
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        @{userInfo.username}
                                        {userInfo.is_verified && <span className="ml-2">✅</span>}
                                    </h3>
                                    <p className="text-gray-600">{userInfo.full_name}</p>
                                </div>
                            </div>
                            <div className="flex justify-center gap-6 text-sm text-gray-600">
                                <div><strong>{userInfo.follower_count.toLocaleString()}</strong> seguidores</div>
                                <div><strong>{userInfo.media_count}</strong> posts</div>
                            </div>
                        </div>

                        {/* AI Analysis */}
                        <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center justify-start mb-6">
                                {isStreaming && (
                                    <div className="flex items-center gap-2 text-blue-600">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="text-sm">Analisando...</span>
                                    </div>
                                )}
                            </div>

                            {/* Streaming Text */}
                            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap">
                                {analysis}
                                {isStreaming && <span className="inline-block w-2 h-5 bg-blue-600 animate-pulse ml-1"></span>}
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
            </Section>
        );
    }

    // Show form
    return (
        <Section id="profile-analysis" className="bg-white">
            <MotionWrapper>
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Análise de Perfil
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #655cb1, #5dd6d5)'}}></div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        Descubra o potencial do seu perfil no Instagram e receba insights personalizados para crescer sua presença online
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Digite seu @ do Instagram"
                                className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 placeholder:text-gray-400 border-2 rounded-xl focus:outline-none transition-all duration-200"
                                style={{
                                    borderColor: username ? '#659fcf' : '#d1d5db'
                                }}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isAnalyzing || !username}
                            className="w-full py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            style={{background: 'linear-gradient(to right, #655cb1, #659fcf)'}}
                        >
                            {isAnalyzing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Analisando...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Analisar Meu Perfil
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </form>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-600 font-medium">{error}</p>
                        </div>
                    )}

                    {/* Trust Indicators */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            100% Gratuito
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Seguro e Privado
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Resultados Instantâneos
                        </div>
                    </div>
                </div>
            </MotionWrapper>
        </Section>
    );
}