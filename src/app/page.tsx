"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Cpu,
  FileText,
  Terminal,
  Eye,
  Database,
  WifiOff,
  ArrowRight,
  Download,
  CheckCircle2,
  ChevronDown,
  Network,
} from "lucide-react";

import fullWorking from "../../public/prototype_image/full_working.png";
import toolCalling from "../../public/prototype_image/tool_calling.png";
import auditLog from "../../public/prototype_image/audit_log.png";
import addModel1 from "../../public/prototype_image/add_model_1.png";
import addModel2 from "../../public/prototype_image/add_model_2.png";
import addModel3 from "../../public/prototype_image/add_model_3.png";
import manageModel from "../../public/prototype_image/manage_model.png";

const RELEASE_URL =
  "https://github.com/DurveshN/koala/releases/tag/v1.18.31-koala.1";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Agent", href: "#agent" },
  { label: "Models", href: "#models" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

const featureGrid = [
  {
    icon: WifiOff,
    title: "Air-gapped by design",
    description:
      "Runs on your own GPU server. No cloud calls, no external APIs — verified live by the built-in network monitor.",
  },
  {
    icon: Cpu,
    title: "Multi-model routing",
    description:
      "Connects to several open-weight models at once and routes each request to the one suited for it: coding, documents, vision, or general reasoning.",
  },
  {
    icon: Network,
    title: "Bring your own model",
    description:
      "Any OpenAI-compatible endpoint — Ollama, vLLM, LM Studio — can be connected in minutes. No redesign required to add a new one.",
  },
  {
    icon: Terminal,
    title: "Agentic execution",
    description:
      "Plans multi-step work and calls local tools: file read/write, sandboxed code execution, spreadsheet edits, document search.",
  },
  {
    icon: Eye,
    title: "Multimodal understanding",
    description:
      "On-device OCR and vision models read scanned PDFs, handwritten notes, P&ID drawings and photographs.",
  },
  {
    icon: FileText,
    title: "Real deliverables",
    description:
      "Produces approval notes, PPT/Word/Excel files and working code — not just chat replies.",
  },
  {
    icon: Database,
    title: "Local knowledge base",
    description:
      "Grounds answers in your organization's own manuals, SOPs and past correspondence through a local connector.",
  },
  {
    icon: ShieldCheck,
    title: "Full audit trail",
    description:
      "Every tool call and provider request is logged, with an always-on network monitor showing allowed vs. denied calls.",
  },
];

const modelSteps: { image: StaticImageData; alt: string; title: string; description: string }[] = [
  {
    image: addModel1,
    alt: "Connecting a local or private OpenAI-compatible model via a base URL",
    title: "1. Point at your endpoint",
    description:
      "Add a provider ID and base URL for any OpenAI-compatible server — here, a local Ollama instance on 127.0.0.1.",
  },
  {
    image: addModel2,
    alt: "Declaring model capabilities: context window, tool calling, streaming, structured output",
    title: "2. Declare its capabilities",
    description:
      "Set context window, max output, and what it supports: image input, tool calling, streaming, structured output, reasoning.",
  },
  {
    image: addModel3,
    alt: "Assigning preferred roles and priority to a connected model",
    title: "3. Assign roles & priority",
    description:
      "Tag it as general, coding, document or vision, set a priority, and it's live in the routing pool.",
  },
];

const faqItems = [
  {
    q: "Does any data ever leave the network?",
    a: "No outbound calls are made to external services. The audit log and live network monitor record every request — provider, endpoint, status and duration — so this is verifiable, not just claimed.",
  },
  {
    q: "What hardware do I need?",
    a: "A workstation or server with a mid-range GPU. Larger open-weight models (120B-class) need more VRAM; a smaller open-weight model works fine if that hardware isn't available.",
  },
  {
    q: "Which models can I use?",
    a: "Any model served through an OpenAI-compatible API — local Ollama, vLLM, LM Studio, or similar. New models connect without redesigning the workbench.",
  },
  {
    q: "How does model auto-selection work?",
    a: "Each connected model is tagged with preferred roles (general, coding, document, vision) and a priority. Requests route to the best match for the task automatically.",
  },
  {
    q: "Can it read scanned documents and drawings?",
    a: "Yes. On-device OCR and vision models handle scanned inspection reports, handwritten notes, P&ID drawings and photographs.",
  },
  {
    q: "What does it actually hand back?",
    a: "Real files: Word approval notes, PowerPoint decks, Excel calculations with steps shown, and code — generated and, where relevant, run in a local sandbox.",
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both duration-700 ease-out ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

function KoalaLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-heading text-base font-bold">K</span>
      </div>
      <span className="font-heading text-lg font-semibold tracking-tight">koala</span>
    </div>
  );
}

function Frame({
  src,
  alt,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-card shadow-sm ${className}`}
    >
      <Image src={src} alt={alt} className="h-auto w-full" placeholder="blur" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <KoalaLogo />
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              render={<a href={RELEASE_URL} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
            >
              <Download />
              Download
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Built for SIH 2026 · Sovereign On-Premise Agentic AI Workbench
                </div>
                <h1 className="font-heading text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Agentic AI that never leaves{" "}
                  <span className="text-primary">the building</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Koala is a self-hosted AI workbench for refineries, PSUs, defence
                  manufacturing and government offices. It runs open-weight multimodal
                  LLMs entirely on your own GPU server — no cloud, no external calls.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    render={<a href={RELEASE_URL} target="_blank" rel="noopener noreferrer" />}
                    nativeButton={false}
                    className="h-11 px-6 text-base"
                  >
                    <Download className="mr-1 size-5" />
                    Download for Windows (.exe)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    render={<a href="#agent" />}
                    nativeButton={false}
                    className="h-11 px-6 text-base"
                  >
                    See how it works
                    <ArrowRight className="ml-1 size-4" />
                  </Button>
                </div>
                <p className="mt-4 font-mono text-xs text-muted-foreground">
                  v1.18.31-koala.1 · Windows 10/11 64-bit · runs fully offline
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-16" delay={0.1}>
              <Frame
                src={fullWorking}
                alt="Koala agent chat completing a task: reading a project and generating a PPTX and DOCX deliverable"
                className="mx-auto max-w-3xl"
              />
            </Reveal>
          </div>
        </section>

        {/* Agentic execution */}
        <section id="agent" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="order-2 lg:order-1">
                  <span className="font-mono text-xs text-primary">Agentic execution</span>
                  <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    Plans, calls tools, and iterates until the job is done
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Koala doesn&apos;t just answer once and stop. Give it a task and it reads
                    the relevant files, decides which tools to call, and works through
                    multiple steps — visibly, in the same window.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Reads project files before making changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>
                        Calls local tools — <code className="font-mono text-xs">pptx_create</code>,{" "}
                        <code className="font-mono text-xs">docx_create</code>, code execution — in sequence
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Ends with real files, not just a chat reply</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="order-1 lg:order-2">
                <Frame
                  src={toolCalling}
                  alt="Koala agent mid-task, calling pptx_create and docx_create tools while thinking through a project overview"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Models */}
        <section id="models" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="font-mono text-xs text-primary">Multi-model routing</span>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Not locked to one model
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Connect any OpenAI-compatible endpoint, tell Koala what it&apos;s good at, and
                  it gets added to the routing pool — no redesign needed as new open-weight
                  models ship.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {modelSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div>
                    <Frame src={step.image} alt={step.alt} />
                    <h3 className="mt-4 font-heading text-base font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    One place to manage every connected model
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Every model you connect — local or private — shows up here. Toggle
                    which ones are exposed to the workbench without touching config files.
                  </p>
                </div>
                <Frame
                  src={manageModel}
                  alt="Manage models screen listing connected models such as Mistral 7B Instruct and Gemma with on/off toggles"
                  className="max-w-md lg:ml-auto"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Security / audit */}
        <section id="security" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <Frame
                  src={auditLog}
                  alt="Audit log network monitor showing every outbound request as allowed, with provider, policy rule, status and duration"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <span className="font-mono text-xs text-primary">Sovereignty, provable</span>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Nothing leaves this machine
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  A claim of &quot;air-gapped&quot; isn&apos;t enough — this is the proof. Every
                  provider request is logged with its endpoint, policy rule, status and
                  duration. The network monitor runs live, so you can watch traffic instead
                  of taking sovereignty on faith.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Live view of every allowed and denied call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Durable, redacted records of tool activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Separate tabs for network monitor and tool activity audit</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section id="features" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Everything the problem statement asked for
                </h2>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {featureGrid.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-primary">
                      <f.icon className="size-4.5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-border border-t border-border">
              {faqItems.map((item, i) => (
                <Reveal key={item.q} delay={(i % 4) * 0.04}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                      {item.q}
                      <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Download className="size-6" />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Download Koala for Windows
              </h2>
              <p className="mt-4 text-muted-foreground">
                Grab the latest release and run it on your own workstation or GPU server.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  size="lg"
                  render={<a href={RELEASE_URL} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  className="h-11 px-8 text-base"
                >
                  <Download className="mr-1 size-5" />
                  Download koala-setup.exe
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  Windows 10/11 64-bit
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  GPU recommended
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  Runs fully offline
                </li>
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <KoalaLogo />
          <p>Sovereign, on-premise agentic AI for confidential industrial work.</p>
        </div>
      </footer>
    </div>
  );
}
