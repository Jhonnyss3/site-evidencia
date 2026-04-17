export default function Home() {
  const wppLink =
    'https://wa.me/5524974012116?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Evid%C3%AAncia.';

  return (
    <div
      className="page-bg page-grain relative h-screen flex flex-col overflow-hidden"
      style={{ color: 'var(--isabelline)', fontWeight: 300, letterSpacing: '0.01em' }}
    >
      {/* Marcas d'água */}
      <svg
        className="fixed opacity-[0.035] pointer-events-none z-0 top-[8%] -left-[3%] w-[320px] -rotate-12"
        viewBox="0 0 100 110"
        fill="none"
        stroke="#DA412C"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M10 5 L90 5 L90 70 L50 105 L10 70 Z" />
      </svg>
      <svg
        className="fixed opacity-[0.035] pointer-events-none z-0 bottom-[5%] -right-[4%] w-[380px] rotate-[8deg]"
        viewBox="0 0 100 110"
        fill="none"
        stroke="#DA412C"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M10 5 L90 5 L90 70 L50 105 L10 70 Z" />
      </svg>

      {/* Header */}
      <header className="relative z-[2] px-10 py-6 flex items-center justify-between max-sm:px-6 max-sm:py-4">
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-normal"
          style={{ color: 'var(--text-muted)' }}
        >
          <span
            className="inline-block w-[6px] h-[6px] rounded-full mr-[10px] align-middle animate-pulse-dot"
            style={{ background: 'var(--chilli-red)' }}
          />
          Em desenvolvimento
        </span>
        <span
          className="text-[10px] tracking-[0.35em] uppercase font-normal"
          style={{ color: 'var(--text-muted)' }}
        >
          2026
        </span>
      </header>

      {/* Main */}
      <main className="relative z-[2] flex-1 flex flex-col items-center justify-center text-center px-6 py-4">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/evidencia_nofound.svg"
          alt="Evidência Assessoria Contábil"
          className="w-[110px] h-auto mb-6 animate-fade-up-0 max-sm:w-[82px] max-sm:mb-4"
        />

        <div className="max-w-[720px] animate-fade-up-1">
          <h1
            className="font-extralight mb-1.5 max-sm:tracking-[0.24em]"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              letterSpacing: '0.32em',
              paddingLeft: '0.32em',
            }}
          >
            EVIDÊNCIA
          </h1>
          <p
            className="font-normal mb-8 max-sm:mb-6"
            style={{
              fontSize: 'clamp(10px, 1.2vw, 12px)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: 'var(--chilli-red)',
            }}
          >
            Assessoria Contábil
          </p>

          <div
            className="h-px mx-auto mb-6 animate-expand-line"
            style={{ background: 'var(--chilli-red)', width: '48px' }}
          />

          <p
            className="font-light leading-[1.55] max-w-[620px] mx-auto mb-8 animate-fade-up-2 max-sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              color: 'var(--text-soft)',
              textWrap: 'pretty',
            }}
          >
            Em breve nosso site estará disponível.
            <br />
            Por enquanto,{' '}
            <strong style={{ color: 'var(--isabelline)', fontWeight: 500 }}>
              entre em contato diretamente conosco.
            </strong>
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-up-3">
            {/* E-mail */}
            <a
              className="contact-btn"
              href="mailto:contato@evidenciaassessoria.com.br"
              aria-label="Enviar e-mail"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="btn-label">
                <small>E-mail</small>
                <span>contato@evidenciaassessoria.com.br</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              className="contact-btn"
              href={wppLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="btn-label">
                <small>WhatsApp</small>
                <span>(24) 97401-2116</span>
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-[2] px-10 py-5 text-center text-[10px] tracking-[0.3em] uppercase font-normal max-sm:px-6 max-sm:py-4"
        style={{ color: 'var(--text-muted)' }}
      >
        Evidência Assessoria Contábil{' '}
        <span style={{ color: 'var(--chilli-red)' }}>·</span> Todos os direitos reservados
      </footer>
    </div>
  );
}
