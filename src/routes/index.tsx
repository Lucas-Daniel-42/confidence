import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import {
  Hero,
  VideoSection,
  MissionVisionValues,
  AboutSummary,
  Solutions,
  Methodology,
  Differentials,
  Clients,
  Founder,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Confidence English Solutions — Consultoria de Inglês para Alta Performance" },
      {
        name: "description",
        content:
          "Consultoria premium de inglês para profissionais, executivos e acadêmicos. Mentorias 1:1, metodologia própria e atendimento internacional.",
      },
      { property: "og:title", content: "Confidence English Solutions" },
      {
        property: "og:description",
        content:
          "Inglês estratégico para quem precisa gerar impacto no mundo real. Mentorias individuais, metodologia própria e excelência acadêmica.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <MissionVisionValues />
        <AboutSummary />
        <Founder />
        <Solutions />
        <Methodology />
        <Clients />
        <Differentials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
