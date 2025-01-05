import Logo from '../../assets/logo-horizontal.svg'
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return (



        <AppBar position='static' sx={{ backgroundColor: '#EAF1F4', fontFamily: 'Roboto, Arial, sans-serif' }}>

            <Toolbar >
                <Typography component='div' sx={{ flexGrow: 2 }}>

                    <section>
                        <img
                            src={Logo}
                            alt="Imagem de ilustração de um globo azul com um avião o sobrevoando" />
                    </section>

                </Typography>

                <stack direction='row' spacing={2} >
                    <Link to="/"><Button sx={{ color: 'black', fontWeight: 'bold' }} >Festividades</Button></Link>
                    <Link to="/eventos"><Button sx={{ color: "#555" }} >Eventos</Button></Link>
                    <Link to="/meus_eventos"><Button sx={{ color: "#555" }} >Meus eventos</Button></Link>
                    <Link to="/alertas"><Button sx={{ color: 'black' }} ><NotificationsNoneIcon></NotificationsNoneIcon></Button></Link>
                    <Link to="/perfil"><Button sx={{ color: 'black' }} on ><AccountCircleIcon></AccountCircleIcon></Button></Link>
                </stack>

            </Toolbar>

        </AppBar>

    );
}

export default Header;