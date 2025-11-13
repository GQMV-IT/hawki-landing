'use client';

import {
  Header,
  Hero,
  About,
  Services,
  ProfileAnalysis,
  Results,
  IntroModal,
} from "./components";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileAnalysis />
      <Results />
      <About />
      <Services />

      <IntroModal />
    </div>
  );
}
