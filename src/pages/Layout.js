import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

export default function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}