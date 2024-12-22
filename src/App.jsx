import Logo from './assets/logo-horizontal.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Eventos from './pages/eventos/Eventos'
import Meus_eventos from './pages/meus_eventos/Meus_eventos'
import Alertas from './pages/alertas/Alertas'
import Perfil from './pages/perfil/Perfil'
import Festicidades from './pages/festividades/Festividades'
import './App.scss'

function App() {

  return (
    <BrowserRouter>
    <section >
          <img
            src={Logo}
            alt="Imagem de ilustração de um globo azul com um avião o sobrevoando"
          />
          <h1>Livros Vai na Web</h1>
        </section>
      <nav>
        <ul>
          <li><Link to="/">Festicidades</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
          <li><Link to="/meus_eventos">Meus eventos</Link></li>
          <li><Link to="/alertas">Alertas</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Festicidades />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/meus_eventos" element={<Meus_eventos />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
