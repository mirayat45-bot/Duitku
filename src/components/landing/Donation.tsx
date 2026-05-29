import { Section } from "./Section";
import { Heart, Coffee, Gift } from "lucide-react";

const platforms = [
  {
    name: "Saweria",
    desc: "Dukungan cepat dan mudah lewat Saweria.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    href: "#",
  },
  {
    name: "Trakteer",
    desc: "Traktir developer untuk mendukung pengembangan.",
    icon: Coffee,
    color: "from-amber-500 to-orange-500",
    href: "#",
  },
  {
    name: "Ko-fi",
    desc: "Beri dukungan internasional lewat Ko-fi.",
    icon: Gift,
    color: "from-sky-500 to-indigo-500",
    href: "#",
  },
];

export function Donation() {
  return (
    <Section
      id="donasi"
      eyebrow="Donasi"
      title={<>Dukung Pengembangan <span className="gradient-text">Duitku AI</span></>}
      subtitle="Jika kamu suka dengan Duitku AI dan ingin mendukung pengembangannya, kamu bisa memberikan donasi secara sukarela. Dukungan kamu sangat berarti untuk pengembangan fitur baru dan peningkatan kualitas aplikasi."
    >
      <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            className="feature-card rounded-2xl glass p-6 shadow-card border border-border text-center group"
          >
            <div className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-elegant`}>
              <p.icon size={22} />
            </div>
            <h3 className="mt-5 font-semibold text-lg">Donasi via {p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
