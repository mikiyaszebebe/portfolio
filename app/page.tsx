"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { ModeToggle } from "@/components/th";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const profilePhoto = "/-2147483648_-210083.jpg";

const skills = [
  "Python",
  "PyTorch",
  "fastai",
  "Flutter",
  "Transformers",
  "LangChain",
  "OpenCV",
  "FAISS",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Flask",
  "FastAPI",
  "Next.js",
  "Git/GitHub",
  "Data Preprocessing",
  "Model Evaluation",
  "Prompt Engineering",
];

const projects = [
  {
    title: "AILVision — Smart CCTV Intelligence",
    image: "/Screenshot 2026-01-23 020926.png",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Built a real-time face recognition and monitoring pipeline for campus CCTV. Added detection logs, unknown-person alerts, and scalable multi-camera design.",
    stack: "Python · OpenCV · InsightFace · FAISS · Flask",
  },
  {
    title: "Berta ↔ English Neural Translation",
    image: "/photo_2026-01-23_02-11-59.jpg",
    github: "https://github.com/mikilezen/Bertha",
    description:
      "Developed a low-resource MT system on 6,000+ parallel sentence pairs for language preservation and multilingual accessibility.",
    stack: "PyTorch · Transformers · Seq2Seq · Attention",
  },
  {
    title: "RAG Chat Assistant",
    image: "/171597222.png",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Implemented a retrieval-augmented chatbot with custom context pipelines for domain-specific Q&A and workflow automation.",
    stack: "LangChain · Vector Search · LLM APIs",
  },
  {
    title: "Heart Disease Risk Prediction",
    image: "/images.webp",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Created an ML classification system with feature engineering and evaluation to support early health risk screening.",
    stack: "Scikit-learn · Pandas · Matplotlib",
  },
  {
    title: "Carbon Emission Prediction",
    image: "/images (1).webp",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Designed regression models to estimate vehicle CO₂ emissions from engine and fuel features for sustainability analysis.",
    stack: "Python · Regression Models · Data Visualization",
  },
  {
    title: "AI Recommendation Engine",
    image: "/171597222 (2).png",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Built content-based and collaborative recommendation pipelines for personalized user suggestions.",
    stack: "Python · Similarity Models · Ranking Logic",
  },
  {
    title: "Classroom Representative AI Agent",
    image: "/605210024_1289445506557047_5503121573023226745_n.jpg",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Built an AI agent to assist classroom representative workflows, including announcements, reminder generation, and student query support.",
    stack: "Python · LLM APIs · Workflow Automation",
  },
  {
    title: "Africa-First LLM with Novel Retrieval Algorithm",
    image: "/606305704_1289445049890426_8809910366120216634_n.jpg",
    github: "https://github.com/mikiyaszebebe",
    description:
      "Building an Africa-first large language model workflow with a custom retrieval-and-ranking algorithm to improve relevance for local languages, context, and regional knowledge.",
    stack: "Python · Transformers · Custom Retrieval Algorithm · RAG",
  },
];

const researchPapers = [
  {
    title: "Low-Resource Machine Translation for Berta Language (Working Paper)",
    venue: "Under preparation",
    note: "Focus: data curation, transformer baselines, and evaluation in low-resource settings.",
  },
  {
    title: "Real-Time Classroom Vision Intelligence with Face Embeddings",
    venue: "Project research write-up",
    note: "Focus: robust identification, retrieval speed, and practical deployment architecture.",
  },
];

const certificateImages = [
  "/certifications1.webp",
  "/certifications2.png",
  "/certifications3.jpg",
  "/certifications4.jpg",
  "/certifications5.jpg",
  "/certifications6.jpg",
];

