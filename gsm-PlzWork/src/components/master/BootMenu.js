import React from 'react';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './nav.css';


class BootMenu extends React.Component {
	render() {
		return (
			//  <div>
			
			<Navbar collapseOnSelect expand="md" bg="light" variant="light" >
			<Navbar.Brand href="/">
				<img className="ui small image" src="../images/GSMLogo.jpg"/>
			</Navbar.Brand>
			
		    
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Container>
		    <Nav className="mr-auto">
		      <Nav.Link href="/about_us">About Us</Nav.Link>
			  <Nav.Link href="/community">Community</Nav.Link>
		      <Nav.Link href="/events">Events</Nav.Link>
			  <Nav.Link href="/sponsors">Sponsors</Nav.Link>
		      <Nav.Link href="/press">Press</Nav.Link>
		    </Nav>
			
		    {/* <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-primary">Search</Button>
		    </Form> */}
			</Container>
			<Nav.Link href="/community/social_impact">
				<i className="big red heart icon" ></i>
			</Nav.Link>
			</Navbar.Collapse>
		  </Navbar>
			//  </div>
		)
	}
}

export default BootMenu;

