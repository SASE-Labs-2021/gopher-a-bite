/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
// import StarRatings from './react-star-ratings';




class PastReviews extends Component {
    state = {
      data: [
        {
          restaurant: "Chipotle",
          rated: 5,
          named: "Lynh",
          reviewText: "My favorite thing to get here is a steak salad bowl with their bomb *** vinegrette. Also, BURRITOS!"
        },
        {
          restaurant: "Afro Deli",
          rated: 5,
          named: "Joseph",
          reviewText: "OMG the Gopher Lamb Gyros are SOOOOO GOOD!! 10/10 recommend. Make sure you bring me with you ;)"
        }
      ]
    }
    
    render() {
      return (
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item><Card as="h5">Current Reviews</Card></ListGroup.Item>
            <ListGroupItem>
              {this.state.data.map((review) => (
                <Card>
                  <ListGroup className="list-group-flush">
                      <ListGroupItem>Name: {review.named}</ListGroupItem>
                       /** <StarRatings rating={rated} starDimension="40px" starSpacing="15px"/> */ 
                      <ListGroupItem>{review.reviewText}</ListGroupItem>
                  </ListGroup>
                </Card>
              ))}
            </ListGroupItem>
         </ListGroup>
        </Card>
      ); // end return
    } // end render
  } // end class
  
  export default PastReviews;