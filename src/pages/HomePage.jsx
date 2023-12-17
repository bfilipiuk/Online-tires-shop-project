import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <h1 className="dlaczego-my-h">Dlaczego my?</h1>
            <div className="textContainer1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;