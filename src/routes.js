import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NotFound from './pages/not-found';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/> 
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);

export default router;