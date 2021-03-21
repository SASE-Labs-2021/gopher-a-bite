import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import StarRating from './StarRating';

const white = {
  background: "#fff",
  width: '50rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '5px solid #bd930a',
  color: '#540101'
}
class SubmitReview extends Component {
    constructor() {
      super();
      this.state = {
      };
      this.onInputchange = this.onInputchange.bind(this);
      this.onSubmitForm = this.onSubmitForm.bind(this);
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
      const { items } = this.state;
      return (
        <Card style={white}>
          <h3>Submit a Review</h3>
          <StarRating/>
            <Card.Body>
              Write your Review Here :
              <input
                name="note"
                type="text"
                value={this.state.note}
                onChange={this.onInputchange}
              />
              </Card.Body>
              <Button>Submit</Button>
        </Card>
      );
    }
  }
  
  export default SubmitReview;