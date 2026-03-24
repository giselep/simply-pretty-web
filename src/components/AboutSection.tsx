import { motion } from "framer-motion";
import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Interior do espaço Bouquet D'Afetos"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-light rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Quem Somos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Sobre a Bouquet{" "}
            <span className="text-gradient">D'Afetos</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Somos um spa dedicado ao bem-estar, onde cada cliente é recebido
            com atenção e carinho. Oferecemos massagens profissionais e
            terapêuticas realizadas por profissionais qualificados, num
            ambiente pensado para proporcionar relaxamento e recuperação.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Das massagens relaxantes às terapêuticas, das estéticas às
            faciais, cada tratamento é personalizado para as suas
            necessidades. O nosso objetivo é cuidar do seu corpo e da sua
            mente, ajudando-o a encontrar equilíbrio e bem-estar.
          </p>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Conheça as nossas massagens →
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
