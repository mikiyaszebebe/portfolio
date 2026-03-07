"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/th";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  ExternalLink,
  Brain,
  Code2,
  Cpu,
  Database,
  Layers,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "AILVision – Computer-Vision Drive Classroom Intelligence System",
    href: "https://github.com/mikilezen/AILVision",
    image: "/Screenshot 2026-01-23 020926.png",
    description:
      "An AI-powered security system modernising CCTV infrastructure at Arsi University with real-time face recognition, intelligent monitoring, and automated alerts.",
    tags: ["Python", "OpenCV", "InsightFace", "FAISS", "Flask"],
    images: [
      "/605210024_1289445506557047_5503121573023226745_n.jpg",
      "/606305704_1289445049890426_8809910366120216634_n.jpg",
    ],
  },
  {
    title: "Berta Language Machine Translation",
    href: "https://huggingface.co/Mikile/Bertha-translation-encoder",
    image: "/photo_2026-01-23_02-11-59.jpg",
    description:
      "Low-resource machine translation system between Berta (Bertha) and English using a custom Transformer architecture trained on 6,000+ parallel sentence pairs.",
    tags: ["PyTorch", "Hugging Face", "NLP", "Transformers", "Seq2Seq"],
  },
  {
    title: "Heart Disease Detection System",
    href: "",
    description:
      "AI-powered ML project predicting heart disease risk from patient clinical data, supporting early diagnosis and healthcare decision-making.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Carbon Emission Car Prediction",
    href: "",
    description:
      "Regression-based system predicting CO₂ emissions of vehicles from engine size, fuel type, and mileage, promoting eco-friendly choices.",
    tags: ["Python", "Regression Models", "Pandas", "Data Visualisation"],
  },
  {
    title: "AI Recommendation System",
    href: "",
    description:
      "Personalised recommendation engine implementing both content-based and collaborative filtering machine learning techniques.",
    tags: ["Python", "Scikit-learn", "ML", "Collaborative Filtering"],
  },
  {
    title: "LangChain-Based Chat Assistant",
    href: "",
    description:
      "Intelligent LLM-powered chatbot with custom knowledge-retrieval pipelines for accurate, context-aware responses.",
    tags: ["LangChain", "LLMs", "Python", "RAG"],
  },
];

const skills = [
  { name: "Python",       src: "https://img.icons8.com/color/48/python--v1.png" },
  { name: "PyTorch",      src: "https://img.icons8.com/fluency/48/pytorch.png" },
  { name: "Hugging Face", src: "https://img.icons8.com/fluency/48/hugging-face_app.png" },
  { name: "Next.js",      src: "https://img.icons8.com/color/48/nextjs.png" },
  { name: "OpenCV",       src: "/images (1).png" },
  { name: "Pandas",       src: "https://img.icons8.com/color/48/pandas.png" },
  { name: "Scikit-learn", src: "/images.webp" },
  { name: "NumPy",        src: "/images (1).webp" },
  { name: "R",            src: "https://img.icons8.com/fluency/48/r-project.png" },
];

const certImages = [
  "/certifications1.webp",
  "/certifications2.png",
  "/certifications3.jpg",
  "/certifications4.jpg",
  "/certifications5.jpg",
  "/certifications6.jpg",
];

