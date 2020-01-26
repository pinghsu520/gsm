import React from 'react';
import lake from '../images/NatureLake.jpg';

class NowSuccess extends React.Component {
	render() {
		return (
			<div>
				<h1>
					steps success class
				</h1>

				<div class="ui divider"></div>

				<img class="ui fluid image" src={lake} />
				<div class="ui divider"></div>
			</div>
		)
	}
}

export default NowSuccess;

