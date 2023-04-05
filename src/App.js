import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import EndResultBP9 from "./components/BP-9/EndResult/EndResult";
import PajamuIspl from "./components/Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/Home-page";


function App() {
  return (
    <>
            <Navigation />
           
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
