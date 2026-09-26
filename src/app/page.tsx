"use client";

import { Button } from "@/components/ui/button";
import Aurora from "@/components/reactbits/aurora";
import AnimatedContent from "@/components/reactbits/animated-content";
import GlareHover from "@/components/reactbits/glare-hover";
import Magnet from "@/components/reactbits/magnet";
import {
  ShieldCheck,
  Cpu,
  FileText,
  Code2,
  Eye,
  Database,
  WifiOff,
  ScanLine,
  Lock,
  Server,
  ArrowRight,
  Download,
  CheckCircle2,
  Monitor,
  Terminal,
  Globe,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Models", href: "#models" },
  { label: "Download", href: "#download" },
];

const featureCards = [
  {
    icon: WifiOff,
    title: "Air-gapped desktop app",
    description:
      "Koala runs entirely on your organization's GPU server. No external calls, ever. Verified by an always-visible network monitor.",
  },
  {
    icon: Cpu,
    title: "Model auto-selection",
    description:
      "Route coding, reasoning, summarization and vision tasks to the open-weight model best suited for each job, all running locally.",
  },
  {
    icon: Eye,
    title: "Multimodal understanding",
    description:
      "Read scanned PDFs, handwritten notes, engineering drawings and photographs through on-device OCR and vision models.",
  },
  {
    icon: Terminal,
    title: "Agentic execution",
    description:
      "Plan multi-step work, call local tools, read and write files, execute code in a sandbox, and iterate until the deliverable is done.",
  },
  {
    icon: FileText,
    title: "Real deliverables",
    description:
      "Generate approval notes, board-ready PPTs, Excel calculations with formulas, and working code — not just chat replies.",
  },
  {
    icon: Database,
    title: "Local knowledge base",
    description:
      "Ground every answer in your organization's manuals, SOPs and past correspondence through a local connector.",
  },
];

const steps = [
  {
    label: "01",
    title: "Install on premises",
    description:
      "Deploy the Koala desktop application on a single Windows workstation or GPU server inside your network.",
    visual: <Monitor className="size-10 text-primary" />,
  },
  {
    label: "02",
    title: "Connect your data",
    description:
      "Index manuals, drawings, spreadsheets and internal documents into the built-in local vector store.",
    visual: <Database className="size-10 text-primary" />,
  },
  {
    label: "03",
    title: "Describe the task",
    description:
      "Ask a question, drop a drawing, paste code, or upload an inspection report. Koala picks the right local model automatically.",
    visual: <ScanLine className="size-10 text-primary" />,
  },
  {
    label: "04",
    title: "Get a real output",
    description:
      "Receive a reviewed Word note, a verified code patch, or a calculation sheet with steps shown — without anything leaving the room.",
    visual: <CheckCircle2 className="size-10 text-primary" />,
  },
];

const taskCards = [
  {
    tag: "Document",
    title: "Read a scanned inspection report",
    description:
      "OCR extracts findings from a scanned PDF. Koala drafts an approval note and exports it as a Word file.",
    chips: ["OCR", "Summarization", ".docx"],
    image: "scan",
  },
  {
    tag: "Code",
    title: "Generate and sandbox-test a script",
    description:
      "Koala writes code, runs it in the local sandbox, debugs errors, and returns a verified patch.",
    chips: ["Code generation", "Sandbox", "Verification"],
    image: "code",
  },
  {
    tag: "Multimodal",
    title: "Understand a P&ID drawing",
    description:
      "A vision model reads a Piping & Instrument Diagram, identifies components and cross-references plant SOPs.",
    chips: ["Vision", "P&ID", "Knowledge base"],
    image: "drawing",
  },
];

const trustLogos = [
  { name: "Defence PSU", abbr: "PSU" },
  { name: "National Refinery", abbr: "NRL" },
  { name: "State Power Grid", abbr: "SPG" },
  { name: "Steel Authority", abbr: "SAIL" },
  { name: "Public Sector Bank", abbr: "PSB" },
];

function KoalaLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <span className="font-heading text-lg font-bold">K</span>
      </div>
      <span className="font-heading text-xl font-semibold tracking-tight">koala</span>
    </div>
  );
}

