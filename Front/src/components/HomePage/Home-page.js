import React from "react";

import { useState } from "react";


import Navigation from "../Navigation/Navigation";
import PajamuSekc from "../Pajamu-sekc/Pajamu-sekc";
import IslaiduSekc from "../Islaidu-sekc/Islaidu-sekc";
import Ratas from "../Ratas/Ratas";
import BiudzetoSekc from "../Biudzeto-sekc/Biudzeto-sekc/Biudzeto-sekc";
import './HomePage.css'
import LoginPage from "../Authentication/LoginPage/LoginPage";
import RegisterPage from "../Authentication/RegisterPage/RegisterPage";

function HomePage() {
    const [month, setMonth] = useState("02");
    return (
        <>
            <div>
                <div class="BP38mainGridDesign">
                    <Navigation />
                    <PajamuSekc />
                    <Ratas />
                    <IslaiduSekc />
                    <BiudzetoSekc />
                </div>
            </div>

        </>
    );
}

export default HomePage;
