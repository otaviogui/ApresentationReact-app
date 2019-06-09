import React from 'react';
/* import './App.css'; */
import FormRegisterNewCompany from './components/formRegisterNewCompany';
import Search from './components/search';
import {Container, Row} from 'reactstrap';


function App() {
  return (
    <div >
      <Container fluid>
        
        <Row>
          <h1> Faça a sua Pesquisa</h1>
          <Search />
        </Row>
        <Row>
          <FormRegisterNewCompany />   
        </Row>  
      </Container>
    </div>
  );
}

export default App;
