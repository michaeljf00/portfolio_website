import { NavLink } from "react-router-dom";
import { router } from "./routes"

export default function Navbar() {
    
    const routes = router.routes[0].children.filter((route) => route.label);

    return (
        <nav className="nav">
            <div>
                {routes.map((route) => (
                    <NavLink key={route.path} to={route.path} end={route.index}>
                        {route.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
} 

