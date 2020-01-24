import React from 'react';
import './scrollSnap.css';

class ScrollWheel extends React.Component {
	render() {
		return (
			<div>
				<h1>
					ScrollWheel Class
				</h1>

				<section class="test">
				    <h1>Section One</h1>
				</section>
				<div class="ui divider"></div>
				<section class="test">
				        <h1>Section Two</h1>
				</section>
				<div class="ui divider"></div>
				<section class="test">
				        <h1>Section Three</h1>
				</section>
				<div class="ui divider"></div>
				<section>
				        <h1>Section Four</h1>
				</section>
				<div class="ui divider"></div>
				<section>
				        <h1>Section Five</h1>
				</section>
			</div>
		)
	}
}

export default ScrollWheel;

