import { motion } from "framer-motion";
import { Globe, Rocket, ShoppingCart, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade. Atendemos clientes no Brasil e nos Estados Unidos.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em capturar leads e vender mais com design persuasivo.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description: "Lojas virtuais completas com checkout otimizado, gestão de produtos e integração com pagamentos.",
  },
  {
    icon: Smartphone,
    title: "Micro-SaaS & Apps",
    description: "Sistemas web, micro-SaaS e aplicativos sob medida para automatizar e escalar o seu negócio.",
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
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Nossos Serviços</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Soluções digitais sob medida
          </h2>
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
