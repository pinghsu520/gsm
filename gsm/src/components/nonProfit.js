import React from 'react';





class nonProfit extends React.Component {
	render() {
		const mystyle = {
	      color: "white",
	      backgroundColor: "DodgerBlue",
	      padding: "0px",
	      fontFamily: "Arial",
	      width: "1000px",
		  height: "600px",
		  padding: "50px",
		  border: "1px solid white",
	      }
		return (
			<div style ={ mystyle }>
				<h1> Non Profit </h1>
				<p> Include non profit org. in assisting their revenue stream
					Assit in developing sponsorship 
					Assit in developing their fundrasing events ie golf
				</p>
			</div>
		)
	}
}

export default nonProfit;

