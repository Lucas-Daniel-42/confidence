import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Compass,
  Crown,
  GraduationCap,
  Globe2,
  Headphones,
  Layers,
  MessagesSquare,
  MonitorPlay,
  Plus,
  Minus,
  Play,
  Quote,
  Sparkles,
  Target,
  Users,
  UserCheck,
  Map,
} from "lucide-react";
import heroImg from "@/assets/hero-professional.jpg";
import aboutImg from "@/assets/about.png";
import methodologyImg from "@/assets/methodology.jpg";
import founderImg from "@/assets/founder.jpg";
import logo from "@/assets/logo_01.png";

/* ------------------------- shared building blocks ------------------------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl ${center ? "" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase ${
            light ? "text-gold" : "text-primary"
          }`}
        >
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-balance ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-background/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* --------------------------------- Hero ---------------------------------- */

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* decorative gold light beams */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--gradient-light-gold)] blur-2xl" />
        <div className="absolute top-1/2 -right-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 backdrop-blur px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary">
            <Sparkles size={14} className="text-gold" />
            Consultoria de Inglês cooporativo para Alta Performance
          </div>

          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.03] text-foreground text-balance">
            Inglês estratégico para quem precisa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">gerar impacto</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/30 -z-0" />
            </span>{" "}
            no mundo real.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Desenvolva a capacidade de se comunicar em inglês com a mesma clareza, confiança e impacto que você já possui em português.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              Agendar Diagnóstico
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/40 backdrop-blur px-7 py-4 text-sm font-medium text-foreground hover:border-gold hover:text-primary transition-all"
            >
              Conhecer Metodologia
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={heroImg}
              alt="Profissional em reunião internacional"
              width={1280}
              height={1280}
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-gold/10" />
          </div>

          {/* floating card */}
          <div className="absolute -bottom-8 -left-6 hidden md:flex glass rounded-2xl p-5 shadow-[var(--shadow-soft)] items-center gap-3 max-w-[260px]">
            <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary">
              <Crown size={18} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Premium</div>
              <div className="text-sm font-medium text-foreground">Modelo deliberadamente seleto</div>
            </div>
          </div>

          {/* gold accent ring */}
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border border-gold/40" />
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Institutional Video -------------------------- */

