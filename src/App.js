import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Ratas from "./components/Ratas";
import PajamuSekc from './components/Pajamu-sekc/Pajamu-sekc';
import BudgetBP4 from './components/BP-4/Budget/BudgetBP4';
import EndResultBP9 from './components/BP-9/EndResult/EndResult';
import PajamuIspl from "./components/Pajamu-ispl/Pajamu-ispl/Pajamu-ispl";
import IslaiduSekc from './components/Islaidu-sekc/Islaidu-sekc';


function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HomeEEEEgit breanc</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div class="row grid gap-1 App">
          <PajamuSekc/>
          <div class="col">
          <Ratas></Ratas>
          </div>
          <IslaiduSekc/>
          </div>
      </div>

      {/* Karolio Darbai */}
      <div>
        <EndResultBP9 />
      </div>
      
      <div>
        <BudgetBP4 />
      </div>
      
      
      
    </>
  );
}

export default App;
