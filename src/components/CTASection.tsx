import { motion } from "framer-motion";
import { MessageCircle, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";

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
          className="glass-card glow-border p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Pare de perder clientes. <span className="text-gradient">Comece a vender</span> pela internet hoje.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Cada dia sem um site profissional é um dia que seus concorrentes conquistam os clientes que deveriam ser seus.
            Não espere mais — dê o primeiro passo agora.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 glass-card px-5 py-3">
              <DollarSign size={24} className="text-primary" />
              <div className="text-left">
                <p className="font-display font-bold text-lg text-primary">12x de R$ 19,90</p>
                <p className="text-xs text-muted-foreground">ou R$ 180 à vista</p>
              </div>
            </div>
            <div className="flex items-center gap-3 glass-card px-5 py-3">
              <Clock size={24} className="text-primary" />
              <div className="text-left">
                <p className="font-display font-bold text-lg text-primary">Pronto em 3 dias</p>
                <p className="text-xs text-muted-foreground">entrega ultra rápida</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 max-w-lg mx-auto">
            {[
              "Site 100% responsivo",
              "Otimizado para Google (SEO)",
              "Design profissional",
              "Suporte incluso",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>

          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-btn px-10 py-5 rounded-xl text-primary-foreground font-bold text-lg inline-flex items-center gap-3 shadow-lg shadow-primary/25"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp e Começar Agora
          </motion.a>
          <p className="text-sm text-muted-foreground mt-4">
            Atendimento imediato. Orçamento gratuito e sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
