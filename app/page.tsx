"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Header from "../components/ui/header";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  image?: string;
  visit: string;
};

const projects: Project[] = [
  {
    name: "AILVision",
    category: "AI CCTV Intelligence",
    problem: "Legacy surveillance systems show video, but not operational insight.",
    solution: "Built a real-time face recognition and alerting system for modern campus monitoring.",
    tech: ["Python", "OpenCV", "InsightFace", "FAISS", "Flask"],
    impact: "Turns CCTV streams into actionable identity, access, and safety signals.",
    image: "/Screenshot 2026-01-23 020926.png",
    visit: "https://github.com/mikilezen/AILVision",
  },
  {
    name: "Megent SDK",
    category: "Agent Security Layer",
    problem: "AI agents need a safety and policy layer before they can operate in real systems.",
    solution: "Shaped an SDK concept for securing agent behavior, decisions, and execution boundaries.",
    tech: ["SDK Design", "Agent Security", "Policy Checks", "Python"],
    impact: "Positions Megent as infrastructure for trustworthy agent workflows.",
    image: "/Frame.jpg",
    visit: "https://github.com/mikilezen",
  },
  {
    name: "repIt",
    category: "AI Classroom Representative Agent",
    problem: "Classroom coordination still depends on manual updates and scattered communication.",
    solution: "Built repIt as an AI classroom representative agent to organize messages, reminders, and coordination.",
    tech: ["Agentic AI", "Python", "Automation", "Workflow Design"],
    impact: "Gives classroom communication a reliable agent layer.",
    image: "/photo_2026-04-28_12-19-13.jpg",
    visit: "https://github.com/megents/repit",
  },
  {
    name: "Berta Translation Model",
    category: "Low-Resource NLP",
    problem: "Berta-English translation has limited high-quality machine learning support.",
    solution: "Trained a low-resource translation pipeline for Berta language preservation and access.",
    tech: ["PyTorch", "Transformers", "NLP", "Hugging Face"],
    impact: "Supports indigenous-language digitization and future NLP tooling.",
    image: "/photo_2026-01-23_02-11-59.jpg",
    visit: "https://huggingface.co/Mikile/Bertha-translation-encoder",
  },
  {
    name: "Mahber.social",
    category: "Community Platform",
    problem: "Community products need structure, identity, and flow, not just posts.",
    solution: "Built a platform for community connection and organized digital interaction.",
    tech: ["Next.js", "React", "TypeScript", "UI Systems"],
    impact: "Creates a product surface for community-led growth.",
    image: "/image.png",
    visit: "https://github.com/mikilezen",
  },
  {
    name: "LLM Chat Assistant",
    category: "Assistant System",
    problem: "Generic LLM demos are not enough for real user workflows.",
    solution: "Built a retrieval-aware assistant architecture for context-rich responses.",
    tech: ["LangChain", "RAG", "LLMs", "Python"],
    impact: "Moves LLM use from novelty to product utility.",
    image: "/Rectangle.jpg",
    visit: "https://github.com/mikilezen",
  },
  {
    name: "Heart Disease Detection System",
    category: "",
    problem: "",
    solution: "Built an AI-powered model to predict heart disease risk from patient medical data.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    impact: "",
    visit: "https://github.com/mikilezen/Heart-disease-detection",
  },
  {
    name: "Carbon Emission Car Prediction System",
    category: "",
    problem: "",
    solution: "Built a regression-based system that predicts CO2 emissions from vehicle attributes.",
    tech: ["Python", "Regression Models", "Pandas", "NumPy", "Data Visualization"],
    impact: "",
    visit: "https://github.com/mikilezen/CO2-Emission",
  },
  {
    name: "AI Recommendation System",
    category: "",
    problem: "",
    solution: "Implemented content-based and collaborative filtering for personalized recommendations.",
    tech: ["Python", "Machine Learning", "Filtering", "Recommendation Systems"],
    impact: "",
    visit: "https://mikile.tech",
  },
];

const skillGroups = [
  {
    title: "AI Systems",
    items: ["LLM products", "RAG", "Agent workflows", "Prompt design"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "Face recognition", "Detection", "Video intelligence"],
  },
  {
    title: "Product Web",
    items: ["Next.js", "React", "TypeScript", "Design systems"],
  },
  {
    title: "Infrastructure",
    items: ["Python", "APIs", "Automation", "Deployment"],
  },
];

