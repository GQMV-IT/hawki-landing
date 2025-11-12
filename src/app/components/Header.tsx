import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/LogoHawki.png"
              alt="Hawki Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900">Hawki</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Serviços
            </a>
            {/* TODO: Add contact section for link */}
            {/* <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contato
            </a>*/}
          </nav>
        </div>
      </div>
    </header>
  );
}
