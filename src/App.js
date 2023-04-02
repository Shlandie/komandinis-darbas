import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Ratas from "./components/Ratas";
import PajamuSekc from './components/Pajamu-sekc/Pajamu-sekc';
import BudgetBP4 from './components/BP-4/Budget/BudgetBP4';
import EndResultBP9 from './components/BP-9/EndResult/EndResult';

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
      <div class="container App">
        <div class="row grid gap-1">
          <PajamuSekc/>
          <div class="col">
          <Ratas></Ratas>
          </div>
          <div class="col">
      Column
          </div>
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
