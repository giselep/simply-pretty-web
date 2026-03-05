import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Bouquet D'Afetos spa"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-rose-medium font-body text-sm tracking-[0.3em] uppercase mb-4"
      >
        Beleza, conforto e tecnologia
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6"
      >
        Para realçar o{" "}
        <span className="italic text-rose-medium">melhor</span> em você
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-primary-foreground/80 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
      >
        Tratamentos modernos, resultados visíveis e um atendimento
        personalizado pensado para cuidar de você com tecnologia de ponta.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contacto"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Agendar Horário
        </a>
        <a
          href="#servicos"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
        >
          Nossos Serviços
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
