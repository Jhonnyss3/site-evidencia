"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const MENU_ITEMS = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#sac", label: "FAQ" },
  { href: "#team", label: "Equipe" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8; // quando passar ~80% da hero
      if (window.scrollY > threshold) {
        setShowFloatingMenu(true);
        setMobileMenuOpen(false); // garante que o dropdown feche
      } else {
        setShowFloatingMenu(false);
        setFloatingMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header principal: transparente no topo; some completamente após scroll */}
      <header
        className={[
          "fixed w-full top-0 z-50 transition-all duration-300",
          // Transparente no topo
          "bg-transparent border-b border-transparent",
          // Quando o sanduíche flutuante estiver visível, header some
          showFloatingMenu
            ? "opacity-0 -translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0 pointer-events-auto",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Ir para o início">
              <Image
                src="/logo.png"
                alt="Logo Evidência"
                width={160}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </a>
          </div>

          {/* Navegação desktop (visível apenas enquanto o header estiver no topo) */}
          <nav className="hidden md:flex items-center gap-6">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#1a2b3f] hover:text-[#da412c] transition-colors font-medium text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão mobile (visível apenas enquanto o header estiver no topo) */}
          <button
            className="md:hidden p-2 rounded-md text-[#1a2b3f] hover:bg-white/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown mobile (só aparece enquanto o header está visível no topo) */}
        <div
          className={[
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96" : "max-h-0",
          ].join(" ")}
        >
          <nav className="px-4 pb-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-[#1a2b3f] hover:bg-gray-100 hover:text-[#da412c] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Menu sanduíche flutuante: aparece para mobile e desktop após scroll */}
      <div
        className={[
          "fixed top-6 left-6 z-[60] transition-all duration-300",
          showFloatingMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <button
          className="w-12 h-12 bg-[#da412c] rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setFloatingMenuOpen(!floatingMenuOpen)}
          aria-label="Menu flutuante"
          aria-expanded={floatingMenuOpen}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
            {floatingMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {floatingMenuOpen && (
          <div className="absolute top-14 left-0 bg-white rounded-xl shadow-2xl py-4 px-6 min-w-[200px]">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-[#da412c] hover:text-[#c13625] font-medium transition-colors"
                onClick={() => setFloatingMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}