const achievements = [
  "Earned multiple AI/ML certificates across deep learning, NLP, and practical model deployment.",
  "Presented AI projects and system architecture in academic and technical settings.",
  "Participated in ICPC/competitive programming and strengthened advanced problem-solving skills.",
  "Working on an Africa-first LLM project with a new algorithmic retrieval approach.",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    setDone(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setDone(true);
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-6 md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-chart-2/15 blur-3xl" />
      </div>
      <header className="sticky top-0 z-20 mb-8 flex items-center justify-between rounded-xl border bg-background/80 px-4 py-3 backdrop-blur">
        <a href="#top" className="font-semibold tracking-tight">
          mikile.tech
        </a>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </a>
          <a href="#research" className="text-muted-foreground hover:text-foreground">
            Research
          </a>
          <a href="#achievements" className="text-muted-foreground hover:text-foreground">
            Achievements
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
        <ModeToggle />
      </header>

      <section id="top" className="grid gap-8 rounded-2xl border bg-card/60 p-6 shadow-sm md:grid-cols-[auto_1fr] md:p-10">
        <Image
          src={profilePhoto}
          alt="Mikiyas Zenebe"
          width={160}
          height={160}
          className="h-28 w-28 rounded-2xl object-cover md:h-36 md:w-36"
          priority
        />
        <div className="space-y-4">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
            <Brain className="size-4" />
            AI Engineer · Python Developer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Mikiyas Zenebe</h1>
          <p className="max-w-3xl text-muted-foreground md:text-lg">
            I build practical AI systems in computer vision, NLP, and LLM applications — from research ideas to usable products.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:mikilezen@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <a
              href="tel:+251995641212"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              <Phone className="size-4" />
              +251995641212
            </a>
            <a
              href="https://www.linkedin.com/in/mikile"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
            >
              <ArrowUpRight className="size-4" />
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/mikile" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <a href="https://github.com/mikiyaszebebe" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href="https://t.me/m_i_k_i_l_e" aria-label="Telegram" className="text-muted-foreground hover:text-foreground">
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mt-14 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About</h2>
        <p className="max-w-4xl leading-7 text-muted-foreground">
          I am an Information Technology student at Arsi University and a self-taught AI engineer. I enjoy solving real
          problems through machine learning systems, multilingual AI, and production-minded software engineering.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border p-5">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
              <BriefcaseBusiness className="size-4" />
              Experience Focus
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              End-to-end ML projects: data curation, training, evaluation, and deployment with clear product outcomes.
            </p>
          </article>
          <article className="rounded-xl border p-5">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
              <GraduationCap className="size-4" />
              Education
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              Information Technology, Arsi University. Continuous learning through research papers, competitions, and practical builds.
            </p>
          </article>
        </div>
      </section>

      <section id="projects" className="mt-14 space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border bg-card/50 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={420}
                className="mb-4 h-44 w-full rounded-lg border object-cover"
              />
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.description}</p>
              <p className="mt-3 text-sm font-medium">{project.stack}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Github className="size-4" />
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="mt-14 space-y-5">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight md:text-3xl">
          <BookOpenText className="size-6" />
          Research & Papers
        </h2>
        <div className="grid gap-4">
          {researchPapers.map((paper) => (
            <article key={paper.title} className="rounded-xl border p-5">
              <h3 className="font-semibold tracking-tight">{paper.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{paper.venue}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{paper.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="mt-14 space-y-5 rounded-2xl border bg-card/50 p-6 md:p-8">
        <h2 className="inline-flex items-center gap-2 text-2xl font-semibold tracking-tight md:text-3xl">
          <Sparkles className="size-6" />
          Highlights
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground md:text-base">
          {achievements.map((item) => (
            <p key={item} className="inline-flex items-start gap-2 leading-7">
              <BadgeCheck className="mt-1 size-4 shrink-0 text-primary" />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-6 space-y-4 rounded-2xl border p-5">
        <h3 className="text-lg font-semibold tracking-tight">Certificate Gallery</h3>
        <p className="text-sm text-muted-foreground">
          Selected certificate proofs from completed AI, ML, NLP, and development learning tracks.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certificateImages.map((certificatePath, index) => (
            <Image
              key={certificatePath}
              src={certificatePath}
              alt={`Certificate ${index + 1}`}
              width={500}
              height={320}
              className="h-40 w-full rounded-xl border object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border p-5 text-sm text-muted-foreground">
        <p className="inline-flex items-start gap-2 leading-7">
          <BadgeCheck className="mt-1 size-4 shrink-0 text-primary" />
          I have certificates, project presentation records, and ICPC participation details ready to share during screening.
        </p>
      </section>

      <section id="skills" className="mt-14 space-y-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border px-3 py-1 text-sm text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-14 space-y-4 rounded-2xl border p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
        <p className="max-w-3xl text-muted-foreground">
          I am open to AI engineer internships, junior AI roles, and collaboration opportunities.
        </p>
        <Input
          className="max-w-2xl"
          placeholder="Your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Textarea
          className="max-w-2xl"
          placeholder="Your message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Button onClick={sendMessage} disabled={loading || !email || !message}>
          {loading ? "Sending..." : done ? "Sent!" : "Send Message"}
        </Button>
      </section>

      <footer className="mt-12 text-center text-sm text-muted-foreground">©2026 Mikiyas Zenebe · AI Engineer</footer>
    </main>
  );
}
