import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/oponylogo.svg";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" height="35" />
            </Link>
            <ul>
                <li>
                    <Link>O nas</Link>
                </li>
                <li>
                    <Link>Kontakt</Link>
                </li>
                <li>
                    <Link>Zaloguj się</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;