import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Ratas from "./components/Ratas";
import PajamuSekc from "./components/Pajamu-sekc/Pajamu-sekc";
import PajamuIspl from "./components/Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";

function App() {
    return (
        <>
            <div className="App grid">
                <Navbar className="mb-2" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">HomeEEEEgit breanc</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="row gap-2 g-0 mb-2">
                    <PajamuSekc />
                    <div className="col">
                        <Ratas></Ratas>
                    </div>
                    <div className="col-4">Column</div>
                </div>
                <Routes>
                    <Route path="/pajamu-isplestine" element={<PajamuIspl />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
