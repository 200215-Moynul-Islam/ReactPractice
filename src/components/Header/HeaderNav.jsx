import { NavLink } from "react-router-dom";
import "./Header.css"

function HeaderNav() {
    return (
        <nav className="header-nav">
            <NavLink to="/" className="header-nav-item" end>Home</NavLink>
            <NavLink to="/showtimes" className="header-nav-item">Showtimes</NavLink>
            <NavLink to="/movies" className='header-nav-item'>Movies</NavLink>
        </nav>
    );
}

export default HeaderNav;