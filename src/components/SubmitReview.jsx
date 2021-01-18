import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

class SubmitReview extends Component {
    constructor() {
      super();
      this.state = {
      };
      this.onInputchange = this.onInputchange.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputchange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    onSubmitForm() {
      console.log(this.state)
    }
  
    render() {
      const { items } = this.state;
      return (
        <Card>
          <Card.Header as="h2">Submit Your Review</Card.Header>
          <Card.Body>
          <ListGroupItem>
              Restaurant :
              <input
                name="rest"
                type="text"
                value={this.state.rest}
                onChange={this.onInputchange}
              />
            </ListGroupItem>
            <ListGroupItem>
                <Button variant="primary">Sign into Account for Points</Button>
                <Button variant="primary">Submit Anonymously</Button>
                <Button variant="primary">Enter Name as Guest</Button>
              Name :
              <input
                name="reviewer_name"
                type="text"
                value={this.state.reviewer_name}
                onChange={this.onInputchange}
              />
            </ListGroupItem>
            <ListGroupItem>
              Rating :
              <input
                name="rating"
                type="text"
                value={this.state.rating}
                onChange={this.onInputchange}
              />
            </ListGroupItem>
            <ListGroupItem>
              Write your Review Here :
              <input
                name="note"
                type="text"
                value={this.state.note}
                onChange={this.onInputchange}
              />
            </ListGroupItem>
              <button onClick={this.onSubmitForm}>Submit</button>
          </Card.Body>
        </Card>
      );
    }
  }
  
  export default SubmitReview;