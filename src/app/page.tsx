import { Header, Hero, About, Services } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
