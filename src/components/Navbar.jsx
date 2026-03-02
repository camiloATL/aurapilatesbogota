"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import menuIcon from "@/lib/lottie/Menu.json";
import closeIcon from "@/lib/lottie/Close.json";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/home#home", id: "home" },
  { name: "Nosotros", href: "/home#about", id: "about" },
  { name: "Servicios", href: "/home#servicios", id: "servicios" },
  { name: "Galería", href: "/home#galeria", id: "galeria" },
  { name: "Contacto", href: "/home#contacto", id: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el) => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.6],
        rootMargin: "-120px 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-amber-600">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home#home" className="flex items-center gap-3">
          <Image
            src="/assets/aura_logo.png"
            alt="Aura Pilates"
            width={180}
            height={60}
            priority
            className="h-16 w-auto md:h-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={[
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  "grayscale hover:grayscale-0",
                  isActive
                    ? "bg-zinc-500 text-white border-gray-700 grayscale-0"
                    : "bg-white text-gray-600 border-gray-400 hover:bg-zinc-200 hover:border-gray-700",
                ].join(" ")}
              >
                {link.name}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/home#contacto"
            className="ml-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#F0CFAC] text-[#8C402E] border border-[#F2A88D] hover:bg-[#F2A88D]/90 transition"
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-400 bg-white p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-7">
            <Lottie animationData={isOpen ? closeIcon : menuIcon} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-400 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "w-full px-4 py-3 rounded-2xl text-sm font-medium transition border",
                    "grayscale hover:grayscale-0",
                    isActive
                      ? "bg-zinc-500 text-white border-gray-700 grayscale-0"
                      : "bg-white text-gray-600 border-gray-400 hover:bg-zinc-200 hover:border-gray-700",
                  ].join(" ")}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/home#contacto"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 rounded-2xl text-sm font-semibold bg-[#F2A88D] text-[#8C402E] border border-[#F2A88D] hover:bg-[#F2A88D]/90 transition"
            >
              Cotizar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
