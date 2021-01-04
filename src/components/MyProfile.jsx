import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
class MyProfile extends Component {
    state = {
        Name: 'Lynh Tran',
        Type: 'student',
        NumReviews: 5,
        NumFollowers: 2,
        Tags: 'lactose intolerant',
        Date: '10/10/2020',
        FavRestaurants: 'Punch Pizza',
        Age: 18

      }
    render() { 
        return ( 
            <Card>
                <Card.Header as="h2">{this.state.Name}</Card.Header>
                <Card.Body>
                    <Card.Title as = "h6">{this.state.name}</Card.Title>
                    <Card.Text as = "h6"> 
                    Hi I'm Lynh blah blah blah
                    </Card.Text>
                    <ListGroup as = "h6">
                        <ListGroupItem>Date Joined: {this.state.Date}</ListGroupItem>
                        <ListGroupItem>Age: {this.state.Age} </ListGroupItem>
                        <ListGroupItem>Favorite restaurants: {this.state.FavRestaurants}</ListGroupItem>
                    </ListGroup>
                    <ListGroup as= "h6">
                        <ListGroupItem>Reviews: {this.state.NumReviews}</ListGroupItem>
                        <ListGroupItem>Followers: {this.state.NumFollowers} </ListGroupItem>
                        <ListGroupItem>Tags: {this.state.Tags}</ListGroupItem>
                    </ListGroup>
                    <Button variant="primary">Edit Profile</Button>
                </Card.Body>
            </Card>

        );
    }
}
 
export default MyProfile;