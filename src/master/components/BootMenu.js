import React from 'react';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'

class BootMenu extends React.Component {
	render() {
		return (
			<div>
				<Navbar bg="light" variant="light">
		    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#pricing">GRAY SLATE MEDIA</Nav.Link>

		      <Nav.Link href="#pricing"></Nav.Link>
		      <Nav.Link href="#pricing"></Nav.Link>
		      <Nav.Link href="#pricing"></Nav.Link>


		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#features">Features</Nav.Link>
		      <Nav.Link href="#pricing">Pricing</Nav.Link>
		      <Nav.Link href="#pricing">Pricing</Nav.Link>


		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-primary">Search</Button>
		    </Form>
		  </Navbar>
			</div>
		)
	}
}

export default BootMenu;

