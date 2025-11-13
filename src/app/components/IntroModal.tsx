'use client';

import { useState, useEffect } from 'react';
import { BaseForm, InstagramForm } from './forms';

interface BaseFormData {
    name: string;
    phone: string;
}

export default function IntroModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [step, setStep] = useState(0);
    const [baseFormData, setBaseFormData] = useState<BaseFormData | null>(null);


    const submitBaseData = (data: BaseFormData) => {
        console.log('Base form data:', data);
        localStorage.setItem('baseData', JSON.stringify(data));
        setBaseFormData(data);

        setStep(1);
    }

    const submitInstagramData = (data: { username: string; userInfo: any }) => {
        console.log('Instagram data:', data);
        console.log('Complete user data:', { 
            ...baseFormData, 
            instagram: data.username,
            instagramInfo: data.userInfo
        });

        // Here you can send the complete data to your backend or process it
        // For now, we'll just close the modal
        setIsModalOpen(false);
    }

    const goBack = () => {
        setStep(prev => prev - 1);
    }

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
            <div className="flex min-h-screen items-center justify-center p-4">
                {/* Overlay with backdrop blur */}
                <div className="fixed inset-0 bg-black/30 transition-opacity" />

                {/* Modal Content - Glassmorphism */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-w-lg w-full p-6 z-10 text-gray-600">
                    {step === 0 && <BaseForm onSubmit={submitBaseData} initialData={baseFormData || undefined} />}
                    {step === 1 && baseFormData && (
                        <InstagramForm 
                            onSubmit={submitInstagramData} 
                            baseFormData={baseFormData}
                            onBack={goBack}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}