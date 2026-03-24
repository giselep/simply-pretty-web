import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

const WHATSAPP_NUMBER = "351931322707";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, telefone, email, servico, mensagem } = form;
    if (!nome.trim() || !telefone.trim()) return;

    const text = encodeURIComponent(
      `Olá! Gostaria de agendar uma massagem.\n\nNome: ${nome.trim()}\nTelefone: ${telefone.trim()}${email.trim() ? `\nE-mail: ${email.trim()}` : ""}${servico && servico !== "Selecione uma massagem" ? `\nMassagem: ${servico}` : ""}${mensagem.trim() ? `\nMensagem: ${mensagem.trim()}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  // Flatten all treatments for the select
  const allTreatments = services.flatMap((s) =>
    s.treatments.map((t) => ({ category: s.title, name: t.split(" – ")[0] }))
  );

  return (
  <section id="contacto" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
          Contacto
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Agende a sua massagem
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Reserve um momento só para você. A nossa equipa está pronta para
          proporcionar uma experiência única de bem-estar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Nome
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
              placeholder="Seu nome"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Telemóvel
              </label>
              <input
                type="tel"
                required
                maxLength={20}
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                placeholder="+351 931 322 707"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                E-mail
              </label>
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                placeholder="geral@bouquetdeafetos.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Massagem
            </label>
            <select
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
              className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition">
              <option>Selecione uma massagem</option>
              {services.map((s) => (
                <optgroup key={s.slug} label={s.title}>
                  {s.treatments.map((t) => (
                    <option key={t}>{t.split(" – ")[0]}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Mensagem
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="w-full bg-secondary border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Enviar Mensagem
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-rose-light rounded-2xl p-8 space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Informações de Contacto
            </h3>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Telefone</p>
                <p className="text-muted-foreground text-sm">+351 931 322 707</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">E-mail</p>
                <p className="text-muted-foreground text-sm">
                  geral@bouquetdeafetos.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Horário</p>
                <p className="text-muted-foreground text-sm">
                  Seg - Sex: 11:00 - 22:00
                </p>
                <p className="text-muted-foreground text-sm">
                  Sáb: 11:00 - 22:00
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Sede Portugal
                </p>
                <p className="text-muted-foreground text-sm">
                  Rua Doutor Bastos Gonçalves 3, 1600-898
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Curitiba, Brasil
                </p>
                <p className="text-muted-foreground text-sm">
                  Rua Professor João Soares Barcelos, 1394 Hauer, Curitiba -
                  81630-060
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
