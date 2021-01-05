import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import RestaurantPreview from './RestaurantPreview';
import SubmitReview from './SubmitReview';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import MyProfile from './MyProfile';
import Login from './Login';
import AppMap from './AppMap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function NavigationBar() {
  return (
    <Router>
      <div>
				<Navbar>
        <Navbar.Brand>Gopher-A-Bite</Navbar.Brand>
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/nearby">What's Nearby?</Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link>
            <Nav.Link href="/reviews">Submit a Review!</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
          </Nav>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
  {
		path: '/login',
		main: () => <Login/>
	},
]

function Home() {
  return <RestaurantPreview/>;
}

function Nearby() {
  return <h2><AppMap/></h2>; //Map code goes here
}

function Profile() {
  return <h2><MyProfile/></h2>;
}
function Reviews() {
  return <SubmitReview/>;
}
function Login() {
  return <Login/>;
}