import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import img_bmw from "../assets/bmw.png"
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
        
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

            
            <Footer />
        </div>
    );
}

export default HomePage;