import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './component/About';
import Kubetools from './component/Kubetools';
import Gittools from './component/Gittools';
import Containertools from './component/Containertools';
import { NOT_FOUND_ERR } from 'domexception';
import Logo from './component/Logo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div>

      <Container>

        <Row>
          
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/kubetools' exact element={<Kubetools />} />
              <Route path='/gittools' exact element={<Gittools />} />
              <Route path='/containertools' exact element={<Containertools />} />
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>


    </div>
  );
}

export default App;
