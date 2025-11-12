import { Header, Hero, About, Services, ProfileAnalysis } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileAnalysis />
      <About />
      <Services />
    </div>
  );
}
