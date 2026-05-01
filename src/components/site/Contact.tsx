import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Numele este prea scurt").max(100),
  phone: z.string().trim().min(7, "Telefon invalid").max(30),
  email: z.string().trim().email("Email invalid").max(255),
  message: z.string().trim().min(5, "Mesajul este prea scurt").max(1000),
});

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Verifică datele introduse");
      return;
    }
    setLoading(true);
    const text = `Bună ziua, sunt ${result.data.name}.%0ATelefon: ${result.data.phone}%0AEmail: ${result.data.email}%0A%0A${encodeURIComponent(result.data.message)}`;
    window.open(`https://wa.me/40767929044?text=${text}`, "_blank");
    setTimeout(() => {
      setLoading(false);
      toast.success("Cererea ta este pregătită — te redirecționăm către WhatsApp.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-darker text-on-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="container relative grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Contact</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Solicită o ofertă <span className="text-accent">gratuită.</span>
          </h2>
          <p className="mt-5 text-on-dark/70 text-lg leading-relaxed">
            Spune-ne despre proiectul tău. Răspundem în maxim 24 de ore cu o evaluare clară și recomandări utile.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:+40767929044" className="flex items-center gap-4 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs uppercase tracking-wider text-on-dark/60">Telefon</div>
                <div className="font-display font-bold text-lg group-hover:text-accent transition-smooth">+40 767 929 044</div>
              </span>
            </a>
            <a href="mailto:contact@conceptconstruct.ro" className="flex items-center gap-4 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs uppercase tracking-wider text-on-dark/60">Email</div>
                <div className="font-display font-bold text-lg group-hover:text-accent transition-smooth">contact@conceptconstruct.ro</div>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <div className="text-xs uppercase tracking-wider text-on-dark/60">Acoperire</div>
                <div className="font-display font-bold text-lg">România</div>
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-surface-elevated/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 shadow-elegant">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-on-dark/90">Nume *</Label>
              <Input id="name" name="name" required maxLength={100} className="bg-surface-darker border-white/10 text-on-dark placeholder:text-on-dark/40 h-12" placeholder="Numele tău" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-on-dark/90">Telefon *</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} className="bg-surface-darker border-white/10 text-on-dark placeholder:text-on-dark/40 h-12" placeholder="+40 7XX XXX XXX" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="email" className="text-on-dark/90">Email *</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="bg-surface-darker border-white/10 text-on-dark placeholder:text-on-dark/40 h-12" placeholder="exemplu@email.com" />
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="message" className="text-on-dark/90">Mesaj *</Label>
            <Textarea id="message" name="message" required maxLength={1000} rows={5} className="bg-surface-darker border-white/10 text-on-dark placeholder:text-on-dark/40" placeholder="Descrie pe scurt proiectul tău..." />
          </div>
          <Button type="submit" variant="accent" size="lg" className="mt-6 w-full" disabled={loading}>
            {loading ? "Se trimite..." : <>Trimite cererea <Send /></>}
          </Button>
          <p className="mt-3 text-xs text-on-dark/50 text-center">
            Răspundem în maxim 24h. Datele tale rămân confidențiale.
          </p>
        </form>
      </div>
    </section>
  );
};
