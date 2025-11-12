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

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
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
            className="relative bg-[#1a2b3f] text-white py-4 px-8 no-underline rounded font-bold transition-colors duration-300 inline-block hover:bg-[#152231] shadow-lg after:content-[''] after:absolute after:left-1/2 after:bottom-3 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-300 hover:after:w-3/4 w-full sm:w-auto text-center opacity-0 [.animate-hero_&]:animate-[slideIn_1.5s_ease-out_1s_forwards]"
            style={{ overflow: 'hidden' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" aria-label="Sobre" className="bg-white py-16 md:py-20 font-sans">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Título principal com fade in */}
          <div className="text-center mb-12 md:mb-16 opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_forwards]">
            <h2 className="text-[#1a2b3f] text-3xl md:text-4xl mb-4 font-bold">
              E V I D E N C I ꓥ
            </h2>
            <div className="w-24 h-1 bg-[#da412c] mx-auto mb-6"></div>
            <p className="text-[#1a2b3f] text-lg md:text-xl max-w-[800px] mx-auto font-normal">
              Transformar números em decisões conscientes, simplificando a contabilidade e fortalecendo o crescimento sustentável dos negócios.
            </p>
          </div>

          {/* Grid com imagem e texto - com animação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Imagem com slide da esquerda */}
            <div className="w-full h-[280px] sm:h-[320px] md:h-[450px] flex items-stretch order-2 md:order-1 opacity-0 [.animate-about_&]:animate-[slideInLeft_1s_ease-out_0.3s_forwards]">
              <img
                src="/about.jpg"
                alt="Equipe da Evidência Assessoria Contábil"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Texto com slide da direita */}
            <div className="flex flex-col justify-center h-full order-1 md:order-2 opacity-0 [.animate-about_&]:animate-[slideInRight_1s_ease-out_0.3s_forwards]">
              <h3 className="text-[#1a2b3f] text-2xl md:text-3xl mb-4 font-bold">
                Nossa essência
              </h3>
              <p className="mb-4 text-base md:text-lg text-[#1a2b3f] font-normal leading-relaxed">
                A Evidência Assessoria Contábil acredita que a contabilidade deve ser uma ferramenta de gestão, não apenas uma obrigação fiscal.
                Seu papel é traduzir os números com clareza e proximidade, ajudando o empresário a ter tranquilidade, segurança e performance em todas as etapas do seu negócio.
              </p>
              
              {/* Estatísticas com hover effect e contador animado */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-4 bg-[#f8f9fa] rounded-lg hover:bg-[#da412c] transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] group-hover:text-white mb-1 transition-colors">
                    <span data-counter="15" className="has-plus">0+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 group-hover:text-white transition-colors">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-[#f8f9fa] rounded-lg hover:bg-[#da412c] transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] group-hover:text-white mb-1 transition-colors">
                    <span data-counter="200" className="has-plus">0+</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 group-hover:text-white transition-colors">Clientes Ativos</div>
                </div>
                <div className="text-center p-4 bg-[#f8f9fa] rounded-lg hover:bg-[#da412c] transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="text-3xl md:text-4xl font-bold text-[#da412c] group-hover:text-white mb-1 transition-colors">
                    <span data-counter="100">0%</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 group-hover:text-white transition-colors">Comprometimento</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cards de valores com stagger animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              <div className="w-14 h-14 bg-[#da412c] rounded-full flex items-center justify-center mb-4 transition-transform">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h4 className="text-[#1a2b3f] text-xl font-bold mb-3">Missão</h4>
              <p className="text-gray-600 font-normal text-sm md:text-base leading-relaxed">
                Melhorar a qualidade de vida do empresário e promover o crescimento sustentável do seu negócio, usando a contabilidade como instrumento de gestão e resultado.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              <div className="w-14 h-14 bg-[#da412c] rounded-full flex items-center justify-center mb-4 transition-transform">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h4 className="text-[#1a2b3f] text-xl font-bold mb-3">Visão</h4>
              <p className="text-gray-600 font-normal text-sm md:text-base leading-relaxed">
                Ser reconhecida como referência em contabilidade humanizada e estratégica no Brasil, mantendo a proximidade e excelência mesmo com o crescimento da base de clientes.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-6 md:p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 opacity-0 [.animate-about_&]:animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
              <div className="w-14 h-14 bg-[#da412c] rounded-full flex items-center justify-center mb-4 transition-transform">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h4 className="text-[#1a2b3f] text-xl font-bold mb-3">Valores</h4>
              <p className="text-gray-600 font-normal text-sm md:text-base leading-relaxed">
                Nossa atuação é guiada pela transparência, com clareza e verdade em cada relação. Comprometemo-nos a cumprir o que prometemos, entregando resultados concretos e mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" aria-label="Serviços" className="bg-[#1a2b3f] py-16 md:py-20 font-sans">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-white text-3xl md:text-4xl mb-8 md:mb-12 font-bold">Nossos Serviços Contábeis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl">
                📊
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Contábil</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Escrituração contábil, balanços patrimoniais e relatórios gerenciais para decisões estratégicas.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl">
                📋
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Fiscal e Tributário</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Apuração de impostos, planejamento tributário e entrega de obrigações acessórias com eficiência.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl">
                👥
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Gestão do funcionário</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Admissões, Demissões, folha e obrigações trabalhistas recrutamento e seleção de pessoal , treinamento , entrevista com orientação para as melhores praticas e compliance.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg text-center shadow-lg transition-transform duração-300 hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl">
                💡
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Gestão Gerencial</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Análise de viabilidade, planejamento estratégico , analise de relatório gerencial e suporte para expansão do negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sac" aria-label="Perguntas Frequentes" className="bg-[#f8f9fa] py-16 md:py-20 font-sans">
        <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-[#1a2b3f] text-3xl md:text-4xl mb-8 md:mb-12 font-bold">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Quais serviços a Evidência Assessoria Contábil oferece?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                Oferecemos contabilidade completa, consultoria empresarial, gestão fiscal, folha de pagamento, planejamento tributário e muito mais para empresas de todos os portes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Atendem empresas de fora de Volta Redonda?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                Sim! Atendemos clientes de toda a região e também de outros estados, com atendimento digital e presencial.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Como funciona o atendimento pelo WhatsApp?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                Nosso atendimento via WhatsApp é rápido, personalizado e sem burocracia. Basta clicar no botão de contato e falar diretamente com nossa equipe.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Qual o prazo para abertura de empresa?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                O prazo varia conforme o tipo de empresa e documentação, mas geralmente fica entre 15 a 30 dias úteis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Fazem planejamento tributário?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                Sim! Análise completa e estratégia para redução legal de impostos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-lg md:text-xl font-bold mb-2">Como é feito o acompanhamento mensal?</h3>
              <p className="text-[#1a2b3f] text-sm md:text-base font-normal">
                Relatórios mensais, reuniões de acompanhamento e atendimento via WhatsApp/telefone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" aria-label="Equipe" className="py-16 md:py-20 font-sans">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-[#1a2b3f] text-3xl md:text-4xl mb-8 md:mb-12 font-bold">Nossa Equipe</h2>
          
          {/* Primeira linha: Marcelo e Fábio centralizados */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Marcelo */}
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/marcelo_logo.png" alt="Marcelo Carvalho" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">Marcelo Carvalho</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">CRC: XXXXX</p>
              <p className="text-gray-600 font-normal text-sm md:text-base">Contador Responsável</p>
            </div>

            {/* Fábio */}
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/fabio_logo.png" alt="Fábio Silva" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">Fábio Silva</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">Diretor Financeiro</p>
            </div>
          </div>

          {/* Segunda linha: Jaqueline, André e mais 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
            {/* Jaqueline */}
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center mx-auto">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/jaqueline_logo.png" alt="Jaqueline Ezídio" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">Jaqueline Ezídio</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">Diretora Administrativa</p>
            </div>

            {/* André */}
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center mx-auto">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/andre_logo.png" alt="André Calcagno" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">André Calcagno</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">Diretor de RH</p>
            </div>

            {/* João */}
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center mx-auto">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/joao_logo.jpeg" alt="João Pedro Sanglard" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">João Pedro Sanglard</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">Gerente T.I.</p>
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