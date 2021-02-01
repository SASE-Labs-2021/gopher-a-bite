import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RestaurantPreview from './RestaurantPreview';
import SubmitReview from './SubmitReview';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LoginRoutes from "./LoginRoutes";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import Intro from './Intro';
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
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/reviews">Submit a Review!</Nav.Link>
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
]

function Home() {
  return (
    <div>
      <Intro/>
      <RestaurantPreview/>
    </div>);
}

function Nearby() {
  return <AppMap/>; //Map code goes here
}

function Profile() {
  return (<UserProvider>
            <LoginRoutes/>
            <SignIn/>
          </UserProvider>);
}
function Reviews() {
  return <SubmitReview/>;
}
