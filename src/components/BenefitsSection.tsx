import { motion } from "framer-motion";
import { Check, TrendingUp, Shield, Clock, Search, Users, Zap, BarChart3 } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Aumente suas vendas", desc: "Clientes encontram e compram de você 24 horas por dia, 7 dias por semana." },
  { icon: Shield, title: "Credibilidade profissional", desc: "Um site bem feito transmite confiança e destaca sua empresa da concorrência." },
  { icon: Search, title: "Apareça no Google", desc: "Sites otimizados para SEO que colocam sua empresa nos primeiros resultados." },
  { icon: Users, title: "Alcance mais clientes", desc: "Expanda seu mercado para além da sua cidade com presença digital forte." },
  { icon: Zap, title: "Performance máxima", desc: "Sites ultra-rápidos que carregam em menos de 2 segundos." },
  { icon: BarChart3, title: "Resultados mensuráveis", desc: "Acompanhe métricas e saiba exatamente o retorno do seu investimento." },
];

const BenefitsSection = () => {
  return (
    <section id="vantagens" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Por Que Ter Um Site?</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Vantagens que fazem a diferença
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Empresas com presença digital vendem até 5x mais. Veja por que você precisa de um site profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 glass-card p-6 group hover:glow-border transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <b.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
