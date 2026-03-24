import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="Bouquet D'Afetos" className="h-32 w-auto mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Spa de massagens profissionais dedicado ao seu bem-estar.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
            Links Rápidos
          </h4>
          <div className="space-y-3">
            {["Início", "Sobre", "Massagens", "Contacto"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace("í", "i").replace("massagens", "servicos")}`}
                className="block text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
            Siga-nos
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-primary-foreground" />
            </a>
            <a
              href="https://wa.me/351933273221?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20massagem."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © 2026 Bouquet D'Afetos - Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
