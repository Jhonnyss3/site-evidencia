"use client";

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function Home() {
  const ctaButton =
    "relative bg-[#da412c] text-white py-4 px-8 no-underline rounded font-bold transition-colors duration-300 inline-block hover:bg-[#c13625] shadow-lg " +
    "after:content-[''] after:absolute after:left-1/2 after:bottom-3 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-white " +
    "after:transition-all after:duration-300 hover:after:w-3/4";

  // WhatsApp config (usar api.whatsapp.com para garantir que o texto seja enviado)
  const phone = "5524974012116"; // sem o sinal de +
  const defaultMsg = "Olá, eu quero assessoria contábil!";
  const wppLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(defaultMsg)}`;

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer para Hero
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-hero');
          } else {
            entry.target.classList.remove('animate-hero');
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observer para About com contador animado
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-about');
            
            // Animar os contadores
            const counters = entry.target.querySelectorAll('[data-counter]');
            counters.forEach((counter: Element) => {
              const target = parseInt(counter.getAttribute('data-counter') || '0');
              const duration = 2000; // 2 segundos
              const increment = target / (duration / 16); // 60fps
              let current = 0;
              
              const updateCounter = () => {
                current += increment;
                if (current < target) {
                  counter.textContent = Math.floor(current).toString() + (counter.classList.contains('has-plus') ? '+' : '%');
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.textContent = target.toString() + (counter.classList.contains('has-plus') ? '+' : '%');
                }
              };
              
              updateCounter();
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // **NOVO: Observer para Services**
    const servicesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-services');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    // **NOVO: Observar Services Section**
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesObserver.observe(servicesSection);
    }

    // **NOVO: Observer para FAQ**
    const faqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-faq');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observar FAQ Section
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqObserver.observe(faqSection);
    }

    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
      servicesObserver.disconnect();
      faqObserver.disconnect(); // Limpar observer
    };
  }, []);

  return (
    <>
      {/* Hero Section com parallax (bg-fixed em md+) */}
      <section
        ref={heroRef}
        id="home"
        aria-label="Início"
        className="relative w-full h-screen flex items-center justify-center bg-[url('/banner.png')] bg-cover bg-center md:bg-fixed font-sans overflow-hidden"
      >
        {/* Overlay para contraste no mobile */}
        <div className="pointer-events-none absolute inset-0 bg-black/20 md:bg-black/10" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pb-14 md:pb-16 flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#da412c] mb-3 md:mb-4 drop-shadow-lg opacity-0 [.animate-hero_&]:animate-[slideIn_1.5s_ease-out_forwards]">
            E V I D E N C I ꓥ
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-[#da412c] mb-6 md:mb-8 font-normal drop-shadow opacity-0 [.animate-hero_&]:animate-[slideIn_1.5s_ease-out_0.5s_forwards]">
            A Evidência é o instrumento,
            <span className="block">o foco está em pessoas, resultados e equilíbrio.</span>
          </p>
          <a
            href={wppLink}
            className="relative text-[#1a2b3f] py-2 no-underline font-bold transition-colors duration-300 inline-block hover:text-[#da412c] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#1a2b3f] hover:after:bg-[#da412c] after:transition-all after:duration-300 hover:after:w-full w-full sm:w-auto text-left opacity-0 [.animate-hero_&]:animate-[slideIn_1.5s_ease-out_1s_forwards]"
            style={{ overflow: 'hidden' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            FALE CONOSCO
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-label="Sobre" className="bg-[#e4e4e4] font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Imagem - Metade esquerda */}
          <div 
            className="w-full h-[50vh] lg:h-auto opacity-0 [.animate-about_&]:animate-[slideInLeft_1s_ease-out_forwards]"
          >
            <img
              src="/about2.jpeg"
              alt="Equipe da Evidência Assessoria Contábil"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo - Metade direita */}
          <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 space-y-12 md:space-y-16">
            {/* Título principal */}
            <div className="opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <h2 className="text-[#da412c] text-3xl md:text-4xl mb-4 font-bold">
                E V I D E N C I ꓥ
              </h2>
              <div className="w-24 h-1 bg-[#1a2b3f] mb-6"></div>
              <p className="text-[#da412c] text-base md:text-lg font-normal leading-relaxed">
                Transformar números em decisões conscientes, simplificando a contabilidade e fortalecendo o crescimento sustentável dos negócios.
              </p>
            </div>

            {/* Nossa essência */}
            <div className="opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              <h3 className="text-[#da412c] text-2xl md:text-3xl mb-4 font-bold">
                Nossa essência
              </h3>
              <p className="text-[#da412c] text-sm md:text-base font-normal leading-relaxed mb-8">
                A Evidência Assessoria Contábil acredita que a contabilidade deve ser uma ferramenta de gestão, não apenas uma obrigação fiscal.
                Seu papel é traduzir os números com clareza e proximidade, ajudando o empresário a ter tranquilidade, segurança e performance em todas as etapas do seu negócio.
              </p>
              
              {/* Estatísticas - Versão minimalista */}
              {/* <div className="flex flex-wrap gap-8 md:gap-12">
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] mb-1">
                    <span data-counter="15" className="has-plus">0+</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Anos de Experiência</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] mb-1">
                    <span data-counter="200" className="has-plus">0+</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Clientes Ativos</div>
                </div>
                <div className="group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] mb-1">
                    <span data-counter="100">0%</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">Comprometimento</div>
                </div>
              </div> */}
            </div>
            
            {/* MVV - Versão sofisticada com mais destaque */}
            <div className="opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
              <div className="border-t border-[#1a2b3f]/20 pt-8">
                {/* Títulos horizontais com mais destaque */}
                <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 mb-6">
                  <button
                    onClick={() => {
                      const missao = document.getElementById('missao-content');
                      const visao = document.getElementById('visao-content');
                      const valores = document.getElementById('valores-content');
                      const missaoIcon = document.getElementById('missao-icon');
                      
                      if (missao?.classList.contains('hidden')) {
                        missao?.classList.remove('hidden');
                        missaoIcon?.classList.add('rotate-180');
                        visao?.classList.add('hidden');
                        valores?.classList.add('hidden');
                        document.getElementById('visao-icon')?.classList.remove('rotate-180');
                        document.getElementById('valores-icon')?.classList.remove('rotate-180');
                      } else {
                        missao?.classList.add('hidden');
                        missaoIcon?.classList.remove('rotate-180');
                      }
                    }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#1a2b3f] text-xl md:text-2xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                        Missão
                      </span>
                      <svg id="missao-icon" className="w-5 h-5 text-[#1a2b3f] group-hover:text-[#da412c] transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#da412c] transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  <button
                    onClick={() => {
                      const missao = document.getElementById('missao-content');
                      const visao = document.getElementById('visao-content');
                      const valores = document.getElementById('valores-content');
                      const visaoIcon = document.getElementById('visao-icon');
                      
                      if (visao?.classList.contains('hidden')) {
                        visao?.classList.remove('hidden');
                        visaoIcon?.classList.add('rotate-180');
                        missao?.classList.add('hidden');
                        valores?.classList.add('hidden');
                        document.getElementById('missao-icon')?.classList.remove('rotate-180');
                        document.getElementById('valores-icon')?.classList.remove('rotate-180');
                      } else {
                        visao?.classList.add('hidden');
                        visaoIcon?.classList.remove('rotate-180');
                      }
                    }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#1a2b3f] text-xl md:text-2xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                        Visão
                      </span>
                      <svg id="visao-icon" className="w-5 h-5 text-[#1a2b3f] group-hover:text-[#da412c] transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#da412c] transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  <button
                    onClick={() => {
                      const missao = document.getElementById('missao-content');
                      const visao = document.getElementById('visao-content');
                      const valores = document.getElementById('valores-content');
                      const valoresIcon = document.getElementById('valores-icon');
                      
                      if (valores?.classList.contains('hidden')) {
                        valores?.classList.remove('hidden');
                        valoresIcon?.classList.add('rotate-180');
                        missao?.classList.add('hidden');
                        visao?.classList.add('hidden');
                        document.getElementById('missao-icon')?.classList.remove('rotate-180');
                        document.getElementById('visao-icon')?.classList.remove('rotate-180');
                      } else {
                        valores?.classList.add('hidden');
                        valoresIcon?.classList.remove('rotate-180');
                      }
                    }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#1a2b3f] text-xl md:text-2xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                        Valores
                      </span>
                      <svg id="valores-icon" className="w-5 h-5 text-[#1a2b3f] group-hover:text-[#da412c] transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#da412c] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </div>

                {/* Conteúdos expansíveis */}
                <div className="min-h-[80px]">
                  <div id="missao-content" className="hidden">
                    <p className="text-gray-600 font-normal text-base md:text-lg leading-relaxed pt-6">
                      Melhorar a qualidade de vida do empresário e promover o crescimento sustentável do seu negócio, usando a contabilidade como instrumento de gestão e resultado.
                    </p>
                  </div>

                  <div id="visao-content" className="hidden">
                    <p className="text-gray-600 font-normal text-base md:text-lg leading-relaxed pt-6">
                      Ser reconhecida como referência em contabilidade humanizada e estratégica no Brasil, mantendo a proximidade e excelência mesmo com o crescimento da base de clientes.
                    </p>
                  </div>

                  <div id="valores-content" className="hidden">
                    <p className="text-gray-600 font-normal text-base md:text-lg leading-relaxed pt-6">
                      Nossa atuação é guiada pela transparência, com clareza e verdade em cada relação. Comprometemo-nos a cumprir o que prometemos, entregando resultados concretos e mensuráveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" aria-label="Serviços" className="bg-[#e4e4e4] font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Conteúdo - Metade esquerda */}
          <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 space-y-8 md:space-y-10 order-2 lg:order-1">
            {/* Título principal com efeitos modernos */}
            <div className="opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <div className="relative inline-block mb-6">
                <h2 className="text-[#1a2b3f] text-3xl md:text-4xl lg:text-5xl font-bold relative z-10">
                  Nossos Serviços
                </h2>
                {/* Sublinhado decorativo animado */}
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-[#da412c]"></div>
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-[#1a2b3f] opacity-30 [.animate-services_&]:animate-[expandWidth_1.5s_ease-out_0.5s_forwards]"></div>
              </div>
              
              <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed mt-8">
                Traduzimos números em estratégia, transformamos obrigações em oportunidades e construímos relações de confiança que impulsionam o crescimento sustentável.
              </p>
            </div>

            {/* Grid de serviços - Cards ultra modernos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 - Contábil */}
              <div className="group relative opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
                <div className="relative bg-white p-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#da412c]/20">
                  {/* Gradiente de fundo no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3f] to-[#2a3b4f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Ícone com animação */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#da412c] to-[#ff6b54] rounded-2xl text-white text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      📊
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-[#1a2b3f] text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                      Contábil
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed transition-colors duration-500 group-hover:text-gray-100">
                      Escrituração contábil, balanços patrimoniais e relatórios gerenciais para decisões estratégicas.
                    </p>
                  </div>

                  {/* Linha decorativa animada */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#da412c] to-[#ff6b54] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
                </div>
              </div>

              {/* Card 2 - Fiscal e Tributário */}
              <div className="group relative opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                <div className="relative bg-white p-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#da412c]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3f] to-[#2a3b4f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#da412c] to-[#ff6b54] rounded-2xl text-white text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      📋
                    </div>
                    
                    <h3 className="text-[#1a2b3f] text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                      Fiscal e Tributário
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed transition-colors duration-500 group-hover:text-gray-100">
                      Apuração de impostos, planejamento tributário e entrega de obrigações acessórias com eficiência.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#da412c] to-[#ff6b54] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
                </div>
              </div>

              {/* Card 3 - Gestão do Funcionário */}
              <div className="group relative opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
                <div className="relative bg-white p-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#da412c]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3f] to-[#2a3b4f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#da412c] to-[#ff6b54] rounded-2xl text-white text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      👥
                    </div>
                    
                    <h3 className="text-[#1a2b3f] text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                      Gestão do Funcionário
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed transition-colors duration-500 group-hover:text-gray-100">
                      Admissões, demissões, folha de pagamento, recrutamento, treinamento e compliance trabalhista.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#da412c] to-[#ff6b54] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
                </div>
              </div>

              {/* Card 4 - Gestão Gerencial */}
              <div className="group relative opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
                <div className="relative bg-white p-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#da412c]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b3f] to-[#2a3b4f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#da412c] to-[#ff6b54] rounded-2xl text-white text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      💡
                    </div>
                    
                    <h3 className="text-[#1a2b3f] text-xl md:text-2xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                      Gestão Gerencial
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed transition-colors duration-500 group-hover:text-gray-100">
                      Análise de viabilidade, planejamento estratégico, relatórios gerenciais e suporte para expansão do negócio.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#da412c] to-[#ff6b54] transition-all duration-500 group-hover:w-full rounded-b-xl"></div>
                </div>
              </div>
            </div>

            {/* CTA - Botão de ação modernizado */}
            <div className="opacity-0 [.animate-services_&]:animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
              <div className="border-t border-gray-300 pt-8">
                <p className="text-gray-600 text-base md:text-lg mb-4 font-normal">
                  Quer entender como cada serviço pode transformar seu negócio?
                </p>
                <a
                  href={wppLink}
                  className="group relative text-[#1a2b3f] py-2 no-underline font-bold transition-all duration-300 inline-flex items-center gap-2 hover:text-[#da412c]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative">
                    FALE COM NOSSA EQUIPE
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#da412c] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem - Metade direita */}
          <div className="w-full h-[50vh] lg:h-auto order-1 lg:order-2 opacity-0 [.animate-services_&]:animate-[slideInRight_1s_ease-out_forwards]">
            <img
              src="/service_banner.jpeg"
              alt="Serviços da Evidência Assessoria Contábil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" aria-label="Perguntas Frequentes" className="bg-[#e4e4e4] py-16 md:py-20 font-sans overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Título principal centralizado */}
          <div className="text-center mb-12 md:mb-16 opacity-0 [.animate-faq_&]:animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            <h2 className="text-[#da412c] text-3xl md:text-4xl mb-4 font-bold">
              Perguntas Frequentes
            </h2>
            <div className="w-24 h-1 bg-[#1a2b3f] mb-6 mx-auto"></div>
            <p className="text-[#da412c] text-base md:text-lg font-normal leading-relaxed max-w-[800px] mx-auto">
              Tire suas dúvidas sobre como a Evidência pode transformar a gestão contábil do seu negócio.
            </p>
          </div>

          {/* Lista de perguntas - Estilo accordion minimalista centralizado */}
          <div className="space-y-6 opacity-0 [.animate-faq_&]:animate-[fadeInUp_1s_ease-out_0.4s_forwards] max-w-[900px] mx-auto">
            {/* FAQ 1 */}
            <div className="border-b border-[#1a2b3f]/20 pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-1');
                  const icon = document.getElementById('faq-icon-1');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  O que diferencia a Evidência de outros escritórios de contabilidade?
                </h3>
                <svg id="faq-icon-1" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-1" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  Oferecemos contabilidade humanizada e estratégica, traduzindo números em decisões conscientes com metodologia própria de análise e acompanhamento próximo.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-[#1a2b3f]/20 pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-2');
                  const icon = document.getElementById('faq-icon-2');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  Como funciona o processo de onboarding de novos clientes?
                </h3>
                <svg id="faq-icon-2" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-2" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  Realizamos entrevistas detalhadas, mapeamento de processos e aplicamos checklists personalizados para entender profundamente seu negócio e suas necessidades.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-[#1a2b3f]/20 pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-3');
                  const icon = document.getElementById('faq-icon-3');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  Vocês trabalham com planejamento tributário?
                </h3>
                <svg id="faq-icon-3" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-3" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  Sim! Realizamos simulações tributárias, análise de custo por produto e planejamento estratégico anual para redução segura da carga tributária.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-[#1a2b3f]/20 pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-4');
                  const icon = document.getElementById('faq-icon-4');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  Como acompanham os resultados mensais da minha empresa?
                </h3>
                <svg id="faq-icon-4" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-4" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  Fornecemos relatórios e dashboards mensais com visão gerencial, monitoramento de margem bruta e acompanhamento constante da performance do negócio.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-[#1a2b3f]/20 pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-5');
                  const icon = document.getElementById('faq-icon-5');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  Atendem empresas de outros estados?
                </h3>
                <svg id="faq-icon-5" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-5" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  Sim! Atendemos clientes de todo o Brasil, mantendo a proximidade e atendimento humanizado através de ferramentas digitais e reuniões online.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="pb-6">
              <button
                onClick={() => {
                  const content = document.getElementById('faq-6');
                  const icon = document.getElementById('faq-icon-6');
                  if (content?.classList.contains('hidden')) {
                    content?.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                  } else {
                    content?.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                  }
                }}
                className="group w-full text-left flex items-start justify-between gap-4"
              >
                <h3 className="text-[#1a2b3f] text-lg md:text-xl font-bold group-hover:text-[#da412c] transition-colors duration-300">
                  Qual o prazo para abertura de empresa?
                </h3>
                <svg id="faq-icon-6" className="w-5 h-5 text-[#1a2b3f] flex-shrink-0 transition-all duration-300 group-hover:text-[#da412c]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div id="faq-6" className="hidden mt-4">
                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed">
                  O prazo varia conforme o tipo de empresa e documentação, mas geralmente fica entre 15 a 30 dias úteis, com acompanhamento transparente de cada etapa.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-12 md:mt-16 pt-8 opacity-0 [.animate-faq_&]:animate-[fadeInUp_1s_ease-out_0.6s_forwards] max-w-[900px] mx-auto text-center">
            <p className="text-gray-600 text-base md:text-lg mb-4 font-normal">
              Não encontrou sua resposta? Converse com nossa equipe.
            </p>
            <a
              href={wppLink}
              className="group relative text-[#1a2b3f] py-2 no-underline font-bold transition-all duration-300 inline-flex items-center gap-2 hover:text-[#da412c] mx-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative">
                FALE COM NOSSA EQUIPE
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#da412c] transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" aria-label="Equipe" className="bg-[#e4e4e4] py-16 md:py-20 font-sans">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Título principal */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#da412c] text-3xl md:text-4xl mb-4 font-bold">
              Nossa Equipe
            </h2>
            <div className="w-24 h-1 bg-[#1a2b3f] mb-6 mx-auto"></div>
            <p className="text-[#da412c] text-base md:text-lg font-normal leading-relaxed max-w-[800px] mx-auto">
              Conheça os profissionais que tornam possível nossa missão de transformar a contabilidade em ferramenta de gestão.
            </p>
          </div>

          {/* Sócios - Destaque especial */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-[#1a2b3f] text-2xl md:text-3xl font-bold text-center mb-8">Sócios</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Marcelo */}
              <div className="text-center">
                <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#da412c]">
                  <img src="/marcelo_logo2.png" alt="Marcelo Carvalho" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-1 text-[#1a2b3f]">Marcelo Carvalho</h4>
                <p className="text-gray-600 font-normal text-sm md:text-base">CRC: XXXXX</p>
                <p className="text-gray-600 font-normal text-sm md:text-base">Contador Responsável</p>
              </div>

              {/* Fábio */}
              <div className="text-center">
                <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full mx-auto mb-4 overflow-hidden border-4 border-[#da412c]">
                  <img src="/fabio_logo2.png" alt="Fábio Silva" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-1 text-[#1a2b3f]">Fábio Silva</h4>
                <p className="text-gray-600 font-normal text-sm md:text-base">Diretor Financeiro</p>
              </div>
            </div>
          </div>

          {/* Linha divisória sutil */}
          <div className="w-full max-w-[600px] mx-auto mb-12 md:mb-16">
            <div className="h-px bg-[#1a2b3f]/20"></div>
          </div>

          {/* Demais membros da equipe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-[900px] mx-auto">
            {/* Jaqueline */}
            <div className="text-center">
              <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full mx-auto mb-3 overflow-hidden border-2 border-[#1a2b3f]/20">
                <img src="/jaqueline_logo.png" alt="Jaqueline Ezídio" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 text-[#1a2b3f]">Jaqueline Ezídio</h4>
              <p className="text-gray-600 font-normal text-sm">Diretora Administrativa</p>
            </div>

            {/* André */}
            <div className="text-center">
              <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full mx-auto mb-3 overflow-hidden border-2 border-[#1a2b3f]/20">
                <img src="/andre_logo.png" alt="André Calcagno" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 text-[#1a2b3f]">André Calcagno</h4>
              <p className="text-gray-600 font-normal text-sm">Diretor de RH</p>
            </div>

            {/* João */}
            <div className="text-center">
              <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full mx-auto mb-3 overflow-hidden border-2 border-[#1a2b3f]/20">
                <img src="/joao_logo.jpeg" alt="João Pedro Sanglard" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-base md:text-lg mb-1 text-[#1a2b3f]">João Pedro Sanglard</h4>
              <p className="text-gray-600 font-normal text-sm">Gerente T.I.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" aria-label="Instagram" className="bg-[#f8f9fa] py-16 md:py-20 font-sans">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-[#1a2b3f] text-3xl md:text-4xl mb-4 font-bold">
            Acompanhe nossso Instagram
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base font-normal">
            Fique por dentro das novidades, dicas contábeis e conteúdos exclusivos
          </p>
          
          {/* Widget do Behold */}
          <div 
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: '<behold-widget feed-id="CaQuwhmvmljU5oUUxQEj"></behold-widget>'
            }}
          />

          {/* Botão para ver mais no Instagram */}
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/evidencia.assessoriacontabil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#da412c] hover:text-[#c13625] font-semibold transition-colors duration-300"
            >
              <span>Ver mais no Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Script do Behold - adicionar depois de todas as sections */}
      <Script
        id="behold-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const d=document,s=d.createElement("script");s.type="module";
              s.src="https://w.behold.so/widget.js";d.head.append(s);
            })();
          `,
        }}
      />    

      {/* Contact Section com parallax (bg-fixed em md+) */}
      <section
        id="contact"
        aria-label="Contato"
        className="relative text-white text-center py-16 md:py-20 font-sans bg-[url('/contact_bg.png')] bg-cover bg-center md:bg-fixed overflow-hidden"
      >
        {/* Overlay para leitura */}
        <div className="absolute inset-0 bg-[#1a2b3f]/80"></div>

        <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Entre em Contato</h2>
          <p className="text-sm sm:text-base mb-8 md:mb-10 font-normal">
            Converse com a Evidência Assessoria Contábil e descubra como podemos simplificar sua rotina contábil e impulsionar seus resultados.
          </p>
          <a
            href={wppLink}
            className={`${ctaButton} w-full sm:w-auto`}
            style={{ overflow: 'hidden' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar pelo WhatsApp
          </a>
          <div className="mt-8 text-sm md:text-base text-[#d1d5db] font-normal space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span>Rua Exemplo, 123 - Volta Redonda/RJ</span>
              <span className="hidden md:inline">|</span>
              <a href="tel:+552433334444" className="hover:underline">(24) 3333-4444</a>
              <span className="hidden md:inline">|</span>
              <a href="mailto:contato@contabilidade.com.br" className="hover:underline">contato@contabilidade.com.br</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}