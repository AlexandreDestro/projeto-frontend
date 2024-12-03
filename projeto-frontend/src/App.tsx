import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider, LoginContext } from './stores/LoginContext';
import { useContext } from "react";

import Header from './layouts/Header/Header'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard'
import DonationRegistration from './pages/DonationRegistration'
import DonationView from './pages/DonationView'
import ItemDetails from './pages/ItemDetails'
import Notifications from './pages/Notifications'
import Contacts from './pages/Contacts'
import './index.css'

const loggedIn = createBrowserRouter([
    {
        path: '/', element : <Header />,
        children: [
            { path : '/', element : <Dashboard /> },
            { path: "/DonationRegistration", element : <DonationRegistration /> },
            { path: "/DonationView", element : <DonationView /> },
            { path: "/ItemDetails", element : <ItemDetails /> },
            { path: "/Notifications", element : <Notifications />},
            { path: "/Contacts", element : <Contacts /> },
        ],
    },
]);


const loggedOut = createBrowserRouter(
    [{ path: '/', element : <Login /> }]);

function WebRouter(){
    const { user } = useContext(LoginContext);
    return <RouterProvider router={!user ? loggedOut : loggedIn} /> }

export default function App() {
    return <LoginProvider>
                <WebRouter/>
                </LoginProvider>; 
                }