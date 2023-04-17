import React from "react";

import Navigation from "../Navigation/Navigation";
import PajamuSekc from "../Pajamu-sekc/Pajamu-sekc";
import IslaiduSekc from "../Islaidu-sekc/Islaidu-sekc";
import Ratas from "../Ratas/Ratas";
import BiudzetoSekc from "../Biudzeto-sekc/Biudzeto-sekc/Biudzeto-sekc";
import './HomePage.css'

function HomePage() {
    return (
        <>
            <div>
                <div class="BP38mainGridDesign">
                    <Navigation />
                    <PajamuSekc />
                    {/* <Ratas /> */}
                    <IslaiduSekc />
                    <BiudzetoSekc />
                </div>
            </div>

        </>
    );
}

export default HomePage;
