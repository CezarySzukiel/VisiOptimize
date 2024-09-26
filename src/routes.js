import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import OfferList from './components/OfferList';
import Privacy from './components/Privacy';
import BusinessCards from './components/BusinessCards';
import WebPages from "./components/WebPages";
import services from './services.json';

const componentMapping = {
    BusinessCards: BusinessCards,
    WebPages: WebPages,
    // Add other components here as needed
};

const serviceRoutes = services.map(service => ({
    path: service.url,
    element: React.createElement(componentMapping[service.element]),
}));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'offer',
                element: <OfferList/>,
            },
            {
                path: 'privacy',
                element: <Privacy/>,
            },
            ...serviceRoutes,
        ],
    },
]);

export default router;