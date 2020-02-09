import React from 'react';
import lake from '../images/NatureLake.jpg';

class StepSuccess extends React.Component {
	render() {
		return (
			<div>
				{/* <h1>
					steps success class
				</h1> */}

				{/* <div className="ui divider"></div> */}

				<img className="ui fluid image" src={lake} />
				{/* <div className="ui divider"></div> */}
			</div>
		)
	}
}

export default StepSuccess;

