import React from 'react';
import Image from 'react-bootstrap/Image'
import flower from '../images/natureFlower.jpg';


class whatWeDo extends React.Component {
	render() {
		return (
			<div>
				<div class="ui divider"></div>
				<img class="ui fluid image" src={flower}/>
			</div>
		)
	}
}

export default whatWeDo;

