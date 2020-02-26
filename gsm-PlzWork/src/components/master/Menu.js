import React from 'react';
import './styleMenu.css';

class Menu extends React.Component {
	render() {
		return (
	<div>

		


		<div className="ui red three item inverted compact menu menuStyle ">
		  <a className="active item">
		    Home
		  </a>
		  <a className="item">
		    Events
		  </a>
		  <a className="item">
		    Sponsors and forms
		  </a>
		  <a className="item">
		    Press HQ
		  </a>
		  <a className="item">
		    e-News
		  </a>
		

		</div>


		<div className="ui divider"></div>
		
	</div>


		)
	}
}

export default Menu;

