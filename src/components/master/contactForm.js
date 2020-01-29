import React from 'react';


class contactForm extends React.Component {
	render() {
		return (
			<div>
				<h1>
					How to contact Us!!!!

				</h1>

				<form class="ui huge form">
				  <div class="field">
				    <label>First Name</label>
				    <input type="text" name="first-name" placeholder="First Name"/>
				  </div>
				  <div class="field">
				    <label>Last Name</label>
				    <input type="text" name="last-name" placeholder="Last Name"/>
				  </div>
				  <div class="ui huge form">
					  <div class="field">
					    <label>Subject</label>
					    <textarea rows="2"></textarea>
					  </div>
					  <div class="field">
					    <label>Text</label>
					    <textarea></textarea>
					  </div>
					  
					</div>
				  <button class="ui button" type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default contactForm;

