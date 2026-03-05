import { motion } from "framer-motion";
import moniaImg from "@/assets/monia.png";

const SpecialistSection = () => (
  <section className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/10">
              <img
                src={moniaImg}
                alt="Monia – Biomédica Responsável"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gold/30 rounded-2xl -z-10" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Profissional Responsável
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight">
            Monia
          </h2>
          <p className="text-gold font-display text-lg italic mb-6">
            Biomédica Esteta
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Com formação em Biomedicina e especialização em Estética Avançada,
            Monia é a profissional responsável por todos os procedimentos
            realizados na Bouquet D'Afetos. A sua dedicação ao cuidado
            personalizado e o domínio das técnicas mais modernas garantem
            resultados seguros, naturais e transformadores.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cada tratamento é conduzido com rigor técnico e sensibilidade,
            respeitando a individualidade de cada cliente e buscando sempre
            realçar a beleza natural de forma harmoniosa.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="text-primary font-display text-sm font-semibold tracking-wide">
              Cuidado, técnica e confiança
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SpecialistSection;
