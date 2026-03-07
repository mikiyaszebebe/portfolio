"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about",          label: "About"          },
  { href: "#experience",     label: "Experience"     },
  { href: "#projects",       label: "Projects"       },
  { href: "#certifications", label: "Certifications" },
  { href: "#contactus",      label: "Contact"        },
];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-semibold text-sm">
          <Image
            src="/unnamed (1).jpg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className={scrolled ? "text-foreground" : "text-white"}>mikile.tech</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X size={20} className={scrolled ? "text-foreground" : "text-white"} />
            : <Menu size={20} className={scrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
