import React, { Component } from "react";


class Title extends Component {

	

	render(){

		var titleStyle = {
			position: "absolute",
			marginTop: "50%",
			textAlign: "center",
			color: "white"
		};

		return(
			<div style={titleStyle}>
				<h1>Weather Finder</h1>
				<h4>A change in Weather is Sufficient to reacreate the world and ourselves</h4>
			</div>
		);
	}
}

export default Title;