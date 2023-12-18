import React from "react";
import Button from "@mui/material/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./contact.css"

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="h-kontakt">Kontakt</h1>
            <p className="p">Warszawa, ul. Nowowiejska 14, 01-712</p>
            <p className="p">kontakt@twojeopony.pl</p>
            <p className="p">+48 881 124 623</p>

            <div className="white-box" />
            <Footer/>
        </div>
    )
}

export default Contact;