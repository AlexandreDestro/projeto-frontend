import { Button, ButtonGroup } from '@mui/material';
import { Outlet, Link} from 'react-router-dom';

import './Header.css'

export default function Header(){

    return(
        <>
        <div className="container">
            <div className="side_bar">
                    <ButtonGroup  orientation="vertical" variant="text" aria-label="Basic button group" sx={{'& .MuiButton-root': {
                    color: "#4fc54b", borderColor: "#22b43b", padding: "20px" }}}>
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
