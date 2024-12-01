import { Outlet, Link, NavLink } from 'react-router-dom';

function Header(){
/*
    Dashboard
    DonationRegistration
    DonationView
    ItemDetails
    Notifications
    Contacts
*/

    

    return(
        <>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><NavLink to="/DonationRegistration">DonationRegistration</NavLink></li>
            <li><Link to="/DonationView">DonationView</Link></li>
            <li><Link to="/ItemDetails">ItemDetails</Link></li>
            <li>
            <Link to="/Notifications">Notifications</Link>
            </li>
            <li>
            <Link to="/Contacts">Contacts</Link>
            </li>
        </ul>
        <Outlet />
        </>
    );
}

export default Header;