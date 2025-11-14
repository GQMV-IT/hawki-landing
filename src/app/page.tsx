'use client';

import { useEffect, useState } from 'react';
import {
  Header,
  Hero,
  About,
  Services,
  ProfileAnalysis,
  Results,
  IntroModal,
} from "./components";
import { useUserStore } from '@/store/userStore';
import { getUserInfo } from '@/services';

export default function Home() {
  const { setUserData, hasUserData } = useUserStore();
  const [isLoadingStoredData, setIsLoadingStoredData] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadStoredUserData = async () => {
      try {
        const storedData = localStorage.getItem('userData');

        if (!storedData) {
          return;
        }

        const userData = JSON.parse(storedData);
        const instagramInfo = await getUserInfo(userData.instagram);

        setUserData({
          name: userData.name,
          phone: userData.phone,
          instagram: userData.instagram,
          instagramInfo: instagramInfo,
        });

      } catch (error) {
        console.error('Error loading stored user data:', error);
      } finally {
        setIsLoadingStoredData(false);
      }
    };

    loadStoredUserData();
  }, [setUserData]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileAnalysis />
      <Results />
      <About />
      <Services />

      {!hasUserData() && (
        <IntroModal />
      )}
    </div>
  );
}
