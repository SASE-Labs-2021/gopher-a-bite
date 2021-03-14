import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const white = {
    background: "#fff",
    width: '50rem',
    margin: '0 auto', 
    float: 'none',
    'margin-bottom': '10px', 
    border: '3px solid #bd930a',
    color: '#540101'
}
class Intro extends Component 
{
    state = {  }
    render() 
    { 
        return ( 
        <div className = 'align-items-center'>
            <Card style={white}>
            <Card.Body>
                <Card.Title as ="h1">Welcome to Gopher A Bite!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">created by the Society of Asian Scientist and Enginneers Lab team! AKA SASE Labs!</Card.Subtitle>
                <Card.Text>
                    Are you a University of Minnesota, Twin Cities student? Do you love food? Well you're in the right place! 
                    At Gopher A Bite, we give you a daily restaurant recommendation located near the UMN based on your reviews and profile!
                </Card.Text>
                <Button >Get My Own Personal Recommendations!</Button>
            </Card.Body>
            </Card>
        </div>
         );
    }
}
export default Intro;