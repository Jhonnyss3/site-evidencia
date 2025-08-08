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

function MenuSanduiche({ open, setOpen, visible }: { open: boolean, setOpen: (v: boolean) => void, visible: boolean }) {
  return (
    <div
      className={`
        fixed top-6 left-6 z-[1100]
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
    >
      <button
        className="flex flex-col justify-center items-center w-12 h-12 bg-[#da412c] rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <span className="block w-6 h-1 bg-white mb-1 rounded transition-all duration-300" />
        <span className="block w-6 h-1 bg-white mb-1 rounded transition-all duration-300" />
        <span className="block w-6 h-1 bg-white rounded transition-all duration-300" />
      </button>
      {open && (
        <div className="absolute top-14 left-0 bg-white rounded-xl shadow-2xl py-6 px-8 min-w-[220px]">
          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className="mb-3 last:mb-0">
                <a
                  href={item.href}
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block font-medium text-lg
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 group-hover:after:w-full hover:after:w-full"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [showSanduiche, setShowSanduiche] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeroMenu, setShowHeroMenu] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8 - 80) {
        setShowSanduiche(true);
        setShowHeroMenu(false);
      } else {
        setShowSanduiche(false);
        setShowHeroMenu(true);
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Menu da hero com transição */}
      <header
        className={`
          bg-transparent py-4 fixed w-full top-0 z-[1000] transition-all duration-500
          ${showHeroMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center px-8 bg-transparent">
          <div className="px-5 py-2">
            <a href="#home" aria-label="Ir para o topo">
              <Image
                src="/logo.png"
                alt="Logo Evidência"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>
          <ul className="flex list-none bg-transparent">
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className="relative ml-8 group px-2">
                <a
                  href={item.href}
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block font-medium text-lg
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 group-hover:after:w-full hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Menu sanduíche com transição */}
      <MenuSanduiche open={menuOpen} setOpen={setMenuOpen} visible={showSanduiche} />
    </>
  );
}