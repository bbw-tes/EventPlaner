import {Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="/">Willkommen</Link></li>
                    <li> <Link to="EventErfassen">Event Erfassen</Link></li>
                    <li> <Link to="Ideen">Ideen</Link></li>
                    <li> <Link to="Veranstltung">Veranstaltungen</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>

    )
};

export default Layout;