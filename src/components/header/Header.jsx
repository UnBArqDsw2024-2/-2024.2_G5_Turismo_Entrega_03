import Logo from '../../assets/logo-horizontal.svg'
import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <section>
                <img
                    src={Logo}
                    alt="Imagem de ilustração de um globo azul com um avião o sobrevoando" />
                <h1>Livros Vai na Web</h1>
            </section><nav>
                <ul>
                    <li><Link to="/">Festicidades</Link></li>
                    <li><Link to="/eventos">Eventos</Link></li>
                    <li><Link to="/meus_eventos">Meus eventos</Link></li>
                    <li><Link to="/alertas">Alertas</Link></li>
                    <li><Link to="/perfil">Perfil</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;