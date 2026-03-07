"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contactus", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-secondary w-full top-0 left-0 fixed z-50 shadow-sm'>
      <div className='flex items-center justify-between px-4 h-16'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <Image
            src="/unnamed (1).jpg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className='font-medium'>mikile.tech</span>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:flex flex-row gap-4'>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className='text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors'>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          className='md:hidden p-2 rounded-md hover:bg-accent transition-colors'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className='md:hidden flex flex-col gap-3 px-6 pb-4 bg-secondary border-t border-border'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors py-1'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
