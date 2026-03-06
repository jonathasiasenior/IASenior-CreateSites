import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 glow-border">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">Especialistas em sites de alta conversão</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Seu negócio merece uma{" "}
            <span className="text-gradient">presença digital</span>{" "}
            de impacto
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Criamos sites, landing pages, e-commerces, micro-SaaS e aplicativos que transformam visitantes em clientes. 
            Design moderno, performance e resultados reais para empresas no Brasil e nos Estados Unidos.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "🏆 +12 anos de experiência",
              "⚡ Entrega em até 3 dias",
              "📱 100% responsivo",
              "💰 A partir de R$ 20/mês",
            ].map((tag) => (
              <span key={tag} className="glass-card glow-border px-4 py-2 text-sm font-semibold text-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="gradient-btn px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg inline-flex items-center justify-center hover:bg-secondary transition-colors"
            >
              Ver Serviços
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "12+", label: "Anos de Experiência" },
            { value: "150+", label: "Sites Entregues" },
            { value: "3 dias", label: "Entrega Rápida" },
            { value: "R$20", label: "A partir de /mês" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
