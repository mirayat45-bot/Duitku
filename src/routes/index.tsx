import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { Features } from "@/components/landing/Features";
import { Themes } from "@/components/landing/Themes";
import { Tutorial } from "@/components/landing/Tutorial";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { Donation } from "@/components/landing/Donation";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Duitku AI — Aplikasi Keuangan Pribadi Modern" },
      {
        name: "description",
        content:
          "Duitku AI membantu mencatat transaksi, scan struk, mengatur tabungan, budget, dan terhubung dengan Telegram dalam satu aplikasi yang praktis.",
      },
      { property: "og:title", content: "Duitku AI — Aplikasi Keuangan Pribadi Modern" },
      {
        property: "og:description",
        content:
          "Atur keuanganmu lebih rapi, simpel, dan modern bersama Duitku AI.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <Themes />
        <Tutorial />
        <DownloadSection />
        <Donation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
