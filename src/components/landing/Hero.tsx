import { ArrowRight, Download, Globe, Sparkles, TrendingUp, TrendingDown, Wallet, ShoppingBag, Coffee, Bus } from "lucide-react";

export function Hero() {
  return (
    <section id="beranda" className="relative pt-32 sm:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} className="text-primary" />
            Smart Personal Finance App
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Atur Keuanganmu Lebih <span className="gradient-text">Rapi, Simpel,</span> dan Modern
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Duitku AI membantu kamu mencatat pemasukan dan pengeluaran, scan struk, mengatur tabungan, budget, dan menghubungkan Telegram dalam satu aplikasi yang praktis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant btn-press"
            >
              <Download size={18} /> Download APK
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold btn-press"
            >
              <Globe size={18} /> Buka Web App
            </a>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a href="#fitur" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              Lihat Fitur <ArrowRight size={14} />
            </a>
            <a href="#tutorial" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              Lihat Tutorial <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-3xl rounded-full" />
      <div className="relative glass-strong rounded-[2.5rem] p-3 shadow-elegant">
        <div className="rounded-[2rem] bg-background p-5 overflow-hidden">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>09:41</span>
            <span>Duitku AI</span>
          </div>

          <div className="mt-5 rounded-2xl p-5 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-elegant">
            <p className="text-xs/none opacity-80">Total Saldo</p>
            <p className="mt-2 text-3xl font-bold tracking-tight">Rp 12.480.000</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/15 p-3">
                <div className="flex items-center gap-1.5 opacity-90 text-xs">
                  <TrendingUp size={14} /> Pemasukan
                </div>
                <p className="mt-1 font-semibold">Rp 6.2jt</p>
              </div>
              <div className="rounded-xl bg-white/15 p-3">
                <div className="flex items-center gap-1.5 opacity-90 text-xs">
                  <TrendingDown size={14} /> Pengeluaran
                </div>
                <p className="mt-1 font-semibold">Rp 2.8jt</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold">Budget Bulanan</p>
              <span className="text-xs text-muted-foreground">68%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[68%] bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold mb-3">Transaksi Terbaru</p>
            <ul className="space-y-2.5">
              {[
                { icon: ShoppingBag, label: "Belanja Bulanan", time: "Hari ini", val: "- Rp 320.000", color: "text-danger" },
                { icon: Coffee, label: "Kopi & Sarapan", time: "Kemarin", val: "- Rp 48.000", color: "text-danger" },
                { icon: Wallet, label: "Gaji Bulanan", time: "1 Jun", val: "+ Rp 6.200.000", color: "text-success" },
                { icon: Bus, label: "Transportasi", time: "30 Mei", val: "- Rp 25.000", color: "text-danger" },
              ].map((t, i) => (
                <li key={i} className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-card grid place-items-center text-primary">
                      <t.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-tight">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.time}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${t.color}`}>{t.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
