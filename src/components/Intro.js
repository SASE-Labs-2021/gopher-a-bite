import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { getData } from '../Shared';
import { Link } from 'react-router-dom';

const white = {
    background: "#fff",
    width: '50rem',
    margin: '0 auto', 
    float: 'none',
    'margin-bottom': '10px', 
    border: '5px solid #bd930a',
    color: '#540101'
}
class Intro extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            recommendations: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const res = await getData('https://gopher-a-bite.uc.r.appspot.com/recommendation/any_user') // change when real recommender system is implemented
        console.log(res)
        const recommendations = Object.keys(res['rating']).map(key => key)
        recommendations.forEach(id => {
            return fetch(`/restaurants/${id}`)
                .then(res => res.json())
                .then((resData) => {
                    this.setState(
                        (prevState) => {
                            return {
                                recommendations: prevState.recommendations.concat(resData),
                                isLoading: false
                            }
                        }
                    )
                })
        })
        // this.setState({ recommendations: recommendations, isLoading: false })
    }

    render() 
    {
        // if (this.state.isLoading) {
        //     return <Spinner/>
        // } 

        return ( 
        <div className = 'align-items-center'>
            <Card style={white}>
            <Card.Body>
                <Card.Title as ="h1">Welcome to Gopher A Bite!</Card.Title>
                <Card.Text>
                    Are you a University of Minnesota, Twin Cities student? Do you love food? Well you're in the right place! 
                    At Gopher A Bite, we give you a daily restaurant recommendation located near the UMN based on your reviews and the reviews of others!
                </Card.Text>
            </Card.Body>
            </Card>
            <Card style={white}>
                <Card.Title as="h1">Recommendations</Card.Title>
                {
                    this.state.recommendations.length == 0 ? 
                    <p>Not enough data to recommend you any restaurants! Try reviewing some restaurants and check back here.</p> :
                    this.state.recommendations.map(json => {
                        return (
                            <div>
                                <Card.Header as="h2">{json.restaurant}</Card.Header>
                                <p>{json.desc}</p>
                                <button><Link to={`/rest?restaurant=${json.restaurant}`}>See reviews</Link></button>
                            </div>
                        )
                    })
                }
            </Card>
        </div>
         );
    }
}
export default Intro;