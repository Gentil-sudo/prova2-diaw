

function Header() {
  return (
    <header className="topo">
      <a to="/" className="topo-marca">
        <img src="/logo-fazenda.jpg" alt="A Fazenda" className="topo-logo" />
        <span className="topo-titulo">Votação 2026</span>
      </a>

      <nav className="topo-menu">
        <a to="/" end>Início</a>
        <a to="/votacao">Votar</a>
        <a to="/resultado">Resultado</a>
      </nav>
    </header>
  );
}

export default Header;
