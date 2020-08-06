import React from 'react'
import { useState } from 'react';

import { NewItemForm } from './NewItemForm.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function NewItemButton() {

    const [showNewModal, setShowNewModal] = useState({
        show: false,
    });

    return (
        <div>
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

                

              </Modal>
            ) : null
          }
        </div>
    )
}
