import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class AltPreview extends Component {
    state = {  
        name: "Chipotle",
        rating: 5,
        avgTime: 10,
        tags: "Keto, Gluten-free"
     }
    render() { 
        return ( 
            <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                    <Nav.Link href="#first">Preview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#first">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#review">Reviews</Nav.Link>
                </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title as ="h2">{this.state.name}</Card.Title>
                <Card.Text>
                    YUMMY FOOD AND YUM. Description and whatever.
                </Card.Text>
                <Button>Website</Button>
            </Card.Body>
            </Card>
         );
    }
}
 
export default AltPreview;