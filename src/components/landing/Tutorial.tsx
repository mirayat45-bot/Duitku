import { Section } from "./Section";
import { UserPlus, Plus, ScanLine, Send, Target, BarChart3, Play, BookOpen } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Daftar dan Login", desc: "Buat akun dan mulai gunakan aplikasi dengan mudah." },
  { icon: Plus, title: "Tambah Transaksi", desc: "Catat pemasukan dan pengeluaran harianmu." },
  { icon: ScanLine, title: "Scan Struk", desc: "Gunakan kamera atau galeri untuk membaca struk." },
  { icon: Send, title: "Hubungkan Telegram", desc: "Hubungkan akun Telegram untuk pengalaman yang lebih praktis." },
  { icon: Target, title: "Atur Tabungan dan Budget", desc: "Kelola target tabungan dan batas pengeluaran bulanan." },
  { icon: BarChart3, title: "Lihat Laporan", desc: "Pantau keuanganmu dengan ringkasan yang lebih jelas." },
];

export function Tutorial() {
  return (
    <Section
      id="tutorial"
      eyebrow="Tutorial"
      title="Cara Menggunakan Duitku AI"
      subtitle="Mulai dari langkah sederhana sampai pengaturan yang lebih lengkap."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <article
            key={s.title}
            className="feature-card relative rounded-2xl glass p-6 shadow-card border border-border"
          >
            <span className="absolute top-5 right-5 text-5xl font-bold text-primary/10 select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
              <s.icon size={20} />
            </div>
            <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant btn-press">
          <BookOpen size={16} /> Lihat Tutorial Lengkap
        </a>
        <a href="#" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold btn-press">
          <Play size={16} /> Tonton Video Tutorial
        </a>
      </div>
    </Section>
  );
}
