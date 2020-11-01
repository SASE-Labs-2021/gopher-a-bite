import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends Component {
	render() {
		return (
			<>
				<Navbar>
          <Navbar.Brand href="#home">Gopher-A-Bite</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#nearby">What's Nearby?</Nav.Link>
            <Nav.Link href="#profile">My Profile</Nav.Link>
          </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search for a restaurant" className="mr-sm-2" />
          <Button >Search</Button>
        </Form>
        </Navbar>
        </>
		)
	}
}

export default NavigationBar;