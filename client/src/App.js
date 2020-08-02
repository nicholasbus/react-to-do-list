import React from 'react';
import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { listAllItems } from './API';

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  

  
  

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
            
              <ListGroup.Item
                key={item._id}
                >
                {item.title}
                
              </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Container>
  )
    
}

export default App;
