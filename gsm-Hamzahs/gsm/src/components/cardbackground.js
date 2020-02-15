import React from 'react';
import Card from 'react-bootstrap/Card'
import Lake from '../images/NatureLake.jpg'
import Button from 'react-bootstrap/Button'

class Background extends React.Component {
	render() {
		return (
			<div>
				<Card className="bg-dark text-white">
					<Card.Img src={Lake} alt="Card image" />
					<Card.ImgOverlay>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
								<Button variant="outline-primary">Primary</Button>
						</Card.Text>
					</Card.ImgOverlay>
				</Card>
			</div>
		)
	}
}

export default Background;

