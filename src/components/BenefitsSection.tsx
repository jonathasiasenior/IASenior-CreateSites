import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, Search, Users, Zap, DollarSign, Eye, Trophy, Target } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";

const benefits = [
  {
    icon: TrendingUp,
    title: "Venda 24 horas por dia",
    desc: "Seu site não tira férias. Enquanto você dorme, ele continua apresentando seus produtos e serviços para novos clientes.",
  },
  {
    icon: Users,
    title: "Conquiste mais clientes",
    desc: "93% dos consumidores pesquisam na internet antes de comprar. Se você não está lá, está perdendo vendas para o concorrente.",
  },
  {
    icon: Trophy,
    title: "Pareça grande e profissional",
    desc: "Um site bem feito passa credibilidade e confiança. Seus clientes vão te ver como uma empresa séria e estabelecida.",
  },
  {
    icon: Search,
    title: "Apareça no Google",
    desc: "Quando alguém pesquisar pelo seu serviço na sua cidade, seu negócio vai aparecer. Clientes novos te encontram todos os dias.",
  },
  {
    icon: DollarSign,
    title: "Investimento que cabe no bolso",
    desc: "A partir de apenas 12x de R$ 19,90 (ou R$ 180 à vista). Menos que um cafezinho por dia para ter seu negócio na internet.",
  },
  {
    icon: Clock,
    title: "Pronto em apenas 3 dias",
    desc: "Nada de esperar semanas ou meses. Em até 3 dias úteis seu site está no ar, pronto para atrair clientes e gerar vendas.",
  },
  {
    icon: Eye,
    title: "Vitrine aberta para o mundo",
    desc: "Seus produtos e serviços visíveis para milhares de pessoas. É como ter uma loja na avenida mais movimentada da cidade.",
  },
  {
    icon: Target,
    title: "Saia na frente da concorrência",
    desc: "A maioria dos pequenos negócios ainda não tem site. Quem sai na frente agora, conquista os clientes primeiro.",
  },
  {
    icon: Zap,
    title: "100% responsivo e rápido",
    desc: "Seu site funciona perfeitamente no celular, tablet e computador. 70% dos acessos vêm do celular — esteja preparado.",
  },
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
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Por Que Ter Um Site?</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Quem não está na internet, <span className="text-gradient">não existe</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Todos os dias, milhares de pessoas procuram no Google por serviços como o seu.
            Se você não tem um site, esses clientes vão direto para o seu concorrente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass-card glow-border px-6 py-3">
            <DollarSign size={20} className="text-primary" />
            <span className="text-base font-display font-semibold">
              Tudo isso a partir de <span className="text-primary">12x de R$ 19,90</span> · Entrega em <span className="text-primary">3 dias</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gradient-btn px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            Quero Meu Site Por R$ 19,90/mês
          </motion.a>
          <p className="text-sm text-muted-foreground mt-3">Sem taxas escondidas. Pronto em até 3 dias.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
