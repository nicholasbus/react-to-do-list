import React from 'react';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { listAllItems } from './API';

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [showInfo, setShowInfo] = useState({
    show: false,
    on: null
  });



  useEffect(() => {
    (async () => {
      const toDoItems = await listAllItems();
      setToDoItems(toDoItems);
      console.log(toDoItems);
    })();
  }, [])

  return (
    <Container>
      <ListGroup>
        {
          toDoItems.map((item) => (
            <div key={item._id}>
              <ListGroup.Item>
                <Row>
                  <Col>{item.title}</Col>
                  <Col>
                    <Button id={item._id}
                      variant="primary"
                      onClick={(e) => {
                          setShowInfo({
                            show: true,
                            on: e.target.id
                          });
                      }}
                    >
                      Details
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="warning">Edit</Button>
                  </Col>
                  <Col>
                    <Button variant="danger">Delete</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
              
              {
                showInfo.on === item._id ? (
                  <Modal
                    show={showInfo.show}
                  >
                    <Modal.Header
                      closeButton
                      onHide={() => setShowInfo({
                        show: false,
                        on: null
                      })}  
                    >
                      <Modal.Title>{item.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>{item.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                      <p>Status: {item.status}</p>
                      <Button
                        variant="primary"
                        onClick={() => setShowInfo({
                          show: false,
                          on: null
                        })}
                      >
                        Ok
                      </Button>
                    </Modal.Footer>

                  </Modal>
                ) : null
              }
              
            </div>

          ))
        }
      </ListGroup>

      <Button
        variant="success"
        onClick={() => {
          setShowInfo({
            show: true,
            on: "newItem"
          })
        }}
      >
        Add New
      </Button>

      {
        showInfo.on === "newItem" ? (
          <Modal
            show={showInfo.show}
          >
            <Modal.Header
              closeButton
              onHide={() => setShowInfo({
                show: false,
                on: null
              })}  
            >
              <Modal.Title>New Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Form
            </Modal.Body>

            <Modal.Footer>
             
              <Button
                variant="primary"
                onClick={() => setShowInfo({
                  show: false,
                  on: null
                })}
              >
                Add
              </Button>
            </Modal.Footer>

          </Modal>
        ) : null
      }

    </Container>
  )
    
}

export default App;