const flatSkills = Array.from(new Set(skillGroups.flatMap((g) => g.items)));

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setSent(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });

    setLoading(false);

    if (response.ok) {
      setSent(true);
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0d0f] text-[#f4f1e8]">
      <Header />

      <section id="hero" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#8e8b82]">AI Engineer • Founder • Builder</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.04em] text-[#f4f1e8] sm:text-6xl lg:text-7xl">
              Mikiyas Zenebe
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#b7b2a6] sm:text-xl">
              Building infrastructure for AI systems and real-world intelligence. Focused on products that ship.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#b7b2a6]">
              <a href="https://github.com/mikilezen" target="_blank" rel="noreferrer" className="underline decoration-[#3a3a3f] underline-offset-4 hover:text-[#f4f1e8]">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mikiyas-zenebe-40b696388/" target="_blank" rel="noreferrer" className="underline decoration-[#3a3a3f] underline-offset-4 hover:text-[#f4f1e8]">
                LinkedIn
              </a>
              <a href="https://t.me/m_i_k_i_l_e" target="_blank" rel="noreferrer" className="underline decoration-[#3a3a3f] underline-offset-4 hover:text-[#f4f1e8]">
                Telegram
              </a>
            </div>

            <div className="flex flex-wrap gap-5 pt-2 text-sm">
              <a className="inline-flex items-center gap-2 text-[#f4f1e8] underline decoration-[#d27a57] underline-offset-4" href="#projects">
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="text-[#b7b2a6] underline decoration-[#3a3a3f] underline-offset-4" href="#contact">
                Contact
              </a>
            </div>

          </div>

          <div className="lg:justify-self-end">
            <Image
              src="/IMG_20260427_161851_257.jpg"
              alt="Mikiyas Zenebe portrait"
              width={900}
              height={1100}
              className="h-auto w-full max-w-[420px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#8e8b82]">Projects</p>
          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-[#f4f1e8] sm:text-5xl">Selected work</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {projects.map((project, idx) => (
            <article
              key={project.name}
              className={`spacey-4 ${idx >= projects.length - 3 ? "border-t border-[#2a2a2d] pt5" : ""}`}
            >
              {project.image ? (
                <div className="aspect overflow-hidden p-2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={400}
                    className="h-[200px] w-full object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-5">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#8e8b82]">{project.category}</p>
                <h3 className="font-serif text-2xl leading-tight text-[#f4f1e8]">{project.name}</h3>
                <div className="space-y-2 text-sm leading-7 text-[#c8c3b7]">
                  {project.image ? (
                    <p><span className="text-[#f4f1e8]">Problem:</span> {project.problem}</p>
                  ) : null}
                  <p><span className="text-[#f4f1e8]">Solution:</span> {project.solution}</p>
                  {project.image ? (
                    <p><span className="text-[#f4f1e8]">Impact:</span> {project.impact}</p>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="text-xs text-[#8e8b82]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={project.visit} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#f4f1e8] underline decoration-[#d27a57] underline-offset-4">
                    Visit
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={project.visit} target="_blank" rel="noreferrer" className="text-[#b7b2a6] underline decoration-[#3a3a3f] underline-offset-4">
                    Real source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#8e8b82]">Skills</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {flatSkills.map((s) => (
            <span key={s} className="inline-flex items-center rounded-full border border-[#2a2a2d] bg-[#141417] px-3 py-1 text-sm text-[#c8c3b7]">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="space-y-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#8e8b82]">Contact</p>
            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#f4f1e8]">Build something serious.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#b7b2a6]">
              Reach out for AI products, infrastructure work, or founder-level execution.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-[#8e8b82]" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                className="border border-[#2a2a2d] bg-[#141417] px-3 text-[#f4f1e8] shadow-none placeholder:text-[#6f6b64] focus-visible:border-[#d27a57] focus-visible:ring-0"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.35em] text-[#8e8b82]" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me what you're building."
                className="min-h-32 border border-[#2a2a2d] bg-[#141417] px-3 text-[#f4f1e8] shadow-none placeholder:text-[#6f6b64] focus-visible:border-[#d27a57] focus-visible:ring-0"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={sendMessage}
                disabled={loading}
                className="inline-flex items-center gap-2 text-sm text-[#f4f1e8] underline decoration-[#d27a57] underline-offset-4 disabled:opacity-50"
              >
                {loading ? "Sending..." : sent ? "Sent" : "Send message"}
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a href="mailto:mikilezen@gmail.com" className="text-sm text-[#b7b2a6] underline decoration-[#3a3a3f] underline-offset-4">
                Email directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}