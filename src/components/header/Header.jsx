import Logo from '../../assets/logo-horizontal.svg'
import { Link } from "react-router-dom"
import {AppBar, Toolbar, Typography, Button} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return (

            

            <AppBar position='static'color=''>

                <Toolbar >
                    <Typography component='div' sx={{flexGrow: 1,}}>

                        <section>
                        <img
                            src={Logo}
                            alt="Imagem de ilustração de um globo azul com um avião o sobrevoando"/>
                        </section>

                    </Typography>

                    <stack direction ='row' spacing={2}>
                        <Button color="inherit" href='/'>Festividades</Button>
                        <Button color="inherit" href="/eventos">Eventos</Button>
                        <Button color="inherit" href="/meus_eventos">Meus eventos</Button>
                        <Button color="inherit" href="/alertas"><NotificationsNoneIcon></NotificationsNoneIcon></Button>
                        <Button color="inherit" href="/perfil"><AccountCircleIcon></AccountCircleIcon></Button>
                    </stack>

                </Toolbar>

            </AppBar>

    );
}

export default Header;