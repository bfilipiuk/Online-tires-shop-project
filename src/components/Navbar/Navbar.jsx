import React from "react";
import { AnimationWrapper } from "react-hover-animation"
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/oponylogo.svg";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" height="35" />
            </Link>
            <ul>
                <AnimationWrapper>
                <li>
                    <NavLink to="/oferta">Oferta</NavLink>
                </li>
                </AnimationWrapper>

                <AnimationWrapper>
                <li>
                    <NavLink to="/about">O nas</NavLink>
                </li>
                </AnimationWrapper>

                <AnimationWrapper>
                <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
                </AnimationWrapper>

                <AnimationWrapper>
                <li>
                    <NavLink to="/login">Zaloguj się</NavLink>
                </li>
                </AnimationWrapper>
            </ul>
        </nav>

    )
}

export default Navbar;