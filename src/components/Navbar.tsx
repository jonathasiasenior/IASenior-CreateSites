import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5511971345013?text=Olá! Gostaria de saber mais sobre criação de sites.";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-2xl font-display font-bold text-gradient">
          IASenior
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Serviços</a>
          <a href="#vantagens" className="text-sm text-muted-foreground hover:text-primary transition-colors">Vantagens</a>
          <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfólio</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-btn px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass-card border-t border-border/30 px-4 pb-4 flex flex-col gap-4"
        >
          <a href="#servicos" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Serviços</a>
          <a href="#vantagens" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Vantagens</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Portfólio</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="gradient-btn px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground text-center">
            Fale Conosco
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
