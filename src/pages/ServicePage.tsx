import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const WHATSAPP_NUMBER = "351933273221";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const otherServices = services.filter((s) => s.slug !== slug);

  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Massagem não encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Voltar ao início</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nome = form.nome.trim();
    const telefone = form.telefone.trim();
    const mensagem = form.mensagem.trim();

    if (!nome || !telefone) return;

    const text = encodeURIComponent(
      `Olá! Gostaria de agendar *${service.title}*.\n\nNome: ${nome}\nTelefone: ${telefone}${mensagem ? `\nMensagem: ${mensagem}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 bg-rose-light">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Sobre o tratamento
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.longDesc}
                </p>
              </motion.div>

              {/* Treatments list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Tipos de Massagem
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.treatments.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Benefícios
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Para quem é indicado?
                </h2>
                <div className="bg-rose-light rounded-2xl p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.whoCanDo}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-28 bg-card rounded-2xl shadow-lg p-8 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Agendar via WhatsApp
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition text-sm"
                      placeholder="+351 931 322 707"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Mensagem
                    </label>
                    <textarea
                      rows={3}
                      maxLength={500}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition resize-none text-sm"
                      placeholder="Alguma informação adicional?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar pelo WhatsApp
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rose-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
              Explore mais
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Outras massagens
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="group block bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <SIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {s.shortDesc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
