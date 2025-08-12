export default function Home() {
  const ctaButton =
    "relative bg-[#da412c] text-white py-4 px-8 no-underline rounded font-bold transition-colors duration-300 inline-block hover:bg-[#c13625] shadow-lg " +
    "after:content-[''] after:absolute after:left-1/2 after:bottom-3 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-white " +
    "after:transition-all after:duration-300 hover:after:w-3/4";

  // WhatsApp config (usar api.whatsapp.com para garantir que o texto seja enviado)
  const phone = "5524974012116"; // sem o sinal de +
  const defaultMsg = "Olá, eu quero assessoria contábil!";
  const wppLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(defaultMsg)}`;

  return (
    <>
      {/* Hero Section com parallax (bg-fixed em md+) */}
      <section
        id="home"
        aria-label="Início"
        className="relative w-full min-h-[60vh] h-[70vh] md:h-[80vh] flex items-end justify-center bg-[url('/banner.png')] bg-cover bg-center md:bg-fixed font-sans overflow-hidden"
      >
        {/* Overlay para contraste no mobile */}
        <div className="pointer-events-none absolute inset-0 bg-black/20 md:bg-black/10" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pb-14 md:pb-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
            Evidência Assessoria Contábil
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white mb-6 md:mb-8 font-normal drop-shadow">
            Expertise e Inovação para sua Empresa
          </p>
          <a
            href={wppLink}
            className={`${ctaButton} w-full sm:w-auto text-center`}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-[#1a2b3f] text-3xl md:text-4xl mb-4 font-bold">Sobre a Evidência Assessoria Contábil</h2>
              <p className="mb-4 text-base md:text-lg text-[#1a2b3f] font-normal">
                Com ampla experiência no mercado, a Evidência Assessoria Contábil alia conhecimento técnico e inovação
                para entregar soluções contábeis sob medida para empresas de todos os portes e setores.
              </p>
              <p className="mb-4 text-base md:text-lg text-[#1a2b3f] font-normal">
                Nosso foco é facilitar a gestão financeira e contábil, proporcionando clareza e segurança para que você
                dedique seu tempo ao crescimento do negócio.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[280px] md:h-[400px] flex items-stretch">
              <img
                src="/about.jpg"
                alt="Equipe da Evidência Assessoria Contábil"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ maxHeight: 400 }}
              />
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
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Contabilidade Completa</h3>
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
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Trabalhista e Folha de Pagamento</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Gestão de admissões, demissões, folha e obrigações trabalhistas com precisão e compliance.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg text-center shadow-lg transition-transform duração-300 hover:-translate-y-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl md:text-2xl">
                💡
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Consultoria Empresarial</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">
                Análise de viabilidade, planejamento estratégico e suporte para expansão do negócio.
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
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center">
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/marcelo_logo.png" alt="Contador Responsável" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">Marcelo Carvalho</h3>
              <p className="text-gray-600 font-normal text-sm md:text-base">CRC: XXXXX</p>
              <p className="text-gray-600 font-normal text-sm md:text-base">Contador Responsável</p>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(9)].map((_, i) => (
              <div className="w-full max-w-[320px] sm:max-w-[250px] bg-[#f8f9fa] rounded-lg p-6 md:p-8 shadow-md text-center mx-auto" key={i}>
                <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {i === 0 ? (
                    <img src="/fabio_logo.png" alt="Fábio - Equipe" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#666] text-sm md:text-base font-medium">[FOTO 200x200px]</span>
                  )}
                </div>
                <h3 className="font-bold mb-1 md:mb-2 text-[#1a2b3f]">{i === 0 ? 'Fábio Silva' : `Nome ${i + 1}`}</h3>
                <p className="text-gray-600 font-normal text-sm md:text-base">{i === 0 ? 'Diretor Financeiro' : 'Cargo'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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