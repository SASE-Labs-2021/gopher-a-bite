import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class PastReviews extends Component {
    state = {  
        restaurant: "Chipotle",
        rated: 5,
        named: "Lynh",
    }
    render() {
      return (
        <Card>
        <Card.Header as = "h5">Submitted Reviews</Card.Header>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Name: {this.state.named}</ListGroupItem>
                        <ListGroupItem>Star Rating: {this.state.rated}</ListGroupItem>
                        <ListGroupItem>
                        My favorite thing to get here is a steak salad bowl with their bomb *** vinegrette.
                        Also, BURRITOS!
                        </ListGroupItem>
                    </ListGroup>
        </Card>
      );
    }
  }
  
  export default PastReviews;