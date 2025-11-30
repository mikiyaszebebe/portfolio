"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/ui/header";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/button";
// import Button from "../components/ui/button";
// import { Images } from "lucide-react";
import Images from 'next/image';
import { ArrowDownWideNarrow, Github, Linkedin, Mail, MessageCircle, Phone, } from "lucide-react";
import { ModeToggle } from "@/components/th";
import { Input } from "@/components/ui/input";
// import Telegramicon
// import App from "../components/app";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='bg'></div>
      {/* <App/> */}
      <Header/>
      <Images 
      src='/171597222 (2).png'
      alt=""
      width={90}
      height={90}
      className="rounded-full w-45"
      />
      {/* <Email/> */}
      <h1 className="lg:text-[80px] md:text-[60px] text-[40px]">Mikiyas Zenebe Bekele</h1>
      <div className='fixed top-5 right-5 z-9'><ModeToggle/></div>
      <p className='m-3'>Self-taught AI Engineer and Python Devloper | Machine Learning </p>
      <div className="mt-3 lg:flex items-center gap-4 ">
      <a href="tel:+251995641212" className='bg-gray flex align-center p-2 rounded-lg gap-2'>
      <Phone/>
      +251995641212
      </a>
      {/* <a href=""> */}
      <a href="mailto:mikilezen@gmail.com" className='bg-gray flex align-center p-2 rounded-lg gap-2'>
      <Mail/>
      mikilezen@gmail.com
      </a>
        </div>
        <br />
      <div className="flex flex-row gap-4">
      <a href="https://www.linkedin.com/in/mikile">
      <Linkedin/>
      </a>
      <a href="https://github.com/">
      <Github/>
      </a>
      <a href="https://t.me/m_i_k_i_l_e">
      <MessageCircle/>
      </a>
      </div>
      <p className="mt-3 flex flex-col items-center text-center">
      scroll down
      <ArrowDownWideNarrow/>
      </p>

      <p className='m-9 text-6xl' id="about">ABOUT</p>
      <p className='w-[100%] md:w-[100%] lg:w-[80%] text-[15px]'>Hi, I’m Miki, an IT student and a self-taught AI enthusiast who loves building things with code. I’m currently studying Information Technology at Arsi University, and in my free time, I teach myself Machine Learning, Deep Learning, and Computer Vision through online courses, documentation, and hands-on projects.

        I enjoy experimenting with AI from face recognition and emotion detection to building chatbots, recommendation systems, and language tools. Most of what I know comes from curiosity, consistency, and solving real problems through small personal projects.

        I believe learning by doing is the best way to grow, and I’m always working on something new: improving my skills, exploring new frameworks, and building projects that help people or make tech more accessible.

        My goal is to become a strong AI engineer who creates meaningful and practical solutions for real-world challenges.</p>
      <p className='m-9 text-6xl' id="experience">EXPERIENCE</p>
      <p className='w-[100%] md:w-[100%] lg:w-[80%] text[15px]'>
AI Engineer & Machine Learning Developer

Designed, trained, and deployed machine learning and deep learning models using scikit-learn and PyTorch for prediction, classification, and recommendation systems.

Built AI-driven recommendation engines and implemented large-scale data processing workflows using PySpark to improve performance and optimization.

Developed intelligent LLM-powered applications with LangChain, integrating custom pipelines, retrieval modules, and context-based reasoning for automation and chatbot development.

Implemented computer vision systems using OpenCV and PyTorch, including face recognition, emotion detection, and various image-analysis solutions.

Worked on NLP, audio processing, and translation projects, leveraging Hugging Face Transformers to build and fine-tune models for text understanding, generation, and multilingual applications.

Contributed to multiple AI projects involving model design, dataset preparation, evaluation, and deployment.</p>
      <br />
      <p className='m-9 text-6xl' id="projects">PROJECTS</p>
      <p className='w-[100%] md:w-[100%] lg:w-[80%] text-[15px]'>
<a className='text-2xl font-bold' href="">
  AILVision - AI-Powered CCTV & Face Recognition System
  </a>
  <br />
  AILVision is an AI-powered security system I am developing to modernize the existing CCTV infrastructure at Arsi University.
The system integrates real-time face recognition, intelligent monitoring, and automated alerts, transforming traditional cameras into a smart AI surveillance platform.
<br />
<b>Key Features</b>
<br />
Real-Time Face Recognition
Uses deep learning–based facial embeddings and FAISS vector search to identify people quickly and accurately.

Automated CCTV Analysis
Converts raw CCTV footage into meaningful insights using computer vision models.

