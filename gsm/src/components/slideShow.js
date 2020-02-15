import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img_nature_wide.jpg';
import img2 from '../images/img_mountains_wide.jpg';
import img3 from '../images/img_fjords_wide.jpg';

class SlideShow extends React.Component {

	render() {
		return (
			<div>
				<h1>
				</h1>
				
				<Carousel>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={img1}
				      alt="First slide"
				    />
				    <Carousel.Caption>
				      <h3>First</h3>
				      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				 

				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={img2}
				      alt="Second slide"
				    />

				    <Carousel.Caption>
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				 

				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={img3}
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>




			</div>
		)
	}
}

export default SlideShow;

