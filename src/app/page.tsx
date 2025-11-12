import { Header, Hero, About, Services, ProfileAnalysis, Results } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProfileAnalysis />
      <Results />
      <About />
      <Services />
    </div>
  );
}
