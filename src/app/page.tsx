export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="bg-[#1a2b3f] text-white text-center pt-[150px] pb-[100px]"
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-5xl mb-4">Soluções Contábeis Completas</h1>
          <p className="text-lg mb-8">
            Expertise e confiança para o crescimento do seu negócio
          </p>
          <a
            href="#contact"
            className="bg-[#da412c] text-white py-4 px-8 no-underline rounded font-bold transition-colors duration-300 inline-block hover:bg-[#c13625]"
          >
            Fale Conosco
          </a>
          <div className="w-full h-[300px] bg-[#f0f0f0] my-12 rounded-lg flex items-center justify-center text-[#666] text-lg">
            [BANNER PRINCIPAL - 1200x300px]
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#1a2b3f] text-4xl mb-4">Sobre Nós</h2>
              <p className="mb-4 text-base">
                Com mais de X anos de experiência no mercado, nossa contabilidade oferece soluções personalizadas para empresas de todos os portes.
              </p>
              <p className="mb-4 text-base">
                Nossa missão é proporcionar tranquilidade e segurança jurídica para que você possa focar no que realmente importa: o crescimento do seu negócio.
              </p>
              <p className="mb-4 text-base">
                Contamos com uma equipe especializada e atualizada com as mais recentes mudanças na legislação.
              </p>
            </div>
            <div className="w-full h-[400px] bg-[#f0f0f0] rounded-lg flex items-center justify-center text-[#666]">
              [IMAGEM SOBRE - 500x400px]
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#f8f9fa] py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📊
              </div>
              <h3 className="font-bold mb-2">Contabilidade</h3>
              <p>Escrituração contábil completa, balanços e demonstrações financeiras.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📋
              </div>
              <h3 className="font-bold mb-2">Fiscal</h3>
              <p>Apuração de impostos, obrigações acessórias e planejamento tributário.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                👥
              </div>
              <h3 className="font-bold mb-2">Trabalhista</h3>
              <p>Folha de pagamento, admissões, demissões e obrigações trabalhistas.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                💡
              </div>
              <h3 className="font-bold mb-2">Consultoria</h3>
              <p>Orientação empresarial, análise de viabilidade e consultoria estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12">Nossa Equipe</h2>
          <div className="flex justify-center mb-12">
            <div className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center">
              <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center text-[#666] text-base object-cover overflow-hidden">
                [FOTO 200x200px]
              </div>
              <h3 className="font-bold mb-2">Nome do Contador Responsável</h3>
              <p>CRC: XXXXX</p>
              <p>Contador Responsável</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center" key={i}>
                <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center text-[#666] text-base object-cover overflow-hidden">
                  [FOTO 200x200px]
                </div>
                <h3 className="font-bold mb-2">Nome {i + 1}</h3>
                <p>Cargo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#1a2b3f] text-white text-center py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl mb-4">Fale com a nossa equipe</h2>
          <p className="text-base mb-10">
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
          <div className="mt-8 text-base text-[#d1d5db]">
            <span className="mx-2">Rua Exemplo, 123 - Volta Redonda/RJ</span> |
            <span className="mx-2">(24) 3333-4444</span> |
            <span className="mx-2">contato@contabilidade.com.br</span>
          </div>
        </div>
      </section>
    </>
  );
}