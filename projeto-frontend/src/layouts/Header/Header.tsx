import { useContext } from "react";
import { LoginContext } from '../../stores/LoginContext';
import { Button, ButtonGroup } from '@mui/material';
import { Outlet, Link} from 'react-router-dom';

//import image from '../../assets/user-login-icon.png'

import './Header.css'

export default function Header(){
    const { user } = useContext(LoginContext);

    return(
        <>
        <div className="container">
            <div className="side_bar">
                <div id='top-content'>Seja bem-vindo <b>{user.username}</b></div>
                <div id='middle-content'></div>
                <ButtonGroup  orientation="vertical" variant="text" aria-label="Basic button group" sx={{'& .MuiButton-root': {
                color: "#4fc54b", borderColor: "#22b43b", padding: "20px"}}}>
                    <Button component={Link} to="/">Dashboard</Button>
                    <Button component={Link} to="/DonationRegistration">Registro de doações</Button>
                    <Button component={Link} to="/DonationView">Visualização de Doações</Button>
                    {/* <Button component={Link} to="/ItemDetails">Detalhes do Item</Button> */}
                    <Button component={Link} to="/Notifications">Notificações</Button>
                    <Button component={Link} to="/Contacts">Contatos</Button>
                </ButtonGroup>        
            </div>
            <main className="main_content">  
                <Outlet />
            </main> 
        </div>
        </>
    );
}


/*
    Dashboard
    DonationRegistration
    DonationView
    ItemDetails
    Notifications
    Contacts
*/
