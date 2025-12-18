import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Landing() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav__brand">
          <img
            src="./src/components/img/logo.png"
            className="nav__logo"
            alt="Logo da empresa"
          />
        </div>

        <ul className="nav__menu">
          <div className="nav__group">
            <li className="nav__item">
              <a href="#" className="nav__link">Recursos</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Plataforma</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">Segurança</a>
            </li>
          </div>

          <div className="nav__group">
            <li className="nav__item">
              <a href="/login" className="nav__link nav__link--login">Entrar</a>
            </li>
            <li className="nav__item">
              <a href="/login" className="btn btn--primary">Começar agora</a>
            </li>
            <div className="darkmode-item__icon-wrapper">
              <img className="darkmode-item__icon" src="./src/components/icons/darkmode.svg" alt="darkmode" id="toggle-theme" onClick={toggleTheme} />
            </div>
          </div>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__tag">
          <img
            src="./src/components/icons/pink lighting.svg"
            alt="Ícone"
            className="hero__tag-icon"
          />
          <span className="hero__tag-text">Rastreamente em tempo real</span>
        </div>

        <h1 className="hero__title">Gestão inteligente para sua empresa</h1>

        <p className="hero__description">
          Monitore, rastreie e gerencie seus ativos em tempo real com a solução empresarial mais avançada do mercado.
        </p>

        <div className="hero__actions">
          <a href="#" className="btn btn--primary btn--lg">Entrar Agora</a>
          <a href="#" className="btn btn--outline btn--lg">Ver Plataforma</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2 className="section__title">Recursos poderosos para sua operação</h2>
          <p className="section__description">
            Tudo que você precisa para gerenciar rastreamento e monitoramento em uma única plataforma
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/box.svg" alt="Organização" />
            </div>
            <h3 className="feature-card__title">Organização</h3>
            <p className="feature-card__description">
              Mantenha produtos, categorias e locais organizados em um só lugar, com controle total e fácil acesso.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/chart.svg" alt="Eficiência" />
            </div>
            <h3 className="feature-card__title">Eficiência</h3>
            <p className="feature-card__description">
              Dashboards completos com indicadores reais do seu negócio para decisões mais rápidas e assertivas.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/lighting.svg" alt="Agilidade" />
            </div>
            <h3 className="feature-card__title">Agilidade</h3>
            <p className="feature-card__description">
              Processos simplificados que economizam tempo e eliminam tarefas repetitivas no dia a dia.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/map.svg" alt="Integração" />
            </div>
            <h3 className="feature-card__title">Integração</h3>
            <p className="feature-card__description">
              Conecte todos os setores da empresa em uma plataforma unificada e centralizada.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/shield.svg" alt="Segurança" />
            </div>
            <h3 className="feature-card__title">Segurança</h3>
            <p className="feature-card__description">
              Controle total de acessos com níveis de permissão configuráveis para cada funcionário.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon-wrapper">
              <img className="feature-card__icon" src="./src/components/icons/people.svg" alt="Gestão de Pessoas" />
            </div>
            <h3 className="feature-card__title">Gestão de Pessoas</h3>
            <p className="feature-card__description">
              Gerencie funcionários e equipes com facilidade, atribuindo responsabilidades e monitorando atividades.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security">
        <div className="section-header">
          <div className="security__tag">
            <img
              src="./src/components/icons/lock.png"
              alt="Cadeado"
              className="security__tag-icon"
            />
            <span className="security__tag-text">Segurança de nível empresarial</span>
          </div>

          <h2 className="section__title">Seus dados estão seguros</h2>
          <p className="section__description">
            Implementamos as melhores práticas de segurança para proteger suas informações
          </p>
        </div>

        <div className="security-grid">
          <div className="security-item">
            <div className="security-item__header">
              <div className="security-item__icon-wrapper">
                <img className="security-item__icon" src="./src/components/icons/shield.svg" alt="Criptografia" />
              </div>
              <h3 className="security-item__title">Criptografia end-to-end</h3>
            </div>
            <p className="security-item__description">
              Todos os dados são criptografados em trânsito e em repouso
            </p>
          </div>

          <div className="security-item">
            <div className="security-item__header">
              <div className="security-item__icon-wrapper">
                <img className="security-item__icon" src="./src/components/icons/shield.svg" alt="LGPD" />
              </div>
              <h3 className="security-item__title">Conformidade LGPD</h3>
            </div>
            <p className="security-item__description">
              100% em conformidade com a legislação brasileira de dados
            </p>
          </div>

          <div className="security-item">
            <div className="security-item__header">
              <div className="security-item__icon-wrapper">
                <img className="security-item__icon" src="./src/components/icons/shield.svg" alt="Autenticação" />
              </div>
              <h3 className="security-item__title">Autenticação multi-fator</h3>
            </div>
            <p className="security-item__description">
              Proteção adicional com verificação em duas etapas
            </p>
          </div>

          <div className="security-item">
            <div className="security-item__header">
              <div className="security-item__icon-wrapper">
                <img className="security-item__icon" src="./src/components/icons/shield.svg" alt="Backups" />
              </div>
              <h3 className="security-item__title">Backups automáticos</h3>
            </div>
            <p className="security-item__description">
              Seus dados sempre seguros com backups redundantes
            </p>
          </div>
        </div>

      </section>
      <section>
        <div className="login">
          <h2 className="section__title">Pronto para transformar seu gerenciamento?</h2>
          <p className="section__description">
            Junte-se ao MAPIN para gerenciar suas operações com eficiência e segurança.
          </p>
          <div>
            <a href="#" className="btn btn--primary btn--lg btn--login">Entrar Agora</a>
          </div>
        </div>
      </section>
    </div>
  );
}