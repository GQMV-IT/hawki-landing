import { Building2, CircleCheck, Clock4, Target, TrendingUp, UserRound } from "lucide-react";
import { Section, MotionWrapper } from "./ui";

export default function About() {
    const keyFeatures = [
        {
            icon: (
                <CircleCheck className="w-8 h-8" />
            ),
            title: "Metodologia Comprovada",
            description: "Processos testados e validados"
        },
        {
            icon: (
                <TrendingUp className="w-8 h-8" />
            ),
            title: "Resultados Mensuráveis",
            description: "Acompanhamento em tempo real"
        },
        {
            icon: (
                <UserRound className="w-8 h-8" />
            ),
            title: "Equipe Especializada",
            description: "Profissionais experientes"
        },
        {
            icon: (
                <Clock4 className="w-8 h-8" />
            ),
            title: "Suporte Contínuo",
            description: "Acompanhamento dedicado"
        }
    ]

    return (
        <Section id="about" className="bg-white">
            <MotionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                        Sobre nós
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #655cb1, #5dd6d5)'}}></div>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Somos uma agência de marketing de performance que utiliza a metodologia Hawki
                        para gerar leads de forma constante e previsível, aumentando o faturamento e
                        reconhecimento da empresa de nossos clientes.
                    </p>
                </div>
            </MotionWrapper>

            {/* Mission & Values Grid */}
            <MotionWrapper delay={0.2}>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Mission Card */}
                    <div className="rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom right, rgba(101, 92, 177, 0.1), rgba(93, 214, 213, 0.1))'}}>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(to right, #655cb1, #659fcf)'}}>
                            <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Transformar empresas através de estratégias de marketing digital comprovadas, 
                            gerando resultados mensuráveis e crescimento sustentável.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300" style={{background: 'linear-gradient(to bottom right, rgba(101, 159, 207, 0.1), rgba(93, 214, 213, 0.1))'}}>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(to right, #659fcf, #5dd6d5)'}}>
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser referência em marketing de performance no Brasil, conhecidos pela 
                            excelência e resultados consistentes que entregamos aos nossos clientes.
                        </p>
                    </div>
                </div>
            </MotionWrapper>

            {/* Key Features */}
            <MotionWrapper delay={0.4}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyFeatures.map((feature, index) => (
                    <div key={index} className="text-center group">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(to right, rgba(101, 92, 177, 0.15), rgba(93, 214, 213, 0.15))', color: '#655cb1'}}>
                            {feature.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
                </div>
            </MotionWrapper>
        </Section>
    );
}