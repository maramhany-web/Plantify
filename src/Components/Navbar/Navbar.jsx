import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        🌿 Plantify
                    </NavLink>
                    <button className='navbar-toggler'>
                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>

                        <NavLink className="nav-link" to="/plants">
                            Explore Plants
                        </NavLink>

                    </div>
                </div>
            </nav>
        </>
    );
}
