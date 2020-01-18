import React from 'react';
import nat1 from '../images/nature1.jpeg';

class Menu extends React.Component {
	render() {
		return (
	<div>

		<div class="ui menu">
		  <div class="item">
		    Home
		  </div>
		  <a class="item">
		    Events
		  </a>
		  <a class="item">
		    Sponsors and forms			
		  </a>
		  <a class="item">
		    Press HQ	
		  </a>
		  <a class="item">
		    e-News			
		  </a>
		</div>

		<div class="ui raised very padded text container segment">
		  <h2 class="ui header">Dogs Roles with Humans</h2>
		  <p>BLAH BLAH</p>
		  <p>BLAH</p>
		</div>


		<div class="ui divider"></div>
		<img class="ui middle aligned large image" src={nat1}/>
		<span>Middle Aligned</span>
		<div class="ui divider"></div>
		<img class="ui middle aligned circular large image" src={nat1}/>
		<span>Middle Aligned</span>

		<div class="ui divider"></div>
		
	</div>


		)
	}
}

export default Menu;