const experienceItems = [
  {
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    desc: "Designed, trained, and deployed ML/DL models using Scikit-learn and PyTorch for prediction, classification, and recommendation systems.",
  },
  {
    icon: Database,
    title: "Big Data & Recommendation Engines",
    desc: "Built AI-driven recommendation engines and implemented large-scale data processing workflows using PySpark.",
  },
  {
    icon: Layers,
    title: "LLM-Powered Applications",
    desc: "Developed intelligent applications with LangChain, integrating custom pipelines, retrieval modules, and context-based reasoning for automation and chatbot development.",
  },
  {
    icon: Cpu,
    title: "Computer Vision",
    desc: "Implemented CV systems using OpenCV and PyTorch, including face recognition, emotion detection, and image-analysis solutions.",
  },
  {
    icon: Code2,
    title: "NLP & Audio Processing",
    desc: "Worked on NLP, audio processing, and translation projects leveraging Hugging Face Transformers for text understanding, generation, and multilingual applications.",
  },
  {
    icon: BarChart3,
    title: "End-to-End AI Projects",
    desc: "Contributed to multiple AI projects involving model design, dataset preparation, evaluation, and deployment.",
  },
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
      body: JSON.stringify({ email, message }),
    });
    setLoading(false);
    if (res.ok) {
      setDone(true);
      setEmail("");
      setMessage("");
    } else {
      alert("Failed to send! Check your Resend key.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <Header />
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden hero-gradient px-6 text-center">

        {/* Decorative orbs – z-index 0 so content sits above them */}
        <div
          style={{
            position: "absolute", top: "-6rem", left: "-6rem",
            width: "24rem", height: "24rem", borderRadius: "9999px",
            filter: "blur(80px)", opacity: 0.45, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "-4rem", right: "-4rem",
            width: "20rem", height: "20rem", borderRadius: "9999px",
            filter: "blur(80px)", opacity: 0.45, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute", top: "60%", left: "50%", transform: "translate(-50%,-50%)",
            width: "16rem", height: "16rem", borderRadius: "9999px",
            filter: "blur(80px)", opacity: 0.15, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
          }}
        />

        {/* Content – always above orbs */}
        <div className="relative flex flex-col items-center text-center" style={{ zIndex: 1 }}>

          {/* Avatar */}
          <div className="avatar-ring mb-6">
            <Image
              src="/-2147483648_-210083.jpg"
              alt="Mikiyas Zenebe"
              width={120}
              height={120}
              className="rounded-full block"
            />
          </div>

          <p className="text-sm font-medium tracking-[0.25em] uppercase text-white/60 mb-4">
            AI Engineer &amp; Python Developer
          </p>

          <h1 className="gradient-text text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6">
            Mikiyas Zenebe
          </h1>

          <p className="max-w-xl text-white/70 text-lg leading-relaxed mb-10">
            Building intelligent systems — from computer vision and NLP to LLM
            applications — one model at a time.
          </p>

          {/* Contact chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="tel:+251995641212"
              className="contact-chip text-white/80 border-white/20 hover:!border-white/40"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <Phone size={15} />
              +251 995 641 212
            </a>
            <a
              href="mailto:mikilezen@gmail.com"
              className="contact-chip text-white/80 border-white/20 hover:!border-white/40"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <Mail size={15} />
              mikilezen@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mb-14">
            <a href="https://www.linkedin.com/in/mikile" className="social-btn text-white/80 border-white/20">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://github.com/Mikilezen" className="social-btn text-white/80 border-white/20">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://t.me/m_i_k_i_l_e" className="social-btn text-white/80 border-white/20">
              <MessageCircle size={16} />
              Telegram
            </a>
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="animate-float flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
          >
            <span>Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────── */}
      <section id="about" className="w-full max-w-4xl px-6 py-24">
        <p className="section-heading mb-12">About</p>
        <div className="glass-card p-8 md:p-12 dark:bg-white/[0.03] bg-black/[0.03]">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Hi, I&apos;m <span className="font-semibold text-foreground">Miki</span>, an IT student and
            a self-taught AI enthusiast who loves building things with code. I&apos;m currently studying
            Information Technology at{" "}
            <span className="font-semibold text-foreground">Arsi University</span>, and in my free time,
            I teach myself Machine Learning, Deep Learning, and Computer Vision through online courses,
            documentation, and hands-on projects.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            I enjoy experimenting with AI — from face recognition and emotion detection to building
            chatbots, recommendation systems, and language tools. I believe{" "}
            <span className="italic">learning by doing</span> is the best way to grow, and I&apos;m
            always working on something new.
          </p>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground">
            My goal is to become a strong AI engineer who creates meaningful and practical solutions
            for real-world challenges.
          </p>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────── */}
      <section id="experience" className="w-full max-w-4xl px-6 pb-24">
        <p className="section-heading mb-12">Experience</p>
        <div className="space-y-8">
          {experienceItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="timeline-item">
              <div className="flex items-start gap-4 glass-card p-6 dark:bg-white/[0.03] bg-black/[0.03]">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7c3aed22, #0ea5e922)" }}
                >
                  <Icon size={20} className="text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────── */}
      <section id="projects" className="w-full max-w-5xl px-6 pb-24">
        <p className="section-heading mb-12">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="project-card bg-card flex flex-col">
              {p.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-base leading-snug">{p.title}</h3>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-muted-foreground hover:text-violet-500 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-violet-500/30 text-violet-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.images && (
                  <div className="flex gap-3 mt-4">
                    {p.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        width={100}
                        height={100}
                        className="rounded-xl object-cover"
                        alt={`${p.title} screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────── */}
      <section className="w-full max-w-4xl px-6 pb-24">
        <p className="section-heading mb-12">Skills</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <Image
                src={skill.src}
                width={40}
                height={40}
                alt={skill.name}
                className="object-contain"
              />
              <span className="text-xs font-medium text-muted-foreground text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications ──────────────────────────────────────────── */}
      <section id="certifications" className="w-full max-w-5xl px-6 pb-24">
        <p className="section-heading mb-4">Certifications</p>
        <p className="text-sm text-muted-foreground mb-10">
          A collection of certifications from Udemy, Kaggle, and Hugging Face covering Machine
          Learning, Python, TensorFlow, NLP, LLMs, and AI engineering.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {certImages.map((src, i) => (
            <div key={i} className="cert-img overflow-hidden">
              <Image
                src={src}
                alt={`Certification ${i + 1}`}
                width={400}
                height={280}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contactus" className="w-full max-w-2xl px-6 pb-28">
        <p className="section-heading mb-4">Contact</p>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I&apos;m always excited to connect with fellow AI enthusiasts, collaborate on innovative
          projects, or discuss the latest trends in technology. Whether you have a question, an idea,
          or just want to say hello — feel free to reach out!
        </p>
        <div className="glass-card dark:bg-white/[0.03] bg-black/[0.03] p-8 space-y-4">
          <Input
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            className="h-40 resize-none"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            className="w-full"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #0ea5e9)",
              border: "none",
              color: "white",
            }}
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "Sending…" : done ? "✓ Sent!" : "Send Message"}
          </Button>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="w-full border-t border-border py-6 text-center text-sm text-muted-foreground">
        © 2026 Mikiyas Zenebe · Built with Next.js
      </footer>
    </main>
  );
}
