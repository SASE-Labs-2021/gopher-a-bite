
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { getData } from '../Shared';
import Spinner from 'react-bootstrap/Spinner';
import StarRatingComponent from 'react-star-rating-component';

const white = {
    background: "#fff",
    width: '50rem',
    margin: '0 auto', 
    float: 'none',
    'margin-bottom': '10px', 
    border: '5px solid #bd930a',
    color: '#540101'
}
class RestaurantCard extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            info: null,
            reviews: [],
            isLoading: true
        }
    }
    
    async componentDidMount() {
        const names = await getData('https://gopher-a-bite.uc.r.appspot.com/ids')
        const rating = await getData(`https://gopher-a-bite.uc.r.appspot.com/ratings/${names[this.props.restaurant]}`)
        const reviews = await getData(`https://gopher-a-bite.uc.r.appspot.com/review/${names[this.props.restaurant]}`)
        const info = await getData(`https://gopher-a-bite.uc.r.appspot.com/restaurants/${names[this.props.restaurant]}`)
        this.setState({ rating: rating.rating, reviews: JSON.parse(reviews), isLoading: false, info: info})
        // this.setState({ rating: rating, isLoading: false})
        // console.log(rating)
        // console.log(reviews)
        console.log(this.state)
    }

    render() 
    { 
        if (this.state.isLoading) {
            <Spinner/>
        }

        return ( 
            <Card style={white}>
                <Card.Header as="h5" style = {{color: "#ffffff"}}>{this.props.restaurant}</Card.Header>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        {
                            this.state.info ? 
                            <div>
                                <ListGroupItem>{this.state.info.desc}</ListGroupItem>
                                <ListGroupItem>{this.state.info.address}</ListGroupItem>
                                <ListGroupItem>{this.state.info.hours}</ListGroupItem>
                                <ListGroupItem><a href={this.state.info.link} style={{color: 'black'}}>{this.state.info.link}</a></ListGroupItem>
                            </div> :
                            null
                        }
                        <ListGroupItem>Average Rating: {this.state.rating}</ListGroupItem>
                        {
                            console.log(this.state.reviews),
                            this.state.reviews.map(json => {
                                return (
                                    <div>
                                        <h7>{json.user_id}</h7>
                                        <br/>
                                        <StarRatingComponent
                                            name='rating'
                                            startCount={parseInt(json.rating)}
                                            value={parseInt(json.rating)}
                                        />
                                        <br/>
                                        <p>"{json.review}"</p>
                                    </div>
                                )
                            })
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
         );
    }
}
 
export default RestaurantCard;