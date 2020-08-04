import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { postNewItem } from '../API';

export class NewItemForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
          status: '',
      };
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeDescription = this.handleChangeDescription.bind(this);
      this.handleChangeStatus = this.handleChangeStatus.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeTitle(event) {
      this.setState({title: event.target.value});
    }

    handleChangeDescription(event) {
      this.setState({description: event.target.value});
    }

    handleChangeStatus(event) {
      this.setState({status: event.target.options[event.target.selectedIndex].value});
    }
  
    handleSubmit(event) {
      console.log(this.state);

      postNewItem(this.state);

      
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={this.handleChangeTitle}/>
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" onChange={this.handleChangeDescription} />
            </Form.Group>
            <Form.Group controlId="status">
                <Form.Label>Description</Form.Label>
                <Form.Control as="select" onChange={this.handleChangeStatus} >
                    <option>select</option>
                    <option>Open</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      );
    }
  }

