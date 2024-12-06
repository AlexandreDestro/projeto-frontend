import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider, LoginContext } from './stores/LoginContext';
import { useContext } from "react";

import Header from './layouts/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import DonationRegistration from './pages/DonationRegistration/DonationRegistration';
import DonationView from './pages/DonationView/DonationView';
import ItemDetails from './pages/ItemDetails';
import Notifications from './pages/Notifications';
import Contacts from './pages/Contacts';
import './index.css';
import LoginButton from "./components/loginButton/loginButton";

// Rotas para usuários logados
const loggedIn = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <LoginButton />
            </>
        ),
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/DonationRegistration', element: <DonationRegistration /> },
            { path: '/DonationView', element: <DonationView /> },
            { path: '/ItemDetails/:id', element: <ItemDetails /> }, 
            { path: '/Notifications', element: <Notifications /> },
            { path: '/Contacts', element: <Contacts /> },
            { path: '/Login', element: <Login /> },
        ],
    },
]);

// Rotas para usuários não logados
const loggedOut = createBrowserRouter([
    { path: '/', element: <Login /> },
]);

// Função que seleciona o roteador baseado no estado do usuário
function WebRouter() {
    const { user } = useContext(LoginContext);
    return <RouterProvider router={user ? loggedIn : loggedOut} />;
}

// Componente principal
const App: React.FC = () => {
    return (
        <LoginProvider>
            <WebRouter />
        </LoginProvider>
    );
};

export default App;
