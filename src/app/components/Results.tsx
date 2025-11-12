import { Section, MotionWrapper } from "./ui";

export default function Results() {
  return (
    <Section id="results" className="bg-white">
      <MotionWrapper>
        <div className="text-center">
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
      </MotionWrapper>
    </Section>
  );
}

