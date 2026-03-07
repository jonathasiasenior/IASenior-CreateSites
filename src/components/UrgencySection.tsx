import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, XCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";

const problems = [
  "Clientes procuram seu serviço no Google e encontram o concorrente",
  "Você depende apenas de indicação boca a boca para vender",
  "Seu negócio não passa credibilidade sem uma presença online",
  "Você perde vendas porque ninguém te encontra na internet",
  "Clientes desconfiam de empresas que não têm site próprio",
];

const UrgencySection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <AlertTriangle size={16} className="text-yellow-500" />
              <span className="text-sm font-semibold text-yellow-500">Atenção, empresário</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Cada dia sem site é dinheiro que você <span className="text-red-400">deixa na mesa</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Enquanto você pensa se precisa de um site, seus concorrentes já estão online
              conquistando os clientes que deveriam ser seus. Veja se você se identifica:
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <XCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{problem}</span>
                </div>
              ))}
            </div>

            <p className="text-foreground font-semibold text-lg">
              Se você marcou pelo menos 1 item acima, está na hora de mudar isso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
              A solução é mais simples (e barata) do que você imagina
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Por menos do que você gasta com um almoço por dia, seu negócio pode ter um site profissional
              que atrai clientes automaticamente.
            </p>

            <div className="glass-card p-6 mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-display font-bold text-primary">R$ 19,90</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground">em 12x ou R$ 180 à vista</p>
              <div className="border-t border-border/40 my-4" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary font-bold text-lg">3 dias</span>
                <span className="text-muted-foreground">para ficar 100% pronto</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Site profissional, responsivo e otimizado para o Google
              </p>
            </div>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="gradient-btn w-full px-8 py-4 rounded-xl text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Quero Parar de Perder Clientes
              <ArrowRight size={20} />
            </motion.a>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Orçamento gratuito e sem compromisso via WhatsApp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
