import { useState } from "react";
import { Section } from "./Section";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Apakah Duitku AI gratis digunakan?", a: "Ya, Duitku AI dapat digunakan untuk membantu mencatat keuangan harian dengan lebih praktis." },
  { q: "Apakah bisa dipakai lewat HP?", a: "Bisa. Duitku AI dirancang agar nyaman digunakan di perangkat mobile." },
  { q: "Apakah ada fitur scan struk?", a: "Ada. Kamu bisa scan struk lewat kamera, galeri, atau melalui Telegram." },
  { q: "Apakah bisa terhubung ke Telegram?", a: "Bisa. Duitku AI mendukung integrasi Telegram untuk proses yang lebih praktis." },
  { q: "Apakah data saya aman?", a: "Duitku AI dirancang agar penggunaan data tetap rapi dan aman untuk kebutuhan pribadi." },
  { q: "Apakah tersedia mode gelap?", a: "Ya, tersedia tampilan terang dan gelap yang sama-sama nyaman digunakan." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      eyebrow="FAQ"
      title="Pertanyaan yang Sering Ditanyakan"
      subtitle="Beberapa hal yang mungkin ingin kamu tahu tentang Duitku AI."
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border border-border glass shadow-card overflow-hidden transition-all ${
                isOpen ? "shadow-elegant" : ""
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 gap-4"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
