import React, { Component } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RestaurantPreview from './RestaurantPreview';
import SubmitReview from './SubmitReview';
import StarRating from './StarRating';
import Intro from './Intro';
import AppMap from './AppMap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {auth} from "../firebase";
import ProfilePage from './ProfilePage';

//Styling for sign in
const white = {
  background: "#fff",
  width: '25rem',
  margin: '0 auto', 
  float: 'none',
  'margin-bottom': '10px', 
  border: '8px solid #bd930a',
  color: '#540101'
}

//chooses which function to implements given the path
var routes = [
	{
		path: '/',
		exact: true,
		main: () => <Home/>
	},
	{
		path: '/nearby',
		main: () => <Nearby/>
	},
	{
		path: '/profile',
		main: () => <Profile/>
	},
  {
		path: '/reviews',
		main: () => <Reviews/>
  },
]
// decides what components to show when given function is called
function Home() 
{
  return (
    <div>
      <Intro/>
      <RestaurantPreview/>
    </div>);
}
function Nearby() 
{
  return <AppMap/>; 
}
function Profile() 
{
  return <ProfilePage/>;
}
function Reviews() 
{
  return <SubmitReview/>;
}

export default class NavigationBar extends Component
{
  render()
  { console.log("nav bar");
    
    return( // this will generate once they log in
      <Router>
        <div>
          <Navbar>
          <Navbar.Brand>Gopher-A-Bite</Navbar.Brand> 
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/nearby">What's Nearby?</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/reviews">Submit a Review!</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <div style={{ 'paddingTop': 20 }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main/>}
                />
              ))}
            </div>
          </Switch>
        </div>
      </Router>
    );
  }
}
