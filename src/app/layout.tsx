// src/app/layout.tsx
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Contabilidade - Site Institucional',
  description: 'Soluções contábeis completas para sua empresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Header */}
        <header className="bg-transparent py-4 fixed w-full top-0 z-[1000]">
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
              <li className="relative ml-8 group px-2">
                <a
                  href="#home"
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  Início
                </a>
              </li>
              <li className="relative ml-8 group px-2">
                <a
                  href="#about"
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  Sobre
                </a>
              </li>
              <li className="relative ml-8 group px-2">
                <a
                  href="#services"
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  Serviços
                </a>
              </li>
              <li className="relative ml-8 group px-2">
                <a
                  href="#team"
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  Equipe
                </a>
              </li>
              <li className="relative ml-8 group px-2">
                <a
                  href="#contact"
                  className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#da412c]
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        {/* Footer */}
        <footer className="bg-[#1a2b3f] text-white text-center py-8 border-t-4 border-[#da412c]">
          <div className="max-w-[1200px] mx-auto px-8">
            <p>&copy; 2024 Contabilidade. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}