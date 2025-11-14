'use client';

import { useMemo, ReactNode } from 'react';
import { useUserStore } from '@/store';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  utmContent?: string;
}

export default function CTAButton({ children, className = '', utmContent }: CTAButtonProps) {
  const { name, phone, instagram, instagramInfo } = useUserStore();

  // Construct Typeform URL with hidden fields
  const typeformUrl = useMemo(() => {
    const baseUrl = 'https://hawki.pro.typeform.com/to/fPcFisqB';
    const params = new URLSearchParams({
      utm_source: 'landing',
      utm_medium: 'cta',
      utm_campaign: 'lead_gen',
    });

    // Add utm_content if provided
    if (utmContent) params.append('utm_content', utmContent);

    // Add hidden fields if user data is available
    if (name) params.append('nome_dentista', name);
    if (phone) params.append('phone_number', phone);
    if (instagram) params.append('instagram', instagram);

    return `${baseUrl}?${params.toString()}`;
  }, [name, phone, instagram, instagramInfo, utmContent]);

  return (
    <a
      href={typeformUrl}
      className={`group relative px-8 py-3 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
      style={{ background: 'linear-gradient(to right, #655cb1, #659fcf)' }}
    >
      {children}
    </a>
  );
}
