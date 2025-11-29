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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg'></div>
      {/* <App/> */}
      <Header/>
      {/* <Images 
      src=''
      alt=""
      width={90}
      height={90}
      /> */}
      {/* <Email/> */}
      <h1 className="text-[80px]">Mikiyas Zenebe Bekele</h1>
      <div className='fixed top-5 right-5'><ModeToggle/></div>
      <p className='m-3'>Self thought AI Engineer | Python | Machine Learning</p>
      <div className="mt-3 flex items-center gap-4 ">
      <a href="" className='bg-gray flex align-center p-2 rounded-lg gap-2'>
      <Phone/>
      +251995641212
      </a>
      {/* <a href=""> */}
      <a href="" className='bg-gray flex align-center p-2 rounded-lg gap-2'>
      <Mail/>
      mikilezen@gmail.com
      </a>
        </div>
      <div className="flex flex-row gap-4">
      <a href="">
      <Linkedin/>
      </a>
      <a href="">
      <Github/>
      </a>
      <a href="">
      <MessageCircle/>
      </a>
      </div>
      <p className="mt-20 flex flex-col items-center text-center">

      scroll down
      <ArrowDownWideNarrow/>
      </p>

      <p className='m-9 text-6xl'>ABOUT</p>
      <p className='w-[80%] text-[18px]'>Hi, I’m Miki, an IT student and a self-taught AI enthusiast who loves building things with code. I’m currently studying Information Technology at Arsi University, and in my free time, I teach myself Machine Learning, Deep Learning, and Computer Vision through online courses, documentation, and hands-on projects.

I enjoy experimenting with AI — from face recognition and emotion detection to building chatbots, recommendation systems, and language tools. Most of what I know comes from curiosity, consistency, and solving real problems through small personal projects.

I believe learning by doing is the best way to grow, and I’m always working on something new: improving my skills, exploring new frameworks, and building projects that help people or make tech more accessible.

My goal is to become a strong AI engineer who creates meaningful and practical solutions for real-world challenges.</p>
      <p className='m-9 text-6xl'>EXPERIENCE</p>
      <p className='w-[80%] text[18px]'>
AI Engineer & Machine Learning Developer

Designed, trained, and deployed machine learning and deep learning models using scikit-learn and PyTorch for prediction, classification, and recommendation systems.

Built AI-driven recommendation engines and implemented large-scale data processing workflows using PySpark to improve performance and optimization.

Developed intelligent LLM-powered applications with LangChain, integrating custom pipelines, retrieval modules, and context-based reasoning for automation and chatbot development.

Implemented computer vision systems using OpenCV and PyTorch, including face recognition, emotion detection, and various image-analysis solutions.

Worked on NLP, audio processing, and translation projects, leveraging Hugging Face Transformers to build and fine-tune models for text understanding, generation, and multilingual applications.

Contributed to multiple AI projects involving model design, dataset preparation, evaluation, and deployment.</p>
      <br />
      <p className='m-9 text-6xl'>PROJECTS</p>
      <p className='w-[80%] text-[18px]'>
<a className='text-2xl font-bold' href="">
  Berta Language Machine Translation
  </a>
<br />
Collected and prepared 6,000+ parallel Berta–English sentence pairs.

Fine-tuned a Transformer-based language model using Hugging Face for low-resource machine translation.
<br />
Goal: digitize and preserve Ethiopian indigenous languages through modern NLP.
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
<p className='m-9 text-6xl'>CONTACT US</p>
<p className='w-[80%] text-[18px]'>I’m always excited to connect with fellow AI enthusiasts, collaborate on innovative projects, or discuss the latest trends in technology. Whether you have a question, an idea, or just want to say hello, feel free to reach out!</p>
    <Input className="w-[80%] mt-5 mb-20" placeholder="Your email address"/>
    <Textarea className="w-[80%] h-40 mb-20" placeholder="Your message"/>
    <Button className="mb-20">Send Message</Button>
<p className='m-9 text-6xl'>CERTIFICATIONS</p>
<div className='flejpg'>
  <Image 
src='/certifications1.webp'
width={50}
height={50}
alt="img"
/>
  <Image 
src='/certifications2.png'
width={50}
height={50}
alt="img"
/>
  <Image 
src='/certifications3.jpg'
width={50}
height={50}
alt="img"
/>
  <Image 
src='/certifications4.jpg'
width={50}
height={50}
alt="img"
/>
  <Image 
src='/certifications5.jpg'
width={50}
height={50}
alt="img"
/>
  <Image 
src='/certifications6.jpg'
width={50}
height={50}
alt="img"
/>
</div>
    </main>
  );
}

