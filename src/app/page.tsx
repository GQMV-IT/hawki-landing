import { Header, Hero, About, Services } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
