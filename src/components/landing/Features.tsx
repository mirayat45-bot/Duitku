import { Section } from "./Section";
import {
  PencilLine,
  Camera,
  Image as ImageIcon,
  Send,
  PiggyBank,
  Target,
  BarChart3,
  Wallet,
  BellRing,
  Coins,
} from "lucide-react";

const features = [
  { icon: PencilLine, title: "Catat Pemasukan & Pengeluaran", desc: "Simpan transaksi harian dengan cepat, rapi, dan mudah dipahami." },
  { icon: Camera, title: "Scan Struk dari Kamera", desc: "Ambil foto struk dan biarkan sistem membantu membaca data transaksi." },
  { icon: ImageIcon, title: "Upload Struk dari Galeri", desc: "Gunakan foto struk yang sudah tersimpan di perangkatmu." },
  { icon: Send, title: "Kirim Struk lewat Telegram", desc: "Kirim foto struk ke bot Telegram dan pilih Simpan, Draft, Edit, atau Hapus." },
  { icon: PiggyBank, title: "Tabungan Fleksibel & Terkunci", desc: "Atur target tabungan sesuai kebutuhan dengan mode fleksibel atau terkunci." },
  { icon: Target, title: "Budget Bulanan", desc: "Pantau pengeluaran agar tetap sesuai rencana bulananmu." },
  { icon: BarChart3, title: "Laporan Keuangan", desc: "Lihat pemasukan, pengeluaran, dan ringkasan keuangan dengan lebih jelas." },
  { icon: Wallet, title: "Multi Dompet", desc: "Kelola cash, bank, e-wallet, dan dompet lainnya dalam satu tempat." },
  { icon: BellRing, title: "Reminder Tagihan", desc: "Jangan lewatkan tagihan penting dengan pengingat yang lebih rapi." },
  { icon: Coins, title: "Format Rupiah Otomatis", desc: "Semua nominal tampil rapi dengan format Rupiah Indonesia." },
];

export function Features() {
  return (
    <Section
      id="fitur"
      eyebrow="Fitur"
      title={<>Fitur Utama <span className="gradient-text">Duitku AI</span></>}
      subtitle="Semua yang kamu butuhkan untuk mencatat dan mengelola keuangan pribadi dalam satu aplikasi."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {features.map((f) => (
          <article
            key={f.title}
            className="feature-card group relative rounded-2xl glass p-6 shadow-card border border-border"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-elegant">
              <f.icon size={20} />
            </div>
            <h3 className="mt-5 font-semibold text-lg tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
