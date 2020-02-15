import React from 'react';



class buisness extends React.Component {
	render() {


		const mystyle = {
	      backgroundColor: "silver",
	      padding: "0px",
	      fontFamily: "Times New Roman",
	      width: "1000px",
		  height: "600px",
		  padding: "50px",
		  border: "1px solid white",
		  position: "relative",
		  right: "400px",
		  top: "100px"
	      }
		return (
			<div style = {mystyle}>

			



				<p style = {{ color: 'black' }} key = 'titlePastSuccess'>
				<h1>Buisness</h1>
				How our team can impact and share ways to create a better community!

				</p>
				
				
				


			</div>
		)
	}
}

export default buisness;



