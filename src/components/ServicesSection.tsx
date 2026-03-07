import { motion } from "framer-motion";
import { Globe, Rocket, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Transmita credibilidade e profissionalismo. Seu cliente confia mais em quem tem um site bem feito.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas focadas em um único objetivo: transformar visitantes em clientes que compram ou entram em contato.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description: "Sua loja aberta 24h por dia, 7 dias por semana. Venda seus produtos pela internet sem limite geográfico.",
  },
  {
    icon: Smartphone,
    title: "Micro-SaaS & Apps",
    description: "Sistemas e aplicativos sob medida para automatizar processos e escalar o seu negócio sem aumentar custos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">O Que Criamos Para Você</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            A solução certa para o seu negócio <span className="text-gradient">crescer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Desde sites simples até sistemas completos. Tudo com design profissional, pronto em até 3 dias e com preço que cabe no seu bolso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 glow-border group cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-btn flex items-center justify-center mb-6">
                <service.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
