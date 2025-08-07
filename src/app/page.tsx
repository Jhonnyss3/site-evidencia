export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-[500px] h-[80vh] flex items-end justify-center bg-[url('/banner.jpg')] bg-cover bg-center font-sans overflow-hidden"
      >
        {/* Conteúdo centralizado na parte de baixo */}
        <div className="relative z-10 w-full max-w-[1200px] px-8 pb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Evidência Assessoria Contábil
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 font-normal drop-shadow">
            Expertise e Inovação para sua Empresa
          </p>
          <a
            href="#contact"
            className="relative bg-[#da412c] text-white py-4 px-8 no-underline rounded font-bold transition-colors duration-300 inline-block hover:bg-[#c13625] shadow-lg
              after:content-[''] after:absolute after:left-1/2 after:bottom-3 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-white
              after:transition-all after:duration-300 hover:after:w-3/4"
            style={{ overflow: 'hidden' }}
          >
            Fale Conosco
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a2b3f] text-4xl mb-4 font-bold">Sobre Nós</h2>
              <p className="mb-4 text-base text-[#1a2b3f] font-normal">
                Com mais de X anos de experiência no mercado, nossa contabilidade oferece soluções personalizadas para empresas de todos os portes.
              </p>
              <p className="mb-4 text-base text-[#1a2b3f] font-normal">
                Nossa missão é proporcionar tranquilidade e segurança jurídica para que você possa focar no que realmente importa: o crescimento do seu negócio.
              </p>
              <p className="mb-4 text-base text-[#1a2b3f] font-normal">
                Contamos com uma equipe especializada e atualizada com as mais recentes mudanças na legislação.
              </p>
            </div>
            <div className="w-full h-[400px] bg-[#f0f0f0] rounded-lg flex items-center justify-center text-[#666] font-medium">
              [IMAGEM SOBRE - 500x400px]
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#f8f9fa] py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12 font-bold">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📊
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Contabilidade</h3>
              <p className="text-gray-600 font-normal">Escrituração contábil completa, balanços e demonstrações financeiras.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📋
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Fiscal</h3>
              <p className="text-gray-600 font-normal">Apuração de impostos, obrigações acessórias e planejamento tributário.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                👥
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Trabalhista</h3>
              <p className="text-gray-600 font-normal">Folha de pagamento, admissões, demissões e obrigações trabalhistas.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                💡
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Consultoria</h3>
              <p className="text-gray-600 font-normal">Orientação empresarial, análise de viabilidade e consultoria estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12 font-bold">Nossa Equipe</h2>
          <div className="flex justify-center mb-12">
            <div className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center">
              <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center text-[#666] text-base object-cover overflow-hidden font-medium">
                [FOTO 200x200px]
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Nome do Contador Responsável</h3>
              <p className="text-gray-600 font-normal">CRC: XXXXX</p>
              <p className="text-gray-600 font-normal">Contador Responsável</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center mx-auto" key={i}>
                <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center text-[#666] text-base object-cover overflow-hidden font-medium">
                  [FOTO 200x200px]
                </div>
                <h3 className="font-bold mb-2 text-[#1a2b3f]">Nome {i + 1}</h3>
                <p className="text-gray-600 font-normal">Cargo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#1a2b3f] text-white text-center py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl mb-4 font-bold">Fale com a nossa equipe</h2>
          <p className="text-base mb-10 font-normal">
            Atendimento rápido e personalizado pelo WhatsApp. Clique no botão abaixo e tire suas dúvidas!
          </p>
          <a
            href="https://wa.me/5524999999999?text=Olá! Gostaria de saber mais sobre os serviços de contabilidade."
            className="bg-[#25D366] text-white py-5 px-10 rounded-full font-bold text-lg no-underline inline-flex items-center gap-3 transition-all duration-300 mb-8 shadow-lg hover:bg-[#20b358] hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-2xl">📱</span>
            Conversar pelo WhatsApp
          </a>
          <div className="mt-8 text-base text-[#d1d5db] font-normal">
            <span className="mx-2">Rua Exemplo, 123 - Volta Redonda/RJ</span> |
            <span className="mx-2">(24) 3333-4444</span> |
            <span className="mx-2">contato@contabilidade.com.br</span>
          </div>
        </div>
      </section>
    </>
  );
}