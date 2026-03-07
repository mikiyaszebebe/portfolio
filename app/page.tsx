"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";
import { ArrowDownWideNarrow, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { ModeToggle } from "@/components/th";
import { Input } from "@/components/ui/input";

// Hook: fade-in animation when element enters viewport
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

// Hook: typing animation
function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return words[wordIdx].slice(0, charIdx);
}

// Fade-in section wrapper
function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const typedRole = useTypingEffect([
    "Self-taught AI Engineer",
    "Python Developer",
    "ML & Deep Learning Enthusiast",
    "Computer Vision Builder",
  ]);

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
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="bg"></div>
      <Header />
      <div className="fixed top-[18px] right-16 z-50 md:right-5">
        <ModeToggle />
      </div>

      {/* Hero section */}
      <div className="flex flex-col items-center mt-24 mb-4 text-center px-4">
        <Image
          src="/-2147483648_-210083.jpg"
          alt="Mikiyas Zenebe"
          width={110}
          height={110}
          className="rounded-full mb-4 ring-4 ring-primary/20"
        />
        <h1 className="text-[36px] sm:text-[56px] lg:text-[80px] font-bold leading-tight">
          Mikiyas Zenebe
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-muted-foreground min-h-[2rem]">
          <span>{typedRole}</span>
          <span className="animate-pulse">|</span>
        </p>

        {/* Contact links */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 flex-wrap justify-center">
          <a
            href="tel:+251995641212"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm">+251995641212</span>
          </a>
          <a
            href="mailto:mikilezen@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
          >
            <Mail size={16} />
            <span className="text-sm">mikilezen@gmail.com</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-row gap-5 mt-4">
          <a
            href="https://www.linkedin.com/in/mikile"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/Mikilezen"
            className="hover:text-gray-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://t.me/m_i_k_i_l_e"
            className="hover:text-blue-400 transition-colors"
            aria-label="Telegram"
          >
            <MessageCircle size={22} />
          </a>
        </div>

        <p className="mt-6 flex flex-col items-center text-muted-foreground text-sm">
          scroll down
          <ArrowDownWideNarrow className="mt-1 animate-bounce" />
        </p>
      </div>

      {/* About */}
      <FadeSection className="w-full flex flex-col items-center">
        <p className="mt-8 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold" id="about">
          ABOUT
        </p>
        <p className="w-full sm:w-[90%] lg:w-[80%] text-[15px] leading-7 text-center px-4">
          Hi, I&apos;m Miki, an IT student and a self-taught AI enthusiast who loves building things
          with code. I&apos;m currently studying Information Technology at Arsi University, and in my
          free time, I teach myself Machine Learning, Deep Learning, and Computer Vision through
          online courses, documentation, and hands-on projects.
          <br />
          <br />
          I enjoy experimenting with AI &mdash; from face recognition and emotion detection to
          building chatbots, recommendation systems, and language tools. My goal is to become a
          strong AI engineer who creates meaningful and practical solutions for real-world challenges.
        </p>
      </FadeSection>

      {/* Experience */}
      <FadeSection className="w-full flex flex-col items-center">
        <p
          className="mt-8 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold"
          id="experience"
        >
          EXPERIENCE
        </p>
        <div className="w-full sm:w-[90%] lg:w-[80%] text-[15px] leading-7 px-4 space-y-3">
          <p className="font-semibold text-lg">AI Engineer &amp; Machine Learning Developer</p>
          <p>
            Designed, trained, and deployed machine learning and deep learning models using
            scikit-learn and PyTorch for prediction, classification, and recommendation systems.
          </p>
          <p>
            Built AI-driven recommendation engines and implemented large-scale data processing
            workflows using PySpark to improve performance and optimization.
          </p>
          <p>
            Developed intelligent LLM-powered applications with LangChain, integrating custom
            pipelines, retrieval modules, and context-based reasoning for automation and chatbot
            development.
          </p>
          <p>
            Implemented computer vision systems using OpenCV and PyTorch, including face
            recognition, emotion detection, and various image-analysis solutions.
          </p>
          <p>
            Worked on NLP, audio processing, and translation projects, leveraging Hugging Face
            Transformers to build and fine-tune models for text understanding, generation, and
            multilingual applications.
          </p>
        </div>
      </FadeSection>

      {/* Projects */}
      <FadeSection className="w-full flex flex-col items-center">
        <p
          className="mt-8 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold"
          id="projects"
        >
          PROJECTS
        </p>
        <div className="w-full sm:w-[90%] lg:w-[80%] text-[15px] leading-7 px-4 space-y-8">
          {/* Project 1 */}
          <div>
            <a
              className="text-xl sm:text-2xl font-bold hover:text-blue-500 transition-colors"
              href="https://github.com/mikilezen/AILVision"
            >
              AILVision &mdash; Computer-vision Driven Classroom Intelligence System
            </a>
            <div className="mt-3 w-full overflow-hidden rounded-xl">
              <Image
                src="/Screenshot 2026-01-23 020926.png"
                alt="AILVision screenshot"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="mt-2">
              AILVision is an AI-powered security system integrating real-time face recognition,
              intelligent monitoring, and automated alerts to modernize CCTV infrastructure at Arsi
              University.
            </p>
            <p className="font-bold mt-2">Key Features</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>
                <strong>Real-Time Face Recognition</strong> &mdash; deep learning facial embeddings
                with FAISS vector search.
              </li>
              <li>
                <strong>Automated CCTV Analysis</strong> &mdash; converts raw footage into
                actionable insights.
              </li>
              <li>
                <strong>Live Monitoring Dashboard</strong> &mdash; detection logs and system
                analytics.
              </li>
              <li>
                <strong>Scalable Architecture</strong> &mdash; Python + Flask backend, supports
                multiple cameras.
              </li>
            </ul>
            <p className="font-bold mt-2">Tech Stack</p>
            <p>Python, OpenCV, face_recognition, InsightFace, Flask, FAISS, NumPy, Pandas</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Image
                src="/605210024_1289445506557047_5503121573023226745_n.jpg"
                width={200}
                height={200}
                className="rounded-2xl w-full sm:w-auto"
                alt="AILVision image 1"
              />
              <Image
                src="/606305704_1289445049890426_8809910366120216634_n.jpg"
                width={200}
                height={200}
                className="rounded-2xl w-full sm:w-auto"
                alt="AILVision image 2"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div>
            <a
              className="text-xl sm:text-2xl font-bold hover:text-blue-500 transition-colors"
              href=""
            >
              Berta Language Machine Translation
            </a>
            <span className="ml-2 text-sm text-muted-foreground">
              (
              <a
                href="https://en.wikipedia.org/wiki/Berta_languages"
                className="underline hover:text-blue-500"
              >
                Wikipedia
              </a>
              )
            </span>
            <div className="mt-3 w-full overflow-hidden rounded-xl">
              <Image
                src="/photo_2026-01-23_02-11-59.jpg"
                alt="Berta Translation"
                width={600}
                height={300}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="mt-2">
              A low-resource machine translation system for Berta–English. Collected 6,000+ parallel
              sentence pairs and trained a Transformer-based Seq2Seq model using PyTorch and Hugging
              Face Transformers.
            </p>
            <p className="font-bold mt-2">Deployment</p>
            <p>
              Open-source on Hugging Face:{" "}
              <a
                href="https://huggingface.co/Mikile/Bertha-translation-encoder"
                className="text-blue-500 hover:underline break-all"
              >
                https://huggingface.co/Mikile/Bertha-translation-encoder
              </a>
            </p>
          </div>

          {/* Projects 3–6: responsive card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
              <p className="font-bold text-lg">Heart Disease Detection System</p>
              <p className="mt-1">
                Predicts heart disease risk from patient medical data using ML classification models.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Python · Scikit-learn · Pandas · NumPy · Matplotlib
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
              <p className="font-bold text-lg">Carbon Emission Car Prediction</p>
              <p className="mt-1">
                Predicts CO&#8322; emissions of cars using regression models and vehicle
                specifications.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Python · Regression Models · Pandas · NumPy
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
              <p className="font-bold text-lg">AI Recommendation System</p>
              <p className="mt-1">
                Content-based and collaborative filtering for personalized recommendations.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Python · Scikit-learn · Collaborative Filtering
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border hover:shadow-md transition-shadow">
              <p className="font-bold text-lg">LangChain-Based Chat Assistant</p>
              <p className="mt-1">
                Intelligent chatbot with custom knowledge-retrieval pipelines for context-aware
                responses.
              </p>
              <p className="text-sm text-muted-foreground mt-2">Python · LangChain · LLMs · RAG</p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* Skills */}
      <FadeSection className="w-full flex flex-col items-center">
        <p className="mt-8 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold">SKILLS</p>
        <div className="flex flex-wrap justify-center gap-6 mb-10 px-4">
          {[
            { src: "https://img.icons8.com/color/48/python--v1.png", label: "Python" },
            { src: "https://img.icons8.com/fluency/48/pytorch.png", label: "PyTorch" },
            {
              src: "https://img.icons8.com/fluency/48/hugging-face_app.png",
              label: "Hugging Face",
            },
            { src: "https://img.icons8.com/color/48/nextjs.png", label: "Next.js" },
            { src: "/images (1).png", label: "OpenCV" },
            { src: "https://img.icons8.com/color/48/pandas.png", label: "Pandas" },
            { src: "/images.webp", label: "Scikit-learn" },
            { src: "/images (1).webp", label: "TensorFlow" },
            { src: "https://img.icons8.com/fluency/48/r-project.png", label: "R" },
          ].map(({ src, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 group">
              <Image
                src={src}
                width={48}
                height={48}
                alt={label}
                className="transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Certifications */}
      <FadeSection className="w-full flex flex-col items-center">
        <p className="mt-8 mb-4 text-2xl sm:text-3xl font-semibold" id="certifications">
          CERTIFICATIONS
        </p>
        <div className="w-full max-w-sm px-4">
          <Image
            src="/Group.png"
            width={300}
            height={300}
            alt="Certifications"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </FadeSection>

      {/* Contact */}
      <FadeSection className="w-full flex flex-col items-center">
        <p className="mt-8 mb-4 text-2xl sm:text-3xl font-semibold" id="contactus">
          CONTACT US
        </p>
        <p className="w-full sm:w-[80%] text-[16px] text-center px-4 mb-4">
          I&apos;m always excited to connect with fellow AI enthusiasts, collaborate on innovative
          projects, or discuss the latest trends in technology. Feel free to reach out!
        </p>
        <Input
          className="w-[90%] sm:w-[80%] mt-2 mb-4"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          className="w-[90%] sm:w-[80%] h-40 mb-6"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="mb-16 px-8" onClick={sendMessage} disabled={loading}>
          {loading ? "Sending..." : done ? "✓ Sent!" : "Send Message"}
        </Button>
      </FadeSection>

      <div className="w-full text-center py-4 text-sm text-muted-foreground border-t border-border">
        ©2026 Mikiyas Zenebe
      </div>
    </main>
  );
}
