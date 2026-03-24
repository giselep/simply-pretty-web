import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/351931322707?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20massagem.";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Massagens", href: "/#servicos", hasDropdown: true },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    setMobileServicesOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Bouquet D'Afetos" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(l.href)}
                  className="flex items-center gap-1 text-sm font-body tracking-wide text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-3 w-64">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              to={`/servicos/${s.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors group"
                              onClick={() => setServicesOpen(false)}
                            >
                              <Icon className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                                {s.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                className="text-sm font-body tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            )
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="flex flex-col gap-2 p-6">
              {links.map((l) =>
                l.hasDropdown ? (
                  <div key={l.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-colors py-2"
                    >
                      {l.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 pb-2">
                            {services.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.slug}
                                  to={`/servicos/${s.slug}`}
                                  onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                                  className="flex items-center gap-3 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-primary" />
                                  {s.title}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(l.href);
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {l.label}
                  </a>
                )
              )}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium text-center mt-2"
              >
                Agendar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
