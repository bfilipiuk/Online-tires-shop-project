import React from "react";
import Button from "@mui/material/Button";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import img_bmw from "../assets/bmw.png"
import "./HomePage.css"


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header/>

            <div className="sprawdz-oferte">
                <Button href="/oferta" className="button-oferta" variant="contained">Sprawdź oferte</Button>
            </div>
        
            <div className="flex-container-1">
                <div className="left-1">
                    <h1 className="dlaczego-my-h">Dlaczego my?</h1>

                    <div className="text-container-1">
                        <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="img-container-1">
                    <img src = {img_bmw} alt="bmw img" />
                </div>
            </div>

            <div className="flex-container-2">
                <div className="img-container-2">
                    <img src = {img_bmw} alt="bmw img" />
                </div>

                <div className="left-2">
                    <h1 className="kim-jestesmy-h">Kim jesteśmy?</h1>

                    <div className="text-container-2">
                        <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div className="white-box">
                
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;