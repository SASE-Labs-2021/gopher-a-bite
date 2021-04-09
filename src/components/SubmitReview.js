import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import StarRating from './StarRating';

class SubmitReview extends Component {
    constructor(props) {
        super(props);
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {};

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
        //const { items } = this.state;
        return ( <
            Card >
            <
            Card.Header as = "h2" > Submit Your Review < /Card.Header> <
            Card.Body >
            <
            ListGroupItem >

            <
            b > { this.props.restaurant } < /b>  < /
            ListGroupItem > <
            ListGroupItem >
            <
            /
            ListGroupItem > <
            ListGroupItem >
            <StarRating/> < /
            ListGroupItem > <
            ListGroupItem >
            Write your Review Here:
            <
            input name = "note"
            type = "text"
            value = { this.state.note }
            onChange = { this.onInputchange }
            /> < /
            ListGroupItem > <
            button onClick = { this.onSubmitForm } > Submit < /button> < /
            Card.Body > <
            /Card>
        );
    }
}

export default SubmitReview;