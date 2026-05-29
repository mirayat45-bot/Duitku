import { Download, Globe, Smartphone } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center shadow-elegant border border-border glass-strong">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-80"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 0%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%), radial-gradient(40% 40% at 80% 100%, color-mix(in oklab, var(--secondary) 30%, transparent), transparent 70%)",
            }}
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium">
            <Smartphone size={14} className="text-primary" /> Mobile & Web
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Mulai Gunakan <span className="gradient-text">Duitku AI</span> Sekarang
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Gunakan Duitku AI lewat APK atau langsung melalui web app yang praktis dan responsif.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant btn-press"
            >
              <Download size={18} /> Download APK
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold btn-press hover:bg-accent"
            >
              <Globe size={18} /> Buka Web App
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Tersedia untuk penggunaan mobile dan web.
          </p>
        </div>
      </div>
    </section>
  );
}
