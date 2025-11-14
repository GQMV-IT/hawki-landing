'use client';

import { useMemo, ReactNode } from 'react';
import { useUserStore } from '@/store';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  children,
  className = '',
}: CTAButtonProps) {
  const { name, phone, instagram, instagramInfo } = useUserStore();

  // Construct Typeform URL with hidden fields
  const typeformUrl = useMemo(() => {
    const baseUrl = 'https://hawki.typeform.com/direto';
    const params = new URLSearchParams({
      utm_source: 'landing',
      utm_medium: 'cta',
      utm_campaign: 'lead_gen',
    });

    // Add hidden fields if user data is available
    if (name) params.append('name', name);
    if (phone) params.append('phone', phone);
    if (instagram) params.append('instagram', instagram);
    
    // Add Instagram metrics if available
    if (instagramInfo) {
      params.append('followers', instagramInfo.follower_count.toString());
      params.append('following', instagramInfo.following_count.toString());
      params.append('posts', instagramInfo.media_count.toString());
      params.append('verified', instagramInfo.is_verified ? 'yes' : 'no');
      params.append('business', instagramInfo.is_business ? 'yes' : 'no');
      
      // Add optional fields if available
      if (instagramInfo.biography) {
        params.append('bio', instagramInfo.biography.substring(0, 100)); // Limit length
      }
      if (instagramInfo.external_url) {
        params.append('website', instagramInfo.external_url);
      }
    }

    return `${baseUrl}?${params.toString()}`;
  }, [name, phone, instagram, instagramInfo]);

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

