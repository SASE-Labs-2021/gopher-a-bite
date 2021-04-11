import React, { useContext, Component, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import StarRatingComponent from 'react-star-rating-component';
import { getData } from '../Shared';
import { UserContext } from "../providers/UserProvider";
import Spinner from 'react-bootstrap/Spinner';
import {useHistory} from 'react-router-dom';

// TODO: make this into a function component using the state hook

// function getName() {
//     const user = useContext(UserContext);
//     const {photoURL, displayName, email} = user;
//     return displayName
// }

function SubmitReview(props) {
    const user = useContext(UserContext)
    const {photoURL, displayName, email} = user
    const [rating, setRating] = useState(5)
    const [review, setReview] = useState('')

    return (
        <Card>
            <Card.Header as="h2"> Submit your review </Card.Header>
            <Card.Body>
                <ListGroupItem>{props.restaurant}</ListGroupItem>
                <ListGroupItem>
                    <StarRatingComponent
                        name='rating'
                        startCount={5}
                        value={rating}
                        onStarClick={(next, prev, name) => setRating(next)}
                    />
                </ListGroupItem>
                <ListGroupItem>
                    Write your review here:
                    <input
                        name='review'
                        type='text'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </ListGroupItem>
                <button onClick={async () => {
                    const names = await getData('/ids')
                    const response = await fetch(`/review/${names[props.restaurant]}`, {
                        method: 'PUT',
                        body: `user_id=${displayName}&rating=${rating}&review=${review}`,
                        headers: {
	                     'Content-Type':'application/x-www-form-urlencoded'
                        },
                    }).then(() => window.location.href = `/rest?restaurant=${props.restaurant}`)
                }}>
                    Submit
                </button>
            </Card.Body>
        </Card>
    )
}

// class SubmitReview extends Component {
//     constructor(props) {
//         super(props);
//         this.onInputchange = this.onInputchange.bind(this);
//         this.onSubmitForm = this.onSubmitForm.bind(this);
//         this.state = {rating: 5};

//     }
//     onInputchange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     async onSubmitForm() {
//         // console.log(this.state)
//         const names = await getData('/ids')
//         fetch(`/review/${names[this.props.restaurant]}`, {
//             method: 'PUT',
//             headers:{
// 	            'Content-Type':'application/json'
//             },
//             body: JSON.stringify({ user_id: displayName, rating: this.state.rating, review: this.state.note })
//         })
//     }

//     onStarClick(nextValue, prevValue, name) {
//         this.setState({rating: nextValue});
//     }

//     render() {
//         //const { items } = this.state;
//         return ( <
//             Card >
//             <
//             Card.Header as = "h2" > Submit Your Review < /Card.Header> <
//             Card.Body >
//             <
//             ListGroupItem >

//             <
//             b > { this.props.restaurant } < /b>  < /
//             ListGroupItem > <
//             ListGroupItem >
//             <
//             /
//             ListGroupItem > <
//             ListGroupItem >
//             <StarRatingComponent 
//                 name="rate1" 
//                 starCount={5}
//                 value={this.state.rating}
//                 onStarClick={this.onStarClick.bind(this)}
//             />
//             < /
//             ListGroupItem > <
//             ListGroupItem >
//             Write your Review Here:
//             <
//             input name = "note"
//             type = "text"
//             value = { this.state.note }
//             onChange = { this.onInputchange }
//             /> < /
//             ListGroupItem > <
//             button onClick = { this.onSubmitForm } > Submit < /button> < /
//             Card.Body > <
//             /Card>
//         );
//     }
// }

export default SubmitReview;