import logo from "/src/assets/images/logo.png";
import "./Header.css"
import { Link } from "react-router-dom";

function HeaderLogo(){
    return (
        <Link to="/">
            <img src={logo} alt="Logo" className="header-logo" />
        </Link>
    )
}

export default HeaderLogo;