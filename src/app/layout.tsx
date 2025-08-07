import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Contabilidade - Site Institucional',
  description: 'Soluções contábeis completas para sua empresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
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
              {[
                { href: "#home", label: "Início" },
                { href: "#about", label: "Sobre" },
                { href: "#services", label: "Serviços" },
                { href: "#team", label: "Equipe" },
                { href: "#contact", label: "Contato" },
              ].map((item) => (
                <li key={item.href} className="relative ml-8 group px-2">
                  <a
                    href={item.href}
                    className="relative text-[#da412c] no-underline py-2 rounded transition-all duration-300 inline-block font-medium
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
        {children}
        {/* Footer */}
        <footer className="bg-[#1a2b3f] text-white text-center py-8 border-t-4 border-[#da412c] font-sans">
          <div className="max-w-[1200px] mx-auto px-8">
            <p>&copy; 2024 Contabilidade. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}