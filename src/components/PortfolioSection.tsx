import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const examples = [
  {
    title: "Arizona Securit",
    category: "Site Institucional",
    href: "https://arizonasecurit.com.br/",
    color: "from-primary/25 to-accent/20",
  },
  {
    title: "Made Pinus",
    category: "Site Institucional",
    href: "https://madepinus.com.br/",
    color: "from-accent/25 to-primary/20",
  },
  {
    title: "NOOP Engenharia",
    category: "Site Institucional",
    href: "https://noopengenharia.com.br/",
    color: "from-primary/30 to-primary/10",
  },
  {
    title: "Galileia Car Imports",
    category: "Landing Page",
    href: "https://galileiacarimports.lovable.app/",
    color: "from-accent/30 to-accent/10",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Veja sites que já estão <span className="text-gradient">vendendo</span></h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Esses negócios já estão na internet conquistando clientes todos os dias. O próximo pode ser o seu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {examples.map((ex, i) => (
            <motion.a
              key={ex.title}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              <div className={`h-52 bg-gradient-to-br ${ex.color} p-5`}>
                <div className="w-full h-full rounded-xl bg-background/45 backdrop-blur border border-border/40 p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <p className="text-sm md:text-base text-foreground/90 font-medium break-all">{ex.href}</p>
                  <p className="text-xs text-muted-foreground">Clique para abrir o projeto ao vivo</p>
                </div>
              </div>
              <div className="p-6 flex items-end justify-between gap-3">
                <div>
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{ex.category}</span>
                  <h3 className="text-lg font-display font-semibold mt-1">{ex.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
