'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Eye } from "lucide-react";
import { useUserStore } from '@/store';
import { CTAButton } from './ui';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { name } = useUserStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen flex items-center pt-16" style={{background: 'linear-gradient(135deg, rgba(101, 92, 177, 0.08) 0%, rgba(101, 159, 207, 0.05) 50%, rgba(93, 214, 213, 0.08) 100%)'}}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob" style={{backgroundColor: '#655cb1'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000" style={{backgroundColor: '#659fcf'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" style={{backgroundColor: '#5dd6d5'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {name}, transforme Leads em
              <br />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent animate-gradient" style={{backgroundImage: 'linear-gradient(to right, #655cb1, #659fcf, #5dd6d5, #659fcf, #655cb1)'}}>
                  Resultados Reais
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="animate-line-draw" d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#gradient-animated)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient-animated" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#655cb1">
                        <animate attributeName="offset" values="0;0.15;0" dur="8s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#659fcf">
                        <animate attributeName="offset" values="0.5;0.65;0.5" dur="8s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#5dd6d5">
                        <animate attributeName="offset" values="1;0.85;1" dur="8s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
              Trabalhamos com <span className="font-semibold text-gray-600">marketing de performance</span> para acelerar o faturamento da sua clínica.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up animation-delay-200">
            <CTAButton>
              <span className="relative z-10 flex items-center gap-2">
                Quero Aumentar Minhas Vendas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </main>
  );
}