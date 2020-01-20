import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class SlideShow extends React.Component {

	render() {
		return (
			<div>
				<h1>
					This is start of slideshow
				</h1>
			<Carousel>
				<Carousel.Item>
						<img 
							className="d-block w-100"
							src ="./images/img_mountains_wide.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit</p>
						</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
						<img 
							className="d-block w-100"
							src ="./images/img_mountains_wide.jpg"
							alt="Third slide"
						/>
						
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p> lorearafdljfadsf</p>
						</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
						<img
							className ="d-block w-100"
							src ="./images/img_mountains_wide.jpg"
							alt="Third slide"
						/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>;ajf;dajsfafds</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>




			</div>
		)
	}
}

export default SlideShow;

