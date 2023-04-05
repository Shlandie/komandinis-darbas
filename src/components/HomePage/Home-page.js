import React from "react";

import Ratas from "../Ratas";
import PajamuSekc from "../Pajamu-sekc/Pajamu-sekc";
import BudgetBP4 from "../BP-4/Budget/BudgetBP4";
import IslaiduSekc from "../Islaidu-sekc/Islaidu-sekc";

function HomePage() {
    return (
        <>
            <div>
                <div class="row grid gap-1 App">
                    <PajamuSekc />
                    <div class="col">
                        <Ratas />
                    </div>
                    <IslaiduSekc />
                </div>
            </div>

            {/* Karolio Darbai */}
            <div>
                <BudgetBP4 />
            </div>
        </>
    );
}

export default HomePage;
