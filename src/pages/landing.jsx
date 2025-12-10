export default function Landing() {
  return (
    <div className="bg-light min-h-screen flex flex-col font-inter">
      
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center">
        <h1 className="font-lobster text-4xl text-primary tracking-wide">
          MAPIN
        </h1>

        <button
          onClick={() => (window.location.href = "/login")}
          className="bg-primary hover:bg-accent transition-all text-white px-6 py-2 rounded-full font-medium"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-16 px-4">
        <h2 className="text-5x1 md:text-8xl font-lobster text-primary mb-4 drop-shadow-sm">
          Gestão inteligente para sua empresa
        </h2>

        <p className="text-dark max-w-2xl text-lg md:text-xl opacity-80">
          O <strong>MAPIN</strong> é uma plataforma inteligente para empresas que desejam
          controle total sobre seus produtos, categorias, locais e funcionários —
          com dashboards completos e navegação fluida.
        </p>

        <button
          onClick={() => (window.location.href = "/login")}
          className="mt-8 bg-primary hover:bg-accent transition-all text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Começar agora
        </button>
      </section>

      {/* Valores */}
      <section className="mt-24 px-6 md:px-16">
        <h3 className="text-3xl font-lobster text-primary mb-10 text-center">
          Os pilares do MAPIN
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h4 className="text-2xl font-semibold text-dark mb-2">Organização</h4>
            <p className="opacity-70">Seu estoque em perfeita ordem.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h4 className="text-2xl font-semibold text-dark mb-2">Produtividade</h4>
            <p className="opacity-70">Fluxos mais rápidos e eficientes.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h4 className="text-2xl font-semibold text-dark mb-2">Eficiência</h4>
            <p className="opacity-70">Menos erros, mais resultados.</p>
          </div>
        </div>
      </section>

      {/* Sobre o MAPIN */}
      <section className="mt-24 px-6 md:px-24 text-center">
        <h3 className="text-3xl font-lobster text-primary mb-6">
          O que é o MAPIN?
        </h3>

        <p className="text-dark text-lg opacity-80 max-w-3xl mx-auto">
          O MAPIN é um sistema completo para empresas que precisam de controle real
          sobre produtos, categorias, locais e equipes. Com login para usuário e
          empresa, dashboards inteligentes, gerenciamento intuitivo e interface
          moderna, o MAPIN é ideal para negócios que querem evoluir.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-6 text-center text-sm opacity-60 text-dark">
        © {new Date().getFullYear()} MAPIN — Todos os direitos reservados.
      </footer>
    </div>
  );
}