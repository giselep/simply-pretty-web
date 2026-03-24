import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Bouquet D'Afetos Spa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-rose-medium font-body text-sm tracking-[0.3em] uppercase mb-4"
      >
        Spa de Massagens Profissionais
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
      >
        O seu momento de{" "}
        <span className="italic text-rose-medium">bem-estar</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-primary-foreground/80 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
      >
        Massagens terapêuticas e relaxantes realizadas por profissionais
        qualificados. Cuide do seu corpo e da sua mente num ambiente de
        tranquilidade.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://wa.me/351931322707?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20massagem."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Agendar Massagem
        </a>
        <a
          href="#servicos"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
        >
          Nossas Massagens
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
