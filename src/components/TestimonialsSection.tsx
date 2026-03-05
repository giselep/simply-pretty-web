import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => (
  <section className="py-24 bg-rose-light">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
          Feedbacks
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          O que dizem as nossas clientes
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A satisfação das nossas clientes é o nosso maior orgulho.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-card rounded-3xl p-10 shadow-lg relative"
      >
        <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/15" />
        <div className="flex gap-1 mb-4 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-gold fill-gold"
            />
          ))}
        </div>
        <p className="text-foreground text-lg leading-relaxed text-center italic font-display mb-6">
          "A massagem na máquina é incrível, saí me sentindo renovada.
          Atendimento atencioso e pontual, recomendo de olhos fechados."
        </p>
        <div className="text-center">
          <p className="font-display font-semibold text-foreground">Julia R.</p>
          <p className="text-muted-foreground text-sm">Massagem</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
