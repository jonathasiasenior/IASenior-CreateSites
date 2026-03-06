import { motion } from "framer-motion";
import ecommerceVideo from "@/assets/ecommerce-demo.mp4";

const VideoShowcase = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Demonstração
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Veja um <span className="text-gradient">e-commerce</span> em ação
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Confira como ficam os sites que criamos — vitrines modernas, responsivas e prontas para vender.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card glow-border p-2 md:p-3 rounded-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 mb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
                <div className="w-3 h-3 rounded-full bg-accent/40" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                  www.sualoja.com.br
                </div>
              </div>
            </div>

            <video
              src={ecommerceVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl aspect-video object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
