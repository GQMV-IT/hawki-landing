import { ArrowDown, ArrowRight, Eye } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(101, 92, 177, 0.08) 0%, rgba(101, 159, 207, 0.05) 50%, rgba(93, 214, 213, 0.08) 100%)'}}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob" style={{backgroundColor: '#655cb1'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000" style={{backgroundColor: '#659fcf'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" style={{backgroundColor: '#5dd6d5'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Transforme Leads em
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #655cb1, #5dd6d5)'}}>
                  Resultados Reais
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#655cb1"/>
                      <stop offset="50%" stopColor="#659fcf"/>
                      <stop offset="100%" stopColor="#5dd6d5"/>
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
            <button className="group relative px-8 py-3 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{background: 'linear-gradient(to right, #655cb1, #659fcf)'}}>
              <span className="relative z-10 flex items-center gap-2">
                Quero Aumentar Minhas Vendas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-3 bg-white text-gray-900 text-lg font-bold rounded-xl border-2 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2" style={{borderColor: '#659fcf'}}>
              <Eye className="w-5 h-5" />
              Analise o meu perfil
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="pt-10 animate-fade-in-up animation-delay-400">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-6">
              Resultados Comprovados
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{color: '#655cb1'}}>
                    +R$500K
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Investidos em<br />Tráfego Pago
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{color: '#659fcf'}}>
                    +R$10M
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Faturados pelos<br />Nossos Clientes
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold mb-1" style={{color: '#5dd6d5'}}>
                    +2 Anos
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Atuando no Mercado<br />de Performance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-6 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </main>
  );
}