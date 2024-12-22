import { Routes, Route } from "react-router-dom"
import Eventos from './pages/eventos/Eventos'
import Meus_eventos from './pages/meus_eventos/Meus_eventos'
import Alertas from './pages/alertas/Alertas'
import Perfil from './pages/perfil/Perfil'
import Festicidades from './pages/festividades/Festividades'
function AppRoutes() {
    return ( 
        <Routes>
        <Route path="/" element={<Festicidades />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/meus_eventos" element={<Meus_eventos />} />
        <Route path="/alertas" element={<Alertas />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
     );
}

export default AppRoutes;