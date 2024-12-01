import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import Header from './layouts/Header'

import Dashboard from './pages/Dashboard'
import DonationRegistration from './pages/DonationRegistration'
import DonationView from './pages/DonationView'
import ItemDetails from './pages/ItemDetails'
import Notifications from './pages/Notifications'
import Contacts from './pages/Contacts'



//import Login from './pages/Login/Login'


const router = createBrowserRouter([
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

export default function App() {
    return <RouterProvider router={router} />;
}