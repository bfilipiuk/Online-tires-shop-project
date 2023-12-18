import React from "react";
import Button from "@mui/material/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Oferta.css"
import img from "../assets/opont.png"

const Oferta = () => {
    return (
        <div>
            <Navbar/>
            <div className="main">
                <div className="flex-container-1-o">
                    <div className="left-1-o">
                        <h1 className="nasza-oferta-h">Nasza oferta</h1>

                        <div className="text-container-o">
                            <p className="text-o">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="img-container-o">
                        <img src = {img} alt="opony img" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Oferta;