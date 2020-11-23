import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

class MyProfile extends Component {
    state = { 
        name: "susan",
        birthday: "12/12/1998",
        restrictions: "gluten, vegan" ,
     }
    render() { 
        return ( 
            <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {this.state.name}</ListGroup.Item>
                <ListGroup.Item>Birthday: {this.state.birthday}</ListGroup.Item>
                <ListGroup.Item>Restrictions: {this.state.restrictions}</ListGroup.Item>
            </ListGroup>
            </Card>
         );
    }
}
 
export default MyProfile;