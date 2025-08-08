export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full min-h-[500px] h-[80vh] flex items-end justify-center bg-[url('/banner.png')] bg-cover bg-center font-sans overflow-hidden"
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
            {/* Texto */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-[#1a2b3f] text-4xl mb-4 font-bold">Sobre a Evidência Assessoria Contábil</h2>
              <p className="mb-4 text-base text-[#1a2b3f] font-normal">
                Com ampla experiência no mercado, a Evidência Assessoria Contábil alia conhecimento técnico e inovação para entregar soluções contábeis sob medida para empresas de todos os portes e setores.
              </p>
              <p className="mb-4 text-base text-[#1a2b3f] font-normal">
                Nosso foco é facilitar a gestão financeira e contábil, proporcionando clareza e segurança para que você dedique seu tempo ao crescimento do negócio.
              </p>
            </div>
            {/* Imagem ocupa 100% da coluna */}
            <div className="w-full h-[300px] md:h-[400px] flex items-stretch">
              <img
                src="/about.jpg"
                alt="Sobre a Evidência Assessoria Contábil"
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ maxHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#1a2b3f] py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-white text-4xl mb-12 font-bold">Nossos Serviços Contábeis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📊
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Contabilidade Completa</h3>
              <p className="text-gray-600 font-normal">Escrituração contábil, balanços patrimoniais e relatórios gerenciais para decisões estratégicas.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📋
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Fiscal e Tributário</h3>
              <p className="text-gray-600 font-normal">Apuração de impostos, planejamento tributário e entrega de obrigações acessórias com eficiência.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                👥
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Trabalhista e Folha de Pagamento</h3>
              <p className="text-gray-600 font-normal">Gestão de admissões, demissões, folha e obrigações trabalhistas com precisão e compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#da412c] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                💡
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Consultoria Empresarial</h3>
              <p className="text-gray-600 font-normal">Análise de viabilidade, planejamento estratégico e suporte para expansão do negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAC Section */}
      <section id="sac" className="bg-[#f8f9fa] py-20 font-sans">
        <div className="max-w-[900px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12 font-bold">Perguntas Frequentes (FAQ)</h2>
          <div className="space-y-8">
            {/* Pergunta 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-xl font-bold mb-2">Quais serviços a Evidência Assessoria Contábil oferece?</h3>
              <p className="text-[#1a2b3f] text-base font-normal">
                Oferecemos contabilidade completa, consultoria empresarial, gestão fiscal, folha de pagamento, planejamento tributário e muito mais para empresas de todos os portes.
              </p>
            </div>
            {/* Pergunta 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-xl font-bold mb-2">Atendem empresas de fora de Volta Redonda?</h3>
              <p className="text-[#1a2b3f] text-base font-normal">
                Sim! Atendemos clientes de toda a região e também de outros estados, com atendimento digital e presencial.
              </p>
            </div>
            {/* Pergunta 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-[#da412c] text-xl font-bold mb-2">Como funciona o atendimento pelo WhatsApp?</h3>
              <p className="text-[#1a2b3f] text-base font-normal">
                Nosso atendimento via WhatsApp é rápido, personalizado e sem burocracia. Basta clicar no botão de contato e falar diretamente com nossa equipe.
              </p>
            </div>
            {/* Adicione mais perguntas conforme necessário */}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-center text-[#1a2b3f] text-4xl mb-12 font-bold">Nossa Equipe</h2>
          <div className="flex justify-center mb-12">
            <div className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center">
              <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/marcelo_logo.png"
                  alt="Contador Responsável"
                  className="w-full h-full object-cover"
                  style={{ maxWidth: 200, maxHeight: 200 }}
                />
              </div>
              <h3 className="font-bold mb-2 text-[#1a2b3f]">Marcelo Carvalho</h3>
              <p className="text-gray-600 font-normal">CRC: XXXXX</p>
              <p className="text-gray-600 font-normal">Contador Responsável</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, i) => (
              <div
                className="max-w-[250px] bg-[#f8f9fa] rounded-lg p-8 shadow-md text-center mx-auto"
                key={i}
              >
                <div className="w-[200px] h-[200px] bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {i === 0 ? (
                    <img
                      src="/fabio_logo.png"
                      alt="Fábio - Equipe"
                      className="w-full h-full object-cover"
                      style={{ maxWidth: 200, maxHeight: 200 }}
                    />
                  ) : (
                    <span className="text-[#666] text-base font-medium">[FOTO 200x200px]</span>
                  )}
                </div>
                <h3 className="font-bold mb-2 text-[#1a2b3f]">
                  {i === 0 ? "Fábio Silva" : `Nome ${i + 1}`}
                </h3>
                <p className="text-gray-600 font-normal">
                  {i === 0 ? "Diretor Financeiro" : "Cargo"}
                </p>
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