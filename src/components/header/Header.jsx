import Logo from '../../assets/logo-horizontal.svg'
import { Link } from "react-router-dom"
import {AppBar, Toolbar, Typography, Button} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return (

            

            <AppBar position='static' sx={{ backgroundColor: '#EAF1F4', fontFamily:'Roboto, Arial, sans-serif' }}>

                <Toolbar >
                    <Typography component='div' sx={{flexGrow: 2}}>

                        <section>
                        <img
                            src={Logo}
                            alt="Imagem de ilustração de um globo azul com um avião o sobrevoando"/>
                        </section>

                    </Typography>

                    <stack direction ='row' spacing={2} >
                        <Button sx={{color: 'black', fontWeight:'bold'}}  href='/'>Festividades</Button>
                        <Button sx={{color: "#555"}} href="/eventos">Eventos</Button>
                        <Button sx={{color: "#555"}} href="/meus_eventos">Meus eventos</Button>
                        <Button sx={{color: 'black'}} href="/alertas"><NotificationsNoneIcon></NotificationsNoneIcon></Button>
                        <Button sx={{color: 'black'}}on  href="/perfil"><AccountCircleIcon></AccountCircleIcon></Button>
                    </stack>

                </Toolbar>

            </AppBar>

    );
}

export default Header;