Attendance & Access Tracking
Can be extended to track student/employee attendance, restricted-area access, and visitor logs.
<br />
Live Monitoring Dashboard
Displays recognized individuals, unknown visitors, detection logs, and system analytics.
<br />
Scalable Architecture
Designed to work across multiple CCTV cameras with a Python + Flask backend and optional cloud deployment.
<br />
<b>
Tech Stack
</b>
<br />
Python, OpenCV, face_recognition, InsightFace
Flask, FAISS, NumPy, Pandas
<br /><a className='text-2xl font-bold' href="">
Berta Language Machine Translation</a>
<br />
<a href="https://en.wikipedia.org/wiki/Berta_languages">See on Wikipedia</a><br />
This project focuses on building a low-resource machine translation system that translates between Berta (Bertha) and English. The goal is to contribute to the digitization and preservation of Ethiopian indigenous languages using modern Natural Language Processing (NLP) techniques.
  <br />
<p className='font-bold text-xl'>
Data Collection & Preparation
</p>
<br />
Collected, cleaned, and aligned 6,000+ parallel Berta–English sentence pairs.

Performed normalization, tokenization, and preprocessing to ensure high-quality training data.

Addressed challenges of low-resource languages such as limited corpora, irregular spellings, and morphological variation.

<p className='font-bold text-xl'>
  <br />
Model Architecture
</p>
<br />
Built a Seq2Seq (Sequence-to-Sequence) neural architecture with:

Custom Encoder–Decoder structure

Attention mechanism for improved contextual alignment

Experimented with multiple architectures and finalized a Transformer-based model optimized for low-resource scenarios.

Achieved meaningful translation results despite the low-resource environment, demonstrating feasibility for underrepresented languages.
Trained the model using PyTorch and Hugging Face Transformers.
<p className='font-bold text-xl'>
  <br />
Deployment</p>
<br />

The model is published and open-source on Hugging Face:

<br />
<b>Model Repository: </b>
<a href='https://huggingface.co/Mikile/Bertha-translation-encoder'>https://huggingface.co/Mikile/Bertha-translation-encoder</a>
<br />
This allows researchers, linguists, and developers to use or fine-tune the model for further work in Berta NLP.

Goal & Impact

This project’s mission is to:

Preserve and promote Berta language through modern machine learning

Provide a starting point for future Ethiopian indigenous language NLP research

Support tools like translation systems, chatbots, digital dictionaries, and educational apps

Reduce the technological gap for underrepresented languages
<br />
<a className='text-2xl font-bold' href="">
AI Recommendation System
</a>
<br />
Implemented both content-based and collaborative filtering methods.

Designed systems to deliver personalized recommendations using machine learning techniques.
<br />

<a className='text-2xl font-bold' href="">
LangChain-Based Chat Assistant
</a>
<br />
Built an intelligent chatbot powered by LangChain and LLMs.

Integrated custom knowledge-retrieval pipelines for more accurate and context-aware responses.</p>
<p className='m-9 text-6xl'>SKILLS</p>
<div className='flex flex-row gap-8 mb-20'>

<Image 
src='https://img.icons8.com/color/48/python--v1.png'
width={50}
height={50}
alt="img"
/>
<Image 
src='https://img.icons8.com/fluency/48/pytorch.png'
width={50}
height={50}
alt="img"
/>
<Image 
src='https://img.icons8.com/fluency/48/hugging-face_app.png'
width={50}
height={50}
alt="img"
/>
<Image 
src='https://img.icons8.com/color/48/nextjs.png'
width={50}
height={50}
alt="img"
/>
<Image 
src='/images (1).png'
width={50}
height={50}
alt="img"
/>
<Image 
src='https://img.icons8.com/color/48/pandas.png'
width={50}
height={50}
alt="img"
/>
</div>
<div className="flex flex-row gap-8 mb-20">
<Image 
src='/images.webp'
width={50}
height={50}
alt="img"
/>
<Image 
src='/images (1).webp'
width={50}
height={50}
alt="img"
/>
<Image 
src='https://img.icons8.com/fluency/48/r-project.png'
width={50}
height={50}
alt="img"
/>

</div>
<p className='m-9 text-3xl' id="certifications">CERTIFICATIONS</p>
<div className='flejpg'>
  <Image 
src='/Group.png'
width={300}
height={300}
alt="img"
/>
</div>
<p className='m-9 text-3xl' id='contactus'>CONTACT US</p>
<p className='w-[80%] text-[18px]'>I’m always excited to connect with fellow AI enthusiasts, collaborate on innovative projects, or discuss the latest trends in technology. Whether you have a question, an idea, or just want to say hello, feel free to reach out!</p>
    <Input className="w-[80%] mt-5 mb-6" placeholder="Your email address"        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
    <Textarea className="w-[80%] h-40 mb-20" placeholder="Your message"        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
    <Button className="mb-20" onClick={sendMessage} disabled={loading}>
      {loading ? "Sending..." : done ? "Sent!" : "Send Message"}
    </Button>
{/* <p>A collection of certifications from Udemy, Kaggle, and Hugging Face covering Machine Learning, Python development, TensorFlow, NLP, LLMs, and AI engineering. These courses strengthened my practical skills in building real-world AI applications.</p> */}
    </main>
  );
}

