// src/app/page.tsx
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Soluções Contábeis Completas</h1>
          <p>Expertise e confiança para o crescimento do seu negócio</p>
          <a href="#contact" className="cta-button">Fale Conosco</a>
          <div className="hero-banner">
            [BANNER PRINCIPAL - 1200x300px]
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre Nós</h2>
              <p>Com mais de X anos de experiência no mercado, nossa contabilidade oferece soluções personalizadas para empresas de todos os portes.</p>
              <p>Nossa missão é proporcionar tranquilidade e segurança jurídica para que você possa focar no que realmente importa: o crescimento do seu negócio.</p>
              <p>Contamos com uma equipe especializada e atualizada com as mais recentes mudanças na legislação.</p>
            </div>
            <div className="about-image">
              [IMAGEM SOBRE - 500x400px]
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Contabilidade</h3>
              <p>Escrituração contábil completa, balanços e demonstrações financeiras.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Fiscal</h3>
              <p>Apuração de impostos, obrigações acessórias e planejamento tributário.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👥</div>
              <h3>Trabalhista</h3>
              <p>Folha de pagamento, admissões, demissões e obrigações trabalhistas.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Consultoria</h3>
              <p>Orientação empresarial, análise de viabilidade e consultoria estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <div className="team-leader">
            <div className="team-member">
              <div className="member-photo">[FOTO 200x200px]</div>
              <h3>Nome do Contador Responsável</h3>
              <p>CRC: XXXXX</p>
              <p>Contador Responsável</p>
            </div>
          </div>
          <div className="team-grid">
            {/* Repita para cada membro */}
            {[...Array(9)].map((_, i) => (
              <div className="team-member" key={i}>
                <div className="member-photo">[FOTO 200x200px]</div>
                <h3>Nome {i + 1}</h3>
                <p>Cargo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Fale com a nossa equipe</h2>
          <p className="contact-description">
            Atendimento rápido e personalizado pelo WhatsApp. Clique no botão abaixo e tire suas dúvidas!
          </p>
          <a
            href="https://wa.me/5524999999999?text=Olá! Gostaria de saber mais sobre os serviços de contabilidade."
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-icon">📱</span>
            Conversar pelo WhatsApp
          </a>
          <div className="contact-info-simple">
            <span>Rua Exemplo, 123 - Volta Redonda/RJ</span> |
            <span>(24) 3333-4444</span> |
            <span>contato@contabilidade.com.br</span>
          </div>
        </div>
      </section>
    </>
  );
}