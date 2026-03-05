import { motion } from "framer-motion";
import { Cpu, Users, Sofa, Award } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    num: "01",
    title: "Tecnologia de Ponta",
    desc: "Utilizamos equipamentos modernos para garantir resultados rápidos, eficazes e seguros.",
  },
  {
    icon: Users,
    num: "02",
    title: "Profissionais Qualificados",
    desc: "Equipa formada e preparada para oferecer um atendimento personalizado.",
  },
  {
    icon: Sofa,
    num: "03",
    title: "Ambiente Confortável",
    desc: "Espaço acolhedor e pensado ao pormenor para o seu bem-estar.",
  },
  {
    icon: Award,
    num: "04",
    title: "Resultados Comprovados",
    desc: "Clientes satisfeitas e transformadas a cada visita.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
          Porquê Escolher-nos
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          4 Motivos para nos escolher
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-gold font-display text-3xl font-bold">
              {r.num}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-3">
              {r.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
