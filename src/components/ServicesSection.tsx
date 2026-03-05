import { motion } from "framer-motion";
import {
  Sparkles,
  Syringe,
  Droplets,
  Heart,
  Flower2,
  Star,
  Gem,
  Palette,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Microagulhamento",
    desc: "Estimula o organismo a produzir colágeno e elastina para firmeza e renovação da pele.",
  },
  {
    icon: Syringe,
    title: "Botox",
    desc: "Tratamento estético rápido e seguro que deixa a aparência mais jovem e natural.",
  },
  {
    icon: Droplets,
    title: "Limpeza de Pele",
    desc: "Indicada para todos os tipos de pele, mantendo-a equilibrada e bonita.",
  },
  {
    icon: Heart,
    title: "PEIM",
    desc: "Tratamento estético para reduzir ou eliminar vasinhos aparentes nas pernas.",
  },
  {
    icon: Flower2,
    title: "Intradermoterapia",
    desc: "Pele mais hidratada, firme e luminosa. Estimula crescimento capilar.",
  },
  {
    icon: Star,
    title: "Mesoterapia",
    desc: "Trata flacidez, celulite, gordura localizada e rejuvenescimento facial.",
  },
  {
    icon: Gem,
    title: "Preenchimento Facial",
    desc: "Restaura volume, suaviza rugas e realça contornos com ácido hialurônico.",
  },
  {
    icon: ShieldCheck,
    title: "Bioestimulador de Colágeno",
    desc: "Melhora firmeza e elasticidade combatendo flacidez de forma natural.",
  },
  {
    icon: Palette,
    title: "Camuflagem Regenerativa",
    desc: "Microagulhamento e pigmentação para estrias, cicatrizes e manchas.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
          Nossos Tratamentos
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Conheça os nossos serviços
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
