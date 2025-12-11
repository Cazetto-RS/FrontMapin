export default function Landing() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo">
          <img src=".src/components/img/logo.png" alt="" />
        </div>

        <ul className="nav-links">
          <div className="nav-actions">
            <li><a href="#" class="nav-actions-text">Recursos</a></li>
            <li><a href="#" class="nav-actions-text">Plataforma</a></li>
            <li><a href="#" class="nav-actions-text">Segurança</a></li>
          </div>

          <div className="nav-actions">
            <li><a href="/login" className="nav-actions-text nav-login">Entrar</a></li>
            <li><a href="/login" className="nav-cta">Começar agora</a></li>
          </div>
        </ul>
      </nav>

      <div className="lading-introduction">
        <div className="div-card-lading-introduction">
          <p className="card-lading-introduction">Rastreamente em tempo real</p>
        </div>
        <h1 className="titulo-lading-introduction">Gestão inteligente para sua empresa</h1>
        <p className="descricao-lading-introduction">Monitore, rastreie e gerencie seus ativos em tempo real com a solução empresarial mais avançada do mercado.</p>
        <div className="action-lading-introduction">
          <a href="" className="btn-entrar-lading-introduction">Entrar Agora</a>
          <a href="" className="btn-ver-lading-introduction">Ver Plataforma</a>
        </div>
      </div>

      <div className="lading-recursos">
        <h2 className="titulo-lading-recursos">Recursos poderosos para sua operação</h2>
        <p className="descricao-lading-recursos">Tudo que você precisa para gerenciar rastreamento e monitoramento em uma única plataforma</p>
        <div className="div-card-lading-recursos">
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Organização</label>
            <p>Mantenha produtos, categorias e locais organizados em um só lugar, com controle total e fácil acesso.</p>
          </div>
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Eficiência</label>
            <p>Dashboards completos com indicadores reais do seu negócio para decisões mais rápidas e assertivas.</p>
          </div>
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Agilidade</label>
            <p>Processos simplificados que economizam tempo e eliminam tarefas repetitivas no dia a dia.</p>
          </div>
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Integração</label>
            <p>Conecte todos os setores da empresa em uma plataforma unificada e centralizada.</p>
          </div>
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Segurança</label>
            <p>Controle total de acessos com níveis de permissão configuráveis para cada funcionário.</p>
          </div>
          <div className="card-lading-recursos">
            <img src="" alt="" />
            <label>Gestão de Pessoas</label>
            <p>Gerencie funcionários e equipes com facilidade, atribuindo responsabilidades e monitorando atividades.</p>
          </div>
        </div>
      </div>
    </div>
  );
}