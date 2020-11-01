import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class PracticePreview extends Component {
    state = { 
        name1: "Chili's",
        name2: "Wendy's",
        rating: 5,
        avgTime: 10,
        tags: "Keto, Gluten-free"
     }
    render() { 
        return ( 
            <div> 
                <Card.Header>Today's Restaurant Reccomendations!</Card.Header>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="http://logok.org/wp-content/uploads/2014/10/Chills-logo-880x704.png" />
                <Card.Body>
                <Card.Title as ="h2">{this.state.name1}</Card.Title>
                <Card.Text>
                    welcome to chili's
                </Card.Text>
                <ListGroup className="list-group-flush">
                        <ListGroupItem>Star Rating: {this.state.rating}</ListGroupItem>
                        <ListGroupItem>Average Wait Time: {this.state.avgTime} minutes</ListGroupItem>
                        <ListGroupItem>Tags: {this.state.tags}</ListGroupItem>
                </ListGroup>
                </Card.Body>
                <Card.Footer>
                <Button> Website </Button>
                </Card.Footer>
            </Card>
            <Card>
            <Card.Img variant="top" src="hhttps://www.nydailynews.com/resizer/zFDG5CtNOTMXKW0fegUYaXSJNQo=/800x6http://logok.org/wp-content/uploads/2014/12/Wendys-logo-880x654.png72/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/CETZNQMBS4YO4EK7M7O72GWYDY.jpgolder.js/100px160" />
            <Card.Body>
            <Card.Title as ="h2">{this.state.name2}</Card.Title>
            <Card.Text>
               Wendy's has amazing frosties
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button> Website </Button>
            </Card.Footer>
            </Card>
        </CardGroup>
        </div>
            
         );
    }
}
 
export default PracticePreview;