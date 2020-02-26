import React from 'react';
//import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../images/BBQ_Showdown.png';
import img2 from '../images/img_mountains_wide.jpg';
import img3 from '../images/img_fjords_wide.jpg';


class SlideShow extends React.Component {

	render() {
		return (
			<div>
				{/* <h1>
					This is start of slideshow
				</h1> */}
				<br></br>
				<Carousel>
				  <Carousel.Item >
				    <img
				      className="d-block w-100"
				      src={img1}
					  alt="First slide"
					  
				    />
				    <Carousel.Caption>
					<a className="btn btn-primary btn-lg" href="/community/social_impact" role="button">BBQ Showdown</a>

				      {/* <h3 >First slide label</h3> */}
				      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
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
				<br></br>
				<br></br>




			</div>
		)
	}
}

export default SlideShow;

