import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

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
          Nossas Massagens
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Conheça os nossos tratamentos
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={1024}
                height={768}
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {s.shortDesc}
              </p>
              <ul className="text-muted-foreground text-xs space-y-1 mb-5">
                {s.treatments.slice(0, 4).map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {t.split(" – ")[0]}
                  </li>
                ))}
                {s.treatments.length > 4 && (
                  <li className="text-primary text-xs font-medium">
                    + {s.treatments.length - 4} mais...
                  </li>
                )}
              </ul>
              <Link
                to={`/servicos/${s.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Ver detalhes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
