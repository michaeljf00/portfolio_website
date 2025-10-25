import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}