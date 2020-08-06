import React, { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NewItemForm } from './NewItemForm.js';


import { listAllItems, deleteItem } from '../API';

export function ItemList() {
    const [toDoItems, setToDoItems] = useState([]);
    const [showInfo, setShowInfo] = useState({
        show: false,
        on: null,
        purpose: ''
      });

    useEffect(() => {
        (async () => {
          const toDoItems = await listAllItems();
          setToDoItems(toDoItems);
          console.log(toDoItems);
        })();
    }, [])


    
    return (
        <div>
            {/* List group to list all of the entries */}
            <ListGroup>
                {
                toDoItems.slice(0).reverse().map((item) => (
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
                                    on: e.target.id,
                                    purpose: 'view'
                                });
                            }}
                            >
                            Details
                            </Button>
                        </Col>
                        <Col>
                            <Button
                            variant="warning"
                            id={item._id}
                            onClick={(e) => {
                                setShowInfo({
                                    show: true,
                                    on: e.target.id,
                                    purpose: 'edit'
                                });
                            }}
                            >
                            Edit
                            </Button>
                        </Col>
                        <Col>
                            <Button
                            variant="danger"
                            id={item._id}
                            onClick={(e) => {
                                console.log(e.target.id)
                                deleteItem(e.target.id)
                                .then(res => console.log("status 🍔 " + res.status + ". items deleted 🧀 " + res.deletedCount))
                                window.location.reload(false);
                            }}
                            >
                            Delete
                            </Button>
                        </Col>
                        </Row>
                    </ListGroup.Item>
                    
                    {/* modal to show the details of the selected item */}
                    {
                        showInfo.on === item._id && showInfo.purpose === 'view' ? (
                        <Modal
                            show={showInfo.show}
                            onHide={() => setShowInfo({
                            show: false,
                            on: null,
                            purpose: ''
                            })}
                        >
                            <Modal.Header
                            closeButton
                            onHide={() => setShowInfo({
                                show: false,
                                on: null,
                                purpose: ''
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
                                on: null,
                                purpose: ''
                                })}
                            >
                                Ok
                            </Button>
                            </Modal.Footer>

                        </Modal>
                        ) : null
                    }

                    {/* edit modal and form */}
                    {
                        showInfo.on === item._id && showInfo.purpose === 'edit' ? (
                        <Modal
                            show={showInfo.show}
                            onHide={() => setShowInfo({
                            show: false,
                            on: null,
                            purpose: ''
                            })}
                        >
                            <Modal.Header
                            closeButton
                            onHide={() => setShowInfo({
                                show: false,
                                on: null,
                                purpose: ''
                            })}  
                            >
                            <Modal.Title>{item.title}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                            <NewItemForm title={item.title} description={item.description} id={item._id} method='edit' />
                            </Modal.Body>

                            
                        </Modal>
                        ) : null
                    }
                    
                    </div>

                ))
                }
            </ListGroup>
        </div>
    )
}

