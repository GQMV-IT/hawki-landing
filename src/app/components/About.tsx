import { Section } from "./ui";

export default function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                    Sobre nós
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Somos uma agência de marketing de performance que utiliza a metodologia Hawki
                    para gerar leads de forma constante e previsível, aumentando o faturamento e
                    reconhecimento da empresa de nossos clientes.
                </p>
            </div>

            {/* Mission & Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Mission Card */}
                <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Transformar empresas através de estratégias de marketing digital comprovadas, 
                        gerando resultados mensuráveis e crescimento sustentável.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ser referência em marketing de performance no Brasil, conhecidos pela 
                        excelência e resultados consistentes que entregamos aos nossos clientes.
                    </p>
                </div>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ),
                        title: "Metodologia Comprovada",
                        description: "Processos testados e validados"
                    },
                    {
                        icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        ),
                        title: "Resultados Mensuráveis",
                        description: "Acompanhamento em tempo real"
                    },
                    {
                        icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        ),
                        title: "Equipe Especializada",
                        description: "Profissionais experientes"
                    },
                    {
                        icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ),
                        title: "Suporte Contínuo",
                        description: "Acompanhamento dedicado"
                    }
                ].map((feature, index) => (
                    <div key={index} className="text-center group">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-blue-100 to-purple-100 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}