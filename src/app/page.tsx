'use client';

import { useState } from 'react';
import { Header, Hero, About, Services, ProfileAnalysis, Results } from "./components";
import { BaseForm } from './components/forms';

export default function Home() {
  const [isModalOpen, _setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileAnalysis />
      <Results />
      <About />
      <Services />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Overlay with backdrop blur */}
            <div className="fixed inset-0 bg-black/30 transition-opacity" />

            {/* Modal Content - Glassmorphism */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-w-lg w-full p-6 z-10 text-gray-600">
              <BaseForm onSubmit={({ name, phone }) => {
                console.log(name, phone);
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
