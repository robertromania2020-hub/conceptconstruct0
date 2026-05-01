import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#despre", label: "Despre" },
  { href: "/#servicii", label: "Servicii" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/#proiecte", label: "Proiecte" },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-smooth bg-surface-darker/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-accent font-display font-bold text-accent-foreground">
            C
          </span>
          <span className="font-display font-bold tracking-tight text-lg">
            Concept <span className="text-accent">Construct</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white hover:text-accent transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+40767929044" className="flex items-center gap-2 text-sm text-white hover:text-accent transition-smooth">
            <Phone className="h-4 w-4" />
            +40 767 929 044
          </a>
          <Button variant="accent" size="sm" asChild>
            <a href="#contact">Cere ofertă</a>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Meniu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-darker border-t border-white/5 animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-accent py-2 border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <Button variant="accent" asChild className="mt-2">
              <a href="#contact">Cere ofertă gratuită</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
