import { Sparkles, Palette, ScanLine, Send, Wallet2 } from "lucide-react";

const items = [
  { icon: Sparkles, label: "Mudah digunakan" },
  { icon: Palette, label: "Desain modern" },
  { icon: ScanLine, label: "Scan struk praktis" },
  { icon: Send, label: "Dukungan Telegram" },
  { icon: Wallet2, label: "Keuangan harian" },
];

export function Highlights() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-3xl px-4 py-6 sm:px-8 sm:py-7 shadow-card">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {items.map((it) => (
              <li key={it.label} className="flex items-center gap-3 justify-center sm:justify-start">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary">
                  <it.icon size={18} />
                </span>
                <span className="text-sm font-medium">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
