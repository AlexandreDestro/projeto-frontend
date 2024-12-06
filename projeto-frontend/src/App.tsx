import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider, LoginContext } from './stores/LoginContext';
import { useContext } from "react";

import Header from './layouts/Header/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
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
            { path: '/ItemDetails/:donationId', element: <ItemDetails /> }, 
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
    const donationsSample = [
        { name: 'Roupas de inverno', description: "Descrição da doação", location: 'Criciúma - SC', image: '/images/roupas.png' },
        { name: 'Cesta básica', description: "Descrição da doação", location: 'Criciúma - SC', image: '/images/cestabasica.png' },
        { name: 'Brinquedos', description: "Descrição da doação", location: 'Criciúma - SC', image: '/images/brinquedos.png' },
        { name: 'Livros', description: "Descrição da doação", location: 'Içara - SC', image: '/images/livros.jpg' },
        { name: 'Roupas infantis', description: "Descrição da doação", location: 'Içara - SC', image: '/images/roupainfantil.png' },
        { name: 'Sofá', description: "Descrição da doação", location: 'Içara - SC', image: '/images/sofa.jpg' },
      ];
      
      localStorage.setItem("donations", JSON.stringify(donationsSample));
      
    return (
        <LoginProvider>
            <WebRouter />
        </LoginProvider>
    );
};

export default App;
