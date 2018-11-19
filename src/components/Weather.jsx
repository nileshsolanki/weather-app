import React, { Component } from "react";

class Weather extends Component {

	render(){

		var resultStyle = {
			textAlign: "left",
			marginLeft: "50px",
			marginTop: "10px"
		}

		return(
			<div style={resultStyle}>
				{this.props.result.country && this.props.result.city && <h4>Place: <span>{this.props.result.country}, {this.props.result.city}</span></h4>}
				{this.props.result.temperature && <h4>Temperature: <span>{this.props.result.temperature}</span></h4>}
				{this.props.result.humidity && <h4>Humidity: <span>{this.props.result.humidity}</span></h4>}
				{this.props.result.description && <h4>Description: <span>{this.props.result.description}</span></h4>}
				{this.props.result.error && <h4>{this.props.result.error}</h4>}
			</div>
		);
	}
}

export default Weather;