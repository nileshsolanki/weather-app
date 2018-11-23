import React, { Component } from "react";

class Weather extends Component {

	render(){

		const {country, city, temperature, humidity, description, error} = this.props.result;

		const resultStyle = {
			margin: "40px 10px 0 10px",
			color: "red",
			height: "50%",
		}

		const valueStyle = {
			color: "white",
		}

		const lineStyle = {
			lineHeight: "225%",
			fontWeight: "100"
		}




		return(
		
			<div style={resultStyle}>
				{country && city && <h3 style={lineStyle}>Place: <span style={valueStyle}>{country}, {city}</span></h3>}
				{temperature && <h3 style={lineStyle}>Temperature: <span style={valueStyle}>{temperature} &deg;C</span></h3>}
				{humidity && <h3 style={lineStyle}>Humidity: <span style={valueStyle}>{humidity}</span></h3>}
				{description && <h3 style={lineStyle}>Description: <span style={valueStyle}>{description}</span></h3>}
				{error && <h3 style={lineStyle}>{error}</h3>}
			</div>
		);
	}
}

export default Weather;