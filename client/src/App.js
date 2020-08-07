import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';



import { ItemList } from './components/ItemList';
import { NewItemButton } from './components/NewItemButton';




function App() {
  
  

  return (
    <Container className="center-text">
      
      <Row>
        <Col>
          <h1>All To-Do Items</h1>
          {/* button componenet to make a new item in the list */}
          <NewItemButton />

          {/* component that calls the API and lists the items it gets back */}
          <ItemList /> 
        </Col>
      </Row>
    </Container>
  )
    
}

export default App;
