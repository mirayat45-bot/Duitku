import { Section } from "./Section";
import { ArrowRight } from "lucide-react";

type Theme = {
  name: string;
  desc: string;
  bg: string;
  card: string;
  text: string;
  accent: string;
  badge: string;
};

const themes: Theme[] = [
  {
    name: "Clean Finance",
    desc: "Tampilan ringan, clean, dan nyaman dipakai sehari-hari.",
    bg: "#F8FAFC",
    card: "#FFFFFF",
    text: "#0F172A",
    accent: "#2563EB",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Midnight AI",
    desc: "Tema gelap premium dengan nuansa modern dan elegan.",
    bg: "#0F172A",
    card: "#1E293B",
    text: "#F8FAFC",
    accent: "#8B5CF6",
    badge: "bg-violet-500/20 text-violet-300",
  },
  {
    name: "Gold Finance",
    desc: "Kesan mewah dan classy dengan kombinasi warna eksklusif.",
    bg: "#11131A",
    card: "#1B1D26",
    text: "#FAF7EC",
    accent: "#FACC15",
    badge: "bg-yellow-400/20 text-yellow-300",
  },
  {
    name: "Cyber Money",
    desc: "Tampilan modern dengan sentuhan warna yang lebih bold dan dinamis.",
    bg: "#0A0F1F",
    card: "#101A33",
    text: "#E0F2FE",
    accent: "#22D3EE",
    badge: "bg-cyan-400/20 text-cyan-300",
  },
  {
    name: "Soft Purple",
    desc: "Nuansa lembut, stylish, dan tetap profesional.",
    bg: "#F5F3FF",
    card: "#FFFFFF",
    text: "#1E1B4B",
    accent: "#7C3AED",
    badge: "bg-violet-100 text-violet-700",
  },
];

export function Themes() {
  return (
    <Section
      id="tema"
      eyebrow="Tema"
      title={<>Tema yang Nyaman, Tampilan yang <span className="gradient-text">Berkelas</span></>}
      subtitle="Pilih tampilan yang sesuai dengan gaya kamu, dari tema clean hingga premium dark yang elegan."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((t) => (
          <article
            key={t.name}
            className="feature-card rounded-3xl glass p-5 shadow-card border border-border"
          >
            <div
              className="rounded-2xl p-5 overflow-hidden"
              style={{ backgroundColor: t.bg, color: t.text }}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded-full ${t.badge}`}
                >
                  {t.name}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: t.accent, boxShadow: `0 0 14px ${t.accent}` }}
                />
              </div>
              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  backgroundColor: t.card,
                  boxShadow: `0 10px 30px -12px ${t.accent}55`,
                }}
              >
                <p className="text-[10px] uppercase opacity-60">Saldo</p>
                <p className="mt-1 text-xl font-bold tracking-tight">Rp 8.450.000</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: "62%", backgroundColor: t.accent }}
                  />
                </div>
              </div>
            </div>
            <div className="px-2 pt-5">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          </article>
        ))}
        <article className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground flex flex-col justify-between shadow-elegant">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Coba semua tema langsung di aplikasi</h3>
            <p className="mt-3 text-sm opacity-90 leading-relaxed">
              Ubah tampilan dengan satu ketukan dan rasakan pengalaman keuangan yang lebih personal.
            </p>
          </div>
          <a
            href="#download"
            className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur px-4 py-2.5 text-sm font-semibold btn-press"
          >
            Lihat Tema di Aplikasi <ArrowRight size={16} />
          </a>
        </article>
      </div>
    </Section>
  );
}