export function VideoSection() {
  return (
    <section id="sobre" className="py-24 bg-background relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader eyebrow="Sobre nós" title="Conheça a Confidence" />

        <div className="mt-14 relative group rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-video bg-deep">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url(${methodologyImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent" />
          <button
            type="button"
            aria-label="Reproduzir vídeo"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="relative grid place-items-center">
              <span className="absolute inset-0 rounded-full bg-gold/30 blur-2xl scale-150 group-hover:scale-[1.8] transition-transform" />
              <span className="relative h-20 w-20 rounded-full bg-gold grid place-items-center text-deep shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                <Play size={28} className="ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Apresentação</div>
              <div className="font-display text-2xl mt-1">A consultoria que ensina inglês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Mission / Vision / Values ----------------------- */

const mvv = [
  {
    icon: Target,
    label: "Missão",
    text:"Capacitar nossos mentorados para que se comuniquem em inglês com a mesma clareza, confiança e impacto que já possuem em sua língua nativa.",
  },
  {
    icon: Compass,
    label: "Visão",
    text: "Ser a referência absoluta em soluções de inglês coorporativo para alta performance",
  },
  {
    icon: Award,
    label: "Valores",
    text: "Propósito · Excelência · Personalização · Clareza · Confiança",
  },
];

export function MissionVisionValues() {
  return (
    <section id="#" className="py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Princípios"
          title="Conheca os princípios que nos orientam"
          />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {mvv.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="group relative rounded-3xl bg-card p-8 border border-border/60 hover:border-gold/50 hover:-translate-y-1 transition-all duration-500 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-14 w-14 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Resumo/About ----------------------------- */

export function AboutSummary() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img
              src={aboutImg}
              alt="Ambiente profissional Confidence"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-[560px] object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground text-balance">
            Uma consultoria — não uma escola.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A Confidence é uma consultoria de inglês para propósitos específicos e alta
              performance.
            </p>
            <p>
              Operamos sob um modelo de negócio deliberadamente seleto que se distancia das escolas
              tradicionais e do ensino genérico.
            </p>
            <p>
              Nosso diferencial é a <span className="text-foreground font-medium">personalização radical</span>.
              Não entregamos cursos, mas soluções estratégicas desenhadas para os objetivos reais de
              cada mentorado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Founder -------------------------------- */

export function Founder() {
  return (
    <section id="fundador" className="py-28 bg-secondary/80 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-gold/20">
            <img
              src={founderImg}
              alt="Jhonatan Reis Nascimento"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 right-6 glass rounded-2xl px-5 py-4 flex items-center gap-3">
            <Crown size={18} className="text-gold" />
            <div className="text-sm text-foreground">
              <span className="font-medium">+14 anos</span>{" "}
              <span className="text-muted-foreground">formando comunicadores</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-primary">
            <span className="h-px w-8 bg-gold" /> Fundador
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground text-balance">
            Jhonatan Reis Nascimento
          </h2>
          <div className="mt-2 text-gold tracking-wide">CEO &amp; Head of Education</div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "+14 anos de experiência",
              "Cambridge Examiner",
              "CELTA",
              "Cambridge CPE",
              "Cultura Inglesa",
              "FGV",
            ].map((c) => (
              <div
                key={c}
                className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground/80"
              >
                {c}
              </div>
            ))}
          </div>

          <blockquote className="mt-10 relative border-l-2 border-gold pl-6 italic text-lg text-foreground/85 leading-relaxed">
            "A Confidence é a materialização de um sonho e a síntese entre rigor acadêmico,
            experiência prática e foco em performance real."
          </blockquote>
        </div>
      </div>
    </section>
  );
}


/* -------------------------------- Solutions ------------------------------- */

const solutions = [
  {
    icon: Award,
    title: "Fluency Path",
    text: "Mentoria completa de inglês para alta performance, baseada em um modelo único e totalmente personalizado. Destinada a quem busca desenvolver fluência real a partir de objetivos específicos — seja no contexto corporativo, acadêmico ou de vida real.",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    text: "Soluções corporativas de inglês aplicadas à realidade da empresa, com foco em comunicação estratégica, performance e resultados. Desenvolvidas sob medida para equipes e áreas específicas, alinhando idioma, contexto e objetivos do negócio.",
  },
  {
    icon: Globe2,
    title: "Talk Flow",
    text: "Sessões de conversação guiadas e estratégicas, focadas em destravar a fala, ganhar fluidez e comunicar-se com mais naturalidade. Ideal para quem já possui base em inglês, mas precisa desenvolver confiança e espontaneidade ao falar.",
  },
  {
    icon: GraduationCap,
    title: "Test Prep",
    text: "Preparação estratégica para exames e certificações de proficiência em inglês. Voltada a estudantes e profissionais que precisam de resultados objetivos, com foco em estrutura de prova, performance linguística e domínio das habilidades exigidas.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Nossas Soluções"
          title="Soluções desenvolvidas para objetivos reais"
          subtitle="Cada jornada é desenhada de acordo com seu contexto profissional, acadêmico ou pessoal."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl bg-card p-10 border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={26} />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold opacity-70">Solução</span>
              </div>
              <h3 className="mt-8 font-display text-3xl text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary group/cta"
              >
                Saber mais
                <ArrowRight size={14} className="transition-transform group-hover/cta:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Methodology ------------------------------ */

const methods = [
  {
    title: "Lexical Approach",
    text:
      "O vocabulário é trabalhado de forma contextualizada para gerar fluência natural.",
    icon: BookOpen,
  },
  {
    title: "Functional Language",
    text: "Aprenda o inglês que realmente é utilizado em situações profissionais.",
    icon: MessagesSquare,
  },
  {
    title: "Task-Based Learning",
    text: "Desenvolvimento através de tarefas reais de comunicação.",
    icon: Layers,
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold">
            <span className="h-px w-8 bg-gold" /> Metodologia
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-background text-balance">
            Inglês com propósito, contexto e resultado.
          </h2>
          <p className="mt-6 text-background/70 leading-relaxed">
            Nossa abordagem combina rigor acadêmico, aplicação prática e uma trilha desenhada
            sob medida — para que cada hora investida se converta em comunicação real, com
            autoridade e confiança.
          </p>
          <div className="mt-10 rounded-3xl overflow-hidden border border-gold/20">
            <img
              src={methodologyImg}
              alt="Sessão de mentoria"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="space-y-5">
          {methods.map(({ title, text, icon: Icon }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl glass-dark p-7 hover:border-gold/60 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-gold/15 grid place-items-center text-gold shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-gold/80">
                    0{i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-2xl text-background">{title}</h3>
                  <p className="mt-2 text-sm text-background/70 leading-relaxed">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Differentials ----------------------------- */

const diffs = [
  { icon: UserCheck, label: "Mentoria individual" },
  { icon: Briefcase, label: "Inglês corporativo aplicado" },
  { icon: MonitorPlay, label: "Sessões ao vivo" },
  { icon: Map, label: "Plano de desenvolvimento individual" },
  { icon: Sparkles, label: "Plataforma digital exclusiva" },
  { icon: Compass, label: "Trilha por área profissional" },
  { icon: MessagesSquare, label: "Clube de conversação" },
  { icon: Headphones, label: "Suporte humano" },
  { icon: GraduationCap, label: "Direção pedagógica especializada" },
];

export function Differentials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Por que a Confidence é a escolha lógica"
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {diffs.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group bg-card p-8 flex items-center gap-4 hover:bg-secondary/60 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-gold group-hover:text-deep transition-colors">
                <Icon size={20} />
              </div>
              <div className="font-medium text-foreground">{label}</div>
              <CheckCircle2 size={16} className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Clients -------------------------------- */

const logos = ["Banco Atlântico", "Vector Group", "Helix Capital", "Nordic Labs", "Veritas", "Auriga"];
const testimonials = [
  {
    name: "Mariana C.",
    role: "Diretora de Marketing",
    text:
      "Em quatro meses, deixei de ler em inglês para liderar reuniões internacionais com confiança total.",
  },
  {
    name: "Rafael M.",
    role: "Engenheiro Sênior",
    text:
      "A personalização é absurda. Cada sessão é desenhada para o que eu realmente preciso entregar no trabalho.",
  },
  {
    name: "Luísa P.",
    role: "PhD Candidate",
    text:
      "A preparação para o IELTS foi cirúrgica. Resultado acima do necessário para Oxford.",
  },
];

export function Clients() {
  return (
    <section id="clientes" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Nossos Clientes"
          title="Profissionais e empresas que confiam na Confidence"
          subtitle="Profissionais, líderes e executivos que escolheram um inglês à altura de seus objetivos."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((l) => (
            <div
              key={l}
              className="h-20 rounded-2xl bg-card border border-border grid place-items-center text-sm tracking-wide text-muted-foreground hover:text-primary hover:border-gold/50 transition-colors"
            >
              {l}
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl bg-card p-8 border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-gold/40" size={36} />
              <blockquote className="text-foreground leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center text-primary font-medium">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

const faqs = [
  {
    q: "O que é a Confidence English Solutions",
    a: "A Confidence é uma consultoria de inglês para propósitos específicos. Não somos uma escola tradicional nem um curso genérico. Somos uma mentoria individual, online, ao vivo e completamente personalizada, desenvolvida para quem quer construir fluência estratégica — seja no contexto profissional, acadêmico ou de vida pessoal. Aqui, o inglês não é ensinado de forma isolada. Ele é construído em torno do seu objetivo real, do seu ritmo e da sua realidade.",
  },
  {
    q: "Para quem é a Confidence?",
    a: "A Confidence foi pensada para adultos que levam o inglês a sério — e que querem um serviço à altura das suas ambições. Atendemos três perfis principais: Contexto profissional e corporativo: profissionais que precisam do inglês no trabalho — reuniões, apresentações, negociações, e-mails e interações com times internacionais. Contexto acadêmico: estudantes e profissionais que buscam preparação para exames de proficiência, intercâmbio, pós-graduação no exterior ou certificações internacionais. Contexto de vida e vida global: pessoas que querem se comunicar com mais liberdade — em viagens, em interações sociais internacionais ou simplesmente para expandir suas perspectivas de mundo. Se você tem um objetivo claro com o inglês, a Confidence tem uma solução para ele.",
  },
  {
    q: " O que diferencia a Confidence das outras escolas de inglês?",
    a: "A Confidence não é uma escola tradicional. Enquanto cursos genéricos seguem roteiros prontos e turmas fixas, nós construímos o percurso junto com o mentorado — com base no seu contexto real, seus objetivos específicos e o seu ritmo de aprendizado. Cada jornada na Confidence é única. Nada de conteúdo de prateleira, nada de turmas, nada de material que não foi feito para você. O resultado é um inglês que realmente funciona para a sua vida — com propósito, clareza e impacto.",
  },
  {
    q: "Como funciona a mentoria na prática?",
    a: "As sessões são individuais, ao vivo e 100% online — apenas você e o seu mentor, em horários fixos e exclusivos. Cada sessão é planejada com base nos seus objetivos e no seu momento atual. O conteúdo é construído para o seu contexto real — seja uma apresentação corporativa, uma redação acadêmica ou uma conversa fluente no exterior. Entre as sessões, o aprendizado continua por meio da Confidence Digital Platform, com vídeos curtos, microatividades e acompanhamento direto via WhatsApp.",
  },
  {
    q: "Quanto tempo leva para desenvolver fluência?",
    a: "Os primeiros resultados aparecem em poucas semanas — porque o aprendizado é direcionado ao seu objetivo desde o início. O percurso completo — da base à comunicação plena e estratégica — é planejado de forma individualizada, com metas de curto, médio e longo prazo e progresso mensurável a cada etapa. Não existe uma resposta única para essa pergunta, porque cada jornada é diferente. O que existe é um plano claro, construído especificamente para você.",
  },
  {
    q: "Quem conduz as mentorias?",
    a: "A Confidence é fundada e liderada por Jhonatan Reis — educador, gestor acadêmico e Cambridge Speaking Examiner para a Universidade de Cambridge no Brasil, com mais de 14 anos de experiência no ensino de inglês para adultos. Jhonatan combina rigor acadêmico, visão pedagógica contemporânea e aplicação prática, com formação em Letras, duas pós-graduações (Educação Bilíngue e Gestão para Educação Bilíngue) e certificações internacionais como CELTA, Cambridge CPE e Train the Trainer. Além de liderar a Confidence, Jhonatan atua diretamente como mentor — o que garante que os padrões de excelência pedagógica sejam preservados em cada etapa da jornada do aluno.",
  },
  {
    q: "Qual é o material utilizado?",
    a: "Todo o conteúdo é desenvolvido sob medida para o seu contexto e objetivos — nada de livros fixos ou apostilas genéricas. O material é hospedado na Confidence Digital Platform, com vídeos em formato de pílula, trilhas de aprendizado personalizadas, atividades práticas e recursos de IA para prática de fala e escuta. O material é vivo, dinâmico e adaptado à sua realidade — seja ela corporativa, acadêmica ou pessoal.",
  },
  {
    q: "Existe suporte fora das sessões?",
    a: "Sim. O mentorado conta com suporte direto via WhatsApp, com atendimento 100% humano de segunda a sexta, além de feedbacks semanais estruturados em texto e áudio. Isso garante continuidade, consistência e segurança durante toda a jornada — não apenas dentro das sessões.",
  },
  {
    q: "E se eu precisar faltar a uma sessão?",
    a: "Sem problemas. A Confidence entende que a vida acontece. Em casos de ausência, o conteúdo da sessão estará disponível em formato de vídeo-resumo e atividades curtas na plataforma digital, garantindo que o aprendizado siga sem interrupções.",
  },
  {
    q: "Existe certificação ao final da mentoria?",
    a: "Sim. Ao longo do percurso, cada mentorado recebe o Certificado Confidence, que atesta o nível alcançado e as habilidades desenvolvidas em cada módulo. Para quem busca uma certificação internacional reconhecida globalmente, a Confidence também oferece preparação para os principais exames de proficiência — como IELTS, TOEFL e Cambridge — além de acesso ao Certificado VERSANT PROFESSIONAL, chancelado pela Pearson e reconhecido por milhares de empresas e instituições ao redor do mundo.",
  },
  {
    q: "Já tentei outros cursos e não funcionou. Por que a Confidence seria diferente?",
    a: "Porque o que oferecemos não é um curso. A Confidence oferece mentoria individual e completamente personalizada para o seu propósito específico. O foco não está em ensinar inglês de forma genérica, mas em transformar sua capacidade de comunicação — com um plano construído para você, acompanhamento contínuo e resultados claros em cada etapa. Cursos genéricos não funcionaram porque não foram feitos para você. A Confidence foi. A fluência não é promessa. É consequência do método.",
  },
  {
    q: "Como posso começar?",
    a: "De forma simples e direta: basta enviar uma mensagem para o WhatsApp da Confidence. O primeiro passo é uma call de diagnóstico gratuita — 30 minutos para entendermos o seu contexto, os seus objetivos e como a Confidence pode construir a sua jornada de forma personalizada. Sem compromisso. Apenas uma conversa para entender se faz sentido para você.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Tudo o que você precisa saber antes da sua call diagnóstica."
        />
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-card transition-all ${
                  isOpen ? "border-gold/50 shadow-[var(--shadow-soft)]" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span
                    className={`h-9 w-9 rounded-full grid place-items-center transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------ */

export function FinalCTA() {
  return (
    <section id="contato" className="py-28 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold">
          <span className="h-px w-8 bg-gold" /> Próximo passo
        </div>
        <h2 className="mt-6 font-display text-4xl md:text-6xl text-background text-balance leading-tight">
          Seu objetivo exige um inglês à altura.
        </h2>
        <p className="mt-6 text-background/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Agende uma call diagnóstica gratuita e descubra como construir uma jornada personalizada
          para alcançar seus objetivos.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-deep hover:shadow-[var(--shadow-gold)] transition-all"
          >
            Agendar Diagnóstico Gratuito
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://w.app/confidence"
            className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 backdrop-blur px-8 py-4 text-sm font-medium text-background hover:bg-background/10 transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

export function Footer() {
  return (
    <footer className="bg-deep text-background/80 pt-16 pb-8 border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
              <img src={logo} alt="Confidence" className=" h-20 w-20 object-contain" />
            <div>
              <div className="font-display text-lg text-background tracking-wide">CONFIDENCE</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase">English Solutions</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-background/60">
            Consultoria de inglês para profissionais e executivos de alta performance.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Navegação</div>
          <ul className="mt-5 space-y-3 text-sm">
            {["Início", "Sobre", "Soluções", "Metodologia", "FAQ"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contato</div>
          <ul className="mt-5 space-y-3 text-sm text-background/70">
            <li><a href="#">confidence.corporateenglish@gmail.com</a></li>
            <li><a href="https://w.app/confidence">+55 (11) +55 11 91770-4818</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Redes</div>
          <ul className="mt-5 space-y-3 text-sm">
            {["Instagram", "LinkedIn", "YouTube", "WhatsApp"].map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-gold transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Confidence English Solutions. Todos os direitos reservados.</div>
          <div className="italic text-gold/80">
            Confidence English Solutions — Transformando fluência em confiança.
          </div>
        </div>
      </div>
    </footer>
  );
}
