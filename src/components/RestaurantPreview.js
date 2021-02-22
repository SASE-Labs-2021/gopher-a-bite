
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const white = {
    background: "#fff",
    width: '50rem',
    margin: '0 auto', 
    float: 'none',
    'margin-bottom': '10px', 
    border: '8px solid #bd930a',
    color: '#540101'
}
class RestaurantCard extends Component 
{
    state = 
    {  
        name: "Chipotle",
        rating: 5,
        avgTime: 10,
        tags: "Keto, Gluten-free"
     }
    render() 
    { 
        return ( 
            <Card style={white}>
                <Card.Header as="h5" style = {{color: "#ffffff"}}>Today's Restaurant Recommendation</Card.Header>
                <Card.Body>
                    <Card.Title as = "h2">{this.state.name}</Card.Title>
                    <Card.Text as = "h6"> 
                    Lynh's favorite thing to get here is a steak salad bowl with their bomb *** vinegrette.
                    Here we should have a little description on maybe what this restaurant is all about.
                    BURRITOS
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Star Rating: {this.state.rating}</ListGroupItem>
                        <ListGroupItem>Average Wait Time: {this.state.avgTime} minutes</ListGroupItem>
                        <ListGroupItem>Tags: {this.state.tags}</ListGroupItem>
                    </ListGroup>
                    <Button variant="primary">More Info</Button>
                </Card.Body>
            </Card>
         );
    }
}
 
export default RestaurantCard;