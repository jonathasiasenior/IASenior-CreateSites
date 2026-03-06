const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-display font-bold text-gradient">IASenior</span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} IASenior. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
