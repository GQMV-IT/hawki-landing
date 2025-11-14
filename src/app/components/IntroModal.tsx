'use client';

import { useMemo, useState } from 'react';
import { BaseForm, InstagramForm } from './forms';
import { InstagramUserInfo } from '@/services';
import { InstagramUserData, UserData, useUserStore } from '@/store/userStore';
import { BaseFormData } from './forms/BaseForm';


export default function IntroModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [step, setStep] = useState(0);

    const setBaseData = useUserStore((state) => state.setBaseData);
    const setInstagramInfo = useUserStore((state) => state.setInstagramInfo);
    const { name, phone, instagram } = useUserStore();

    const baseData = useMemo(() => ({ name: name!, phone: phone! }), [name, phone]);

    const submitBaseData = (data: BaseFormData) => {
        setBaseData(data);
        setStep(1);
    }

    const submitInstagramData = (data: InstagramUserData) => {
        localStorage.setItem('userData', JSON.stringify({
            ...baseData,
            instagram: data.instagram,
        }));
        setInstagramInfo(data);

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
                    {step === 0 && (
                        <BaseForm
                            onSubmit={submitBaseData}
                            initialData={baseData}
                        />
                    )}

                    {step === 1 && instagram && (
                        <InstagramForm 
                            onSubmit={submitInstagramData} 
                            baseFormData={baseData}
                            onBack={goBack}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}