import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import MainLayout from "./layouts/main-layout"


export const router = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout/>,
    errorElement: <NotFound/>,
    children:[ 
        {
            path: "/",
            element: <Home/>,
            label: "Home"
        },
        {
            path: "/about",
            element: <About/>,
            label: "About",
        },
        {
            path: "/projects",
            element: <Projects/>,
            label: "Projects"
        },
        {
            path: "/contact",
            element: <Contact/>,
            label: "Contract"
        }]
    }
]);
