import Header from './components/Header'
import './App.css'
import Aramuni from '../public/fazendeiro.jpg'
import { listarNaRoca } from './services/votacaoService';
import { Link } from 'react-router-dom';

function App() {

  const naRoca = listarNaRoca();
  return (
    <>
        <Header />
     
      <main className='home'>
        <div className='home-hero'>
          <div className='fazendeiro'>
            <div>
              <img src={Aramuni} className='img-fazendeiro' />
              <figcaption>Fazendeiro João Paulo</figcaption>
            </div>
            <div className='balao'>
              <h1>Ô de casa! Aqui quem manda é o fazendeiro.</h1>
              <p>Três peões foram parar na roça esta semana. só um volta para casa, e quem decide é ocê. Pode votar quantas vezes quiser</p>
              <div className='botoes'>
                <a href="/votacao" className="botao botao-principal">Votar agora</a>
                <a href="/resultado" className="botao botao-secundario">Ver parcial</a>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
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
      </main>
      <footer className='footer'>DIAW PUC MINAS</footer>
    </>
  )
}

export default App
