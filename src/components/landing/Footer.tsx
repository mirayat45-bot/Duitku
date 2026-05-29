import { Send } from "lucide-react";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Tema", href: "#tema" },
  { label: "Tutorial", href: "#tutorial" },
  { label: "Donasi", href: "#donasi" },
  { label: "Download", href: "#download" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Kontak", href: "#" },
  { label: "Telegram", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold shadow-elegant">
                D
              </span>
              <span className="text-lg tracking-tight">
                Duitku <span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Aplikasi keuangan pribadi modern untuk mencatat transaksi, scan struk, mengatur tabungan, dan budget dengan lebih praktis.
            </p>
          </div>
          <div className="md:col-span-2">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                  >
                    {l.label === "Telegram" && <Send size={14} />}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© 2026 Duitku AI. All rights reserved.</p>
          <p>Dibuat dengan rapi untuk kebutuhan keuangan pribadi.</p>
        </div>
      </div>
    </footer>
  );
}
