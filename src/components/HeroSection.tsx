import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";
const FOUNDER_PHOTO = "/minhafoto.jpeg";

const HeroSection = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="relative container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 glow-border">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Mais de 150 negócios já conquistaram clientes pela internet</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Seu negócio <span className="text-gradient">perde clientes</span> todos os dias sem um site
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Enquanto você não está na internet, <strong className="text-foreground">seus concorrentes estão vendendo no seu lugar.</strong> Tenha um site profissional que trabalha 24h por dia atraindo clientes e gerando vendas para o seu negócio.
            </p>

            <div className="flex flex-col gap-2 mb-8 max-w-lg mx-auto lg:mx-0">
              {[
                "Comece a vender pela internet em apenas 3 dias",
                "Investimento a partir de 12x de R$ 19,90",
                "Pareça tão profissional quanto grandes empresas",
                "Apareça no Google quando clientes procurarem por você",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="gradient-btn px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Quero Meu Site Agora
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#vantagens"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg inline-flex items-center justify-center hover:bg-secondary transition-colors"
              >
                Por Que Ter Um Site?
              </motion.a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { value: "R$ 180", sub: "à vista ou 12x R$ 19,90" },
                { value: "3 dias", sub: "para ficar pronto" },
                { value: "150+", sub: "sites entregues" },
              ].map((tag) => (
                <div key={tag.value} className="glass-card glow-border px-5 py-3 text-center">
                  <p className="text-lg font-display font-bold text-primary">{tag.value}</p>
                  <p className="text-xs text-muted-foreground">{tag.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card glow-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              {!photoError && (
                <img
                  src={FOUNDER_PHOTO}
                  alt="Foto profissional do fundador"
                  onError={() => setPhotoError(true)}
                  className="relative z-[1] w-full h-[520px] object-cover object-top"
                />
              )}
              {photoError && (
                <div className="relative z-[1] w-full h-[520px] flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 px-6 text-center">
                  <span className="text-muted-foreground font-semibold">
                    Adicione sua foto em /public/minhafoto.jpeg
                  </span>
                </div>
              )}

              <div className="absolute top-5 right-5 z-20 glass-card px-4 py-2">
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">+12 anos de experiência</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-20 glass-card p-4">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Especialista em conversão</p>
                <p className="text-base font-display font-semibold">Jonathas · Sites que vendem de verdade</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
