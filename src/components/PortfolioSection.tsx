import { motion } from "framer-motion";

const examples = [
  { title: "Restaurante Gourmet", category: "Site Institucional", color: "from-primary/20 to-accent/20" },
  { title: "Loja de Moda", category: "E-commerce", color: "from-accent/20 to-primary/20" },
  { title: "Clínica Estética", category: "Landing Page", color: "from-primary/30 to-primary/10" },
  { title: "Imobiliária Premium", category: "Site Institucional", color: "from-accent/30 to-accent/10" },
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Projetos que entregam resultado
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${ex.color} flex items-center justify-center`}>
                <div className="w-3/4 h-32 rounded-lg bg-background/40 backdrop-blur border border-border/30 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-display">Preview do projeto</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{ex.category}</span>
                <h3 className="text-lg font-display font-semibold mt-1">{ex.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
