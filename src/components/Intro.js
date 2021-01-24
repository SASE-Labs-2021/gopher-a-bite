import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class Intro extends Component 
{
    state = {  }
    render() 
    { 
        return ( 
        <div>
            <Jumbotron>
                <h1 >Welcome to Gopher A Bite!</h1>
                <p>
                    Are you a University of Minnesota, Twin Cities student? Do you love food? Well you're in the right place! 
                    At Gopher A Bite, we give you a daily restaurant recommendation located near the UMN based on your reviews and profile!
                </p>

                <p>
                    <Button >Get My Own Personal Recommendations!</Button>
                </p>
            </Jumbotron>
                <Jumbotron>
                    <h1>Meet the Creators</h1>
                    <p>
                        Gopher A Bite was created by the Society of Asian Scientist and Enginneers Lab team! AKA SASE Labs! Every year SASE Labs gets together and creates an annual project... more stuff... all of our names
                    </p>
                    <p>
                        <Button>Learn more about SASE</Button>
                    </p>
                </Jumbotron>
        </div>
         );
    }
}
export default Intro;