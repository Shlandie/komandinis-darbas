import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import EndResultBP9 from "./components/Biudzeto-ispl/EndResult/EndResult";
import PajamuIspl from "./components/Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";
import IslaiduIspl from "./components/Islaidu-ispl/Islaidu-ispl/Islaidu-ispl";
import HomePage from "./components/HomePage/Home-page";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
                <Route path="/biudzeto-isplestine" element={<EndResultBP9 />} />
            </Routes>
            <Routes>
                <Route path="/pajamu-isplestine" element={<PajamuIspl />} />
            </Routes>
            <Routes>
                <Route path="/islaidu-isplestine" element={<IslaiduIspl />} />
            </Routes>
        </>
    );
}

export default App;
