import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// import Ratas from "./components/Ratas";
// import PajamuSekc from "./components/Pajamu-sekc/Pajamu-sekc";
// import BudgetBP4 from "./components/BP-4/Budget/BudgetBP4";
import EndResultBP9 from "./components/BP-9/EndResult/EndResult";
import PajamuIspl from "./components/Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";
// import IslaiduSekc from "./components/Islaidu-sekc/Islaidu-sekc";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/Home-page";


function App() {
    return (
        <>
            <Navigation />
            {/* <div>
                <div class="row grid gap-1 App">
                    <PajamuSekc />
                    <div class="col">
                        <Ratas></Ratas>
                    </div>
                    <IslaiduSekc />
                </div>
            </div> */}

            {/* Karolio Darbai */}
            {/* <div>
                <EndResultBP9 />
            </div> */}

            {/* <div>
                <BudgetBP4 />
            </div> */}
           
            <Routes>
                <Route path="/" element={ <HomePage />} />
            </Routes>
            <Routes>
                <Route path="/biudzeto-isplestine" element={<EndResultBP9 />} />
            </Routes>
            <Routes>
                <Route path="/pajamu-isplestine" element={<PajamuIspl />} />
            </Routes>
        </>
    );
}

export default App;
