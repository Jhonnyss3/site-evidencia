import './globals.css';
import Header from './header'; 

export const metadata = {
  title: 'Contabilidade - Site Institucional',
  description: 'Soluções contábeis completas para sua empresa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="font-sans bg-white text-[#1a2b3f] antialiased">
        <Header />
        <main>{children}</main>
        <footer className="bg-[#1a2b3f] text-white text-center py-8 border-t-4 border-[#da412c] font-sans">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
            <p className="text-sm sm:text-base">&copy; 2024 Contabilidade. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}