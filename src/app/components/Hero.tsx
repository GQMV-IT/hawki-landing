export default function Hero() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Transforme Leads em
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Resultados Reais
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="50%" stopColor="#9333EA"/>
                      <stop offset="100%" stopColor="#EC4899"/>
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
            <button className="group relative px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Quero Aumentar Minhas Vendas
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-3 bg-white text-gray-900 text-lg font-bold rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
                  <div className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    +R$500K
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Investidos em<br />Tráfego Pago
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    +R$10M
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">
                    Faturados pelos<br />Nossos Clientes
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-1">
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
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}