import './globals.css';
import Image from 'next/image';
import Header from './header'; // ajuste o caminho se necessário

export const metadata = {
  title: 'Contabilidade - Site Institucional',
  description: 'Soluções contábeis completas para sua empresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <Header />
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