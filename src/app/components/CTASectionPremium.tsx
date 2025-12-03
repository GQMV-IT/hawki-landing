'use client';

import { ElementType } from 'react';
import { Section, MotionWrapper, CTAButton } from './ui';
import { Rocket, Target, ArrowRight } from 'lucide-react';

interface CTASectionPremiumProps {
  title: string;
  subtitle: string;
  buttonText: string;
  utmContent: string;
  backgroundVariant?: 'light' | 'gradient';
  buttonIcon?: 'rocket' | 'target';
}

export default function CTASectionPremium({
  title,
  subtitle,
  buttonText,
  utmContent,
  backgroundVariant = 'light',
  buttonIcon = 'rocket',
}: CTASectionPremiumProps) {
  const bgClass = backgroundVariant === 'gradient'
    ? 'bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50'
    : 'bg-white';

  const Icon = buttonIcon === 'target' ? Target : Rocket;

  return (
    <Section className={bgClass}>
      <MotionWrapper>
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex justify-center pt-2 sm:pt-4">
            <CTAButton utmContent={utmContent}>
              <span className="flex items-center gap-2 text-sm sm:text-base">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                {buttonText}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </CTAButton>
          </div>
        </div>
      </MotionWrapper>
    </Section>
  );
}

