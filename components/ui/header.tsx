import React from 'react'
import Image from "next/image";
export default function header() {
  return (
    <main className='flex flex-col items-center justify-between bg-secondary  w-full h-20 top-0 left-0 fixed  back'>
      <Image
        src="/unnamed (1).jpg"
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full fixed top-6 left-2"
      />
      <p className='fixed top-6 left-16'>mikile.tech</p>
      <div className='flex flex-row gap-4 fixed top-6 right-18'>
        <a href="#about" className='text-gray-700 hover:text-blue-500'>About</a>
        <a href="#projects" className='text-gray-700 hover:text-blue-500'>Projects</a>
        <a href="#contact" className='text-gray-700 hover:text-blue-500'>Contact</a>
        <a href="#certifications" className='text-gray-700 hover:text-blue-500'>Certifications</a>
        <a href="#experience" className='text-gray-700 hover:text-blue-500'>Experience</a>
      </div>
    </main>
  )
}
