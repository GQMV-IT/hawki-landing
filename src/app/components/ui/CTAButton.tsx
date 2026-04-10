'use client';

import { trackCTAClick } from '@/lib/analytics';
import { useUserStore } from '@/store';
import { useFormContext } from '@/app/landing/FormContext';
import { useUTMContext } from '@/app/landing/UTMContext';
import { ReactNode, useMemo } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  utmContent?: string;
}

export default function CTAButton({ children, className = '', utmContent }: CTAButtonProps) {
  const { name, phone, instagram, instagramInfo } = useUserStore();
  const { formBaseUrl } = useFormContext();
  const utm = useUTMContext();

  const typeformUrl = useMemo(() => {
    // Preserva os UTMs do anúncio de origem.
    // Fallbacks usados apenas quando o parâmetro não veio na URL.
    const params = new URLSearchParams({
      utm_source:   utm.utm_source   || 'landing',
      utm_medium:   utm.utm_medium   || 'organic',
      utm_campaign: utm.utm_campaign || 'direct',
      utm_term:     utm.utm_term     || instagram || '',
      utm_content:  utm.utm_content  || utmContent || '',
    });

    // Hidden fields → hash fragment (formato Typeform)
    const hiddenFields: string[] = [];
    if (instagram) hiddenFields.push(`instagram=${encodeURIComponent(instagram)}`);
    if (phone)     hiddenFields.push(`phone_number=${encodeURIComponent(phone)}`);
    if (name)      hiddenFields.push(`nome_dentista=${encodeURIComponent(name)}`);

    const hash = hiddenFields.length > 0 ? `#${hiddenFields.join('&')}` : '';

    return `${formBaseUrl}?${params.toString()}${hash}`;
  }, [formBaseUrl, utm, name, phone, instagram, instagramInfo, utmContent]);

  const handleClick = () => {
    const hasUserData = !!(name || phone || instagram);
    trackCTAClick(utmContent || 'unknown', hasUserData);
  };

  return (
    <a
      href={typeformUrl}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
      style={{ background: 'linear-gradient(to right, #655cb1, #659fcf)' }}
    >
      {children}
    </a>
  );
}