function PlaceGraphic({ variant }: { variant: string }) {
  const gradients: Record<string, string> = {
    scan: "from-teal-500/30 to-emerald-400/10",
    code: "from-indigo-500/30 to-violet-400/10",
    drawing: "from-amber-500/30 to-orange-400/10",
    hero: "from-teal-500/40 to-indigo-500/20",
  };
  const className =
    "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br " +
    (gradients[variant] || gradients.hero);
  return (
    <div className={className}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
        {variant === "scan" && <FileText className="size-12 text-teal-300" />}
        {variant === "code" && <Code2 className="size-12 text-indigo-300" />}
        {variant === "drawing" && <ScanLine className="size-12 text-amber-300" />}
        {variant === "hero" && <ShieldCheck className="size-14 text-teal-200" />}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <Aurora colorStops={["#0B3D3E", "#14B8A6", "#0F172A"]} amplitude={1.2} blend={0.6} />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background/30 via-background/80 to-background" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <KoalaLogo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" render={<a href="#download" />} className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button size="sm" render={<a href="/koala-setup.exe" download />}>
              Download
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedContent threshold={0.2}>
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                  <Lock className="size-3.5" />
                  <span>Desktop application · Windows · Air-gapped</span>
                </div>
                <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                  Agentic AI that never
                  <br />
                  <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                    leaves the building
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Koala is a self-hosted, on-premise AI workbench for refineries, PSUs, defence
                  manufacturing and government offices. Run open-weight multimodal LLMs on your own
                  GPU server — no cloud, no leaks, no external calls.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Magnet padding={60} magnetStrength={2.5}>
                    <Button size="lg" render={<a href="/koala-setup.exe" download />} className="h-12 px-6 text-base">
                      <Download className="mr-2 size-5" />
                      Download for Windows (.exe)
                    </Button>
                  </Magnet>
                  <Button variant="outline" size="lg" render={<a href="#how-it-works" />} className="h-12 px-6 text-base">
                    See how it works
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Version 0.8.0 · Windows 10/11 · 64-bit ·{" "}
                  <span className="text-primary">No installer telemetry</span>
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent className="mt-16 lg:mt-20" threshold={0.1} delay={0.1}>
              <div className="mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl">
                <PlaceGraphic variant="hero" />
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="border-y border-white/5 bg-background/50 py-10 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedContent threshold={0.3}>
              <p className="text-center text-sm font-medium text-muted-foreground">
                Built for organizations that cannot send data outside
              </p>
            </AnimatedContent>
            <AnimatedContent threshold={0.3} delay={0.05}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {trustLogos.map((logo) => (
                  <div
                    key={logo.abbr}
                    className="flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm font-semibold text-muted-foreground"
                  >
                    <Globe className="size-4 text-primary" />
                    <span>{logo.abbr}</span>
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section id="features" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedContent threshold={0.2}>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  One workbench, every capability you need
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Koala bundles model routing, agentic execution, multimodal vision and knowledge
                  grounding into a single desktop experience.
                </p>
              </div>
            </AnimatedContent>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((card, i) => (
                <AnimatedContent key={card.title} threshold={0.2} delay={i * 0.05}>
                  <GlareHover
                    width="100%"
                    height="100%"
                    background="transparent"
                    borderColor="rgba(255,255,255,0.08)"
                    borderRadius="1.25rem"
                    glareColor="#2dd4bf"
                    glareOpacity={0.18}
                    glareSize={180}
                    className="h-full min-h-[240px] bg-card/60 p-6 text-left backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card"
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <card.icon className="size-5.5" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{card.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </GlareHover>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="relative py-24 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedContent threshold={0.2}>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  From prompt to deliverable in four steps
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Koala plans the work, selects models, runs tools and produces files — entirely
                  inside your network.
                </p>
              </div>
            </AnimatedContent>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <AnimatedContent key={step.label} threshold={0.2} delay={i * 0.08}>
                  <div className="group relative rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card">
                    <span className="font-heading text-4xl font-bold text-white/10">{step.label}</span>
                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      {step.visual}
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        <section id="models" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedContent threshold={0.2}>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  The right model for every task type
                </h2>
                <p className="mt-4 text-muted-foreground">
                  New open-weight models can be plugged in without redesigning the system. Koala
                  routes requests based on capability, context and latency.
                </p>
              </div>
            </AnimatedContent>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {taskCards.map((task, i) => (
                <AnimatedContent key={task.title} threshold={0.15} delay={i * 0.08}>
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-card shadow-xl">
                    <div className="aspect-[4/3] w-full">
                      <PlaceGraphic variant={task.image} />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {task.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-4 font-heading text-xl font-semibold">{task.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {task.description}
                      </p>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedContent threshold={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-10 text-center shadow-2xl lg:p-16">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="mx-auto flex max-w-2xl flex-col items-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <Download className="size-8" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    Download Koala for Windows
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    A single installer. No cloud accounts, no telemetry, no trial gates. Get the
                    sovereign desktop workbench running on your premises today.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Magnet padding={70} magnetStrength={2.5}>
                      <Button size="lg" render={<a href="/koala-setup.exe" download />} className="h-12 px-8 text-base">
                        <Download className="mr-2 size-5" />
                        Download koala-setup.exe
                      </Button>
                    </Magnet>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                      Read the deployment guide
                    </Button>
                  </div>
                  <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-primary" />
                      Windows 10/11 64-bit
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-primary" />
                      Requires CUDA-capable GPU
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-primary" />
                      Offline-first installer
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-background/80 py-12 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            <div>
              <KoalaLogo />
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Sovereign, on-premise agentic AI for confidential industrial work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <h4 className="font-heading text-sm font-semibold">Product</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground">Features</a></li>
                  <li><a href="#models" className="hover:text-foreground">Models</a></li>
                  <li><a href="#download" className="hover:text-foreground">Download</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold">Resources</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                  <li><a href="#" className="hover:text-foreground">Deployment guide</a></li>
                  <li><a href="#" className="hover:text-foreground">Security whitepaper</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold">Legal</h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Koala. Built for sovereign AI.</p>
            <div className="flex items-center gap-2">
              <Server className="size-4 text-primary" />
              <span>All processing stays on your server.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
