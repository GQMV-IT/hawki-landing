import { ArrowRight, MessagesSquare, TrendingUp, Video } from "lucide-react";
import { Section, MotionWrapper } from "./ui";

export default function Services() {
  const services = [
    {
      title: "Tráfego Pago",
      description: "Está precisando aumentar o reconhecimento e faturamento do seu negócio? O Tráfego Pago é o serviço certo para isso!",
      icon: (
        <TrendingUp className="w-8 h-8" />
      ),
      gradient: "from-primary-dark to-primary",
      bgGradient: "rgba(101, 92, 177, 0.05)",
      gradientHex: "linear-gradient(to bottom right, #655cb1, #659fcf)"
    },
    {
      title: "Social Media",
      description: "Gerenciamos suas redes sociais! Com conteúdo atraente e interativo, sua marca aumentará o engajamento com o público-alvo. Cresça sua presença online com nossos serviços profissionais de social media.",
      icon: (
        <MessagesSquare className="w-8 h-8" />
      ),
      gradient: "from-primary to-primary-light",
      bgGradient: "rgba(101, 159, 207, 0.05)",
      gradientHex: "linear-gradient(to bottom right, #659fcf, #5dd6d5)"
    },
    {
      title: "Produção de Conteúdo",
      description: "Produzimos conteúdo audiovisual personalizado para posicionar a sua marca. Com nossos vídeos profissionais, você conquistará novos clientes e aumentará a visibilidade da sua marca. Invista em qualidade e destaque-se no mercado.",
      icon: (
        <Video className="w-8 h-8" />
      ),
      gradient: "from-primary-light to-primary",
      bgGradient: "rgba(93, 214, 213, 0.05)",
      gradientHex: "linear-gradient(to bottom right, #5dd6d5, #659fcf)"
    }
  ];

  return (
    <Section id="services" className="bg-linear-to-b from-gray-50 to-white">
      <MotionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{background: 'linear-gradient(to right, #655cb1, #5dd6d5)'}}></div>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Soluções completas de marketing digital para impulsionar o crescimento do seu negócio
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: service.bgGradient}}></div>
            
            {/* Content */}
            <div className="relative p-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" style={{background: service.gradientHex}}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                {service.description}
              </p>

              {/* CTA Link */}
              <div className="flex items-center text-sm font-semibold">
                <span className="bg-linear-to-r bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300" style={{backgroundImage: service.gradientHex}}>
                  Saiba mais
                </span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" style={{color: service.gradientHex}} />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300" style={{background: service.gradientHex}}></div>
          </div>
          ))}
        </div>
      </MotionWrapper>
    </Section>
  );
}