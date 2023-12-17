import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <p>To miasto nad bystrzycą z Ukrainą kwitnie handel Spirytus i szlugi napędzają gospodarke wisnia</p>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;