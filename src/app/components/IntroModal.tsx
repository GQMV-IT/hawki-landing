'use client';

import { useMemo, useState, useEffect } from 'react';
import { InstagramUserData, useUserStore } from '@/store/userStore';
import { BaseFormData } from './forms/BaseForm';
import { BaseForm, InstagramForm } from './forms';

export default function IntroModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [step, setStep] = useState(0);

  const setBaseData = useUserStore((state) => state.setBaseData);
  const setInstagramInfo = useUserStore((state) => state.setInstagramInfo);
  const { name, phone } = useUserStore();

  const baseData = useMemo(() => ({ name: name!, phone: phone! }), [name, phone]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const submitBaseData = (data: BaseFormData) => {
    setBaseData(data);
    setStep(1);
  };

  const submitInstagramData = (data: InstagramUserData) => {
    localStorage.setItem(
      'userData',
      JSON.stringify({
        ...baseData,
        instagram: data.instagram,
      })
    );
    setInstagramInfo(data);

    setIsModalOpen(false);
  };

  const goBack = () => {
    setStep((prev) => prev - 1);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay with backdrop blur */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Modal Content - Glassmorphism */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-w-lg w-full p-6 text-gray-600">
            {step === 0 && <BaseForm onSubmit={submitBaseData} initialData={baseData} />}

            {step === 1 && (
              <InstagramForm
                onSubmit={submitInstagramData}
                baseFormData={baseData}
                onBack={goBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
