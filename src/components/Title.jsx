import React, { Component } from "react";


class Title extends Component {

	

	render(){

		var titleStyle = {
			display: "table-cell",
			verticalAlign: "middle"
		};

		return(
			<div style={titleStyle}>
				<h1><strong>Weather Finder</strong></h1>
				<br/>
				<h4>A change in Weather is Sufficient to reacreate the world and ourselves</h4>
			</div>
		);
	}
}

export default Title;