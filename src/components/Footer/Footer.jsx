import React from "react";
import "./Footer.css";
import logo from "../../assets/oponylogo.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo} alt="Logo" height="35" />
            <p>@2023 Twojeopony.pl</p>
            <p className="right">Made with love by ECPU ❤️</p>
        </div>
    );
}

export default Footer;