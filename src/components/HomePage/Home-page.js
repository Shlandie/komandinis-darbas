import React from "react";

import Ratas from "../Ratas/Ratas";
import PajamuSekc from "../Pajamu-sekc/Pajamu-sekc";
import BudgetBP4 from "../BP-4/Budget/BudgetBP4";
import IslaiduSekc from "../Islaidu-sekc/Islaidu-sekc";
import './HomePage.css'
import Navigation from "../Navigation/Navigation";

function HomePage() {
    return (
        <>
            <div>
                <div class="BP38mainGridDesign">
                    <Navigation />
                    <PajamuSekc />
                    {/* <Ratas /> */}
                    <IslaiduSekc />
                    <BudgetBP4 />
                </div>
            </div>

        </>
    );
}

export default HomePage;
