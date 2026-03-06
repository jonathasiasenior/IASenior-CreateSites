import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre criação de sites.";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-border p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Pronto para <span className="text-gradient">transformar</span> seu negócio?
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-lg mx-auto">
            Fale agora com um especialista da IASenior e receba um orçamento personalizado sem compromisso.
          </p>
          <p className="text-primary font-display font-bold text-xl mb-8">
            A partir de R$ 20/mês ou 12x de R$ 180 · Entrega em até 3 dias
          </p>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-btn px-10 py-5 rounded-xl text-primary-foreground font-bold text-lg inline-flex items-center gap-3 shadow-lg shadow-primary/25"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
