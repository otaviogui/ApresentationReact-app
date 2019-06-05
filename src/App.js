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
          <Search />
          <FormRegisterNewCompany />   
        </Row>  
      </Container>
    </div>
  );
}

export default App;
