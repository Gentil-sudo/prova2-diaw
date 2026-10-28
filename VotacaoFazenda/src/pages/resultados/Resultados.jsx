import Header from "../components/Header";
import { obterVotos } from './services/votacaoService';
import { listarNaRoca } from './services/votacaoService';
import { zerarVotos } from './services/votacaoService';
function Resultado(){

    const votos = obterVotos();
    const naRoca = listarNaRoca();
    const zerar = zerarVotos();

    return <>
    <Header/>
    <main>
        <h1>Parcial da eliminação</h1>
        <h1></h1><p>votos computados</p>
        <div>
        <section className="home-roca">
        <h2>Na roça desta semana</h2>
        <ul className="home-roca-lista">
          {naRoca.map((p) => (
            <li key={p.id}>
              <img src={p.foto} alt={p.nome} />
              <span>{p.nome}</span>
            </li>
          ))}
        </ul>
      </section>
      <button onClick={zerar}>Zerar votação</button>
        </div>
    </main>

    </>
}

export default Resultado;