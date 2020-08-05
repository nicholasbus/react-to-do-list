import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { ItemList } from './components/ItemList';
import { NewItemForm } from './components/NewItemForm.js';



function App() {
  
  const [showNewModal, setShowNewModal] = useState({
    show: false,
  });

  return (
    <Container>
      <ItemList />

      {/* button to add a new entry */}
      <Button
        variant="success"
        onClick={() => {
          setShowNewModal({
            show: true
          })
        }}
      >
        Add New
      </Button>
      
      {/* modal and form to add a new entry */}
      {
        showNewModal.show === true ? (
          <Modal
            show={showNewModal.show}
            onHide={() => setShowNewModal({
              show: false,
            })}
          >
            <Modal.Header
              closeButton
              onHide={() => setShowNewModal({
                show: false,
              })}  
            >
              <Modal.Title>New Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <NewItemForm method="post" />
            </Modal.Body>

            <Modal.Footer>
             
              
            </Modal.Footer>

          </Modal>
        ) : null
      }

    </Container>
  )
    
}

export default App;
