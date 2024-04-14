import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import Contact from "../components/contact";

export default function Layout() {
    return (
        <>
            <div className="bg">
                <Navigation />
                <Outlet />
                <Contact />
            </div>
        </>
    )
}