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

function HomePage(props) {
    return (
        <>
            <div>
                <div className="BP38mainGridDesign">
                    <Navigation />
                    <PajamuSekc />
                    <Ratas month={props.month} setMonth={props.setMonth} />
                    <IslaiduSekc />
                    <BiudzetoSekc />
                </div>
            </div>

        </>
    );
}

export default HomePage;
