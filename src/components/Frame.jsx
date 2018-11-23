import React, { Component } from "react";
import Title from "./Title";
import Form from "./Form";
import Weather from "./Weather"


class Frame extends Component {

	render(){
		
		const titleStyle = {
			background: "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0b45845f981a3622a38342b2b7ba770&auto=format&fit=crop&w=401&q=80')",
			display: "table",
			textAlign: "center",
			height: "100%",
			backgroundSize: "cover",
			color: "white",
			backgroundPosition: "center center",
			fontFamily: "'Montserrat', sans-serif",
		}

		const rowStyle = {
			height: "90%",
			width: "90%",
			position: "absolute",
			marginLeft: "1.5%",
			top: "50%",
			transform: "translateY(-50%)",
			filter: "drop-shadow(0 0 10px #222)",
			// boxShadow: "6px 6px 20px #222"


		}

		const containerStyle = {
			height: "100%",
			width: "100%",
			position: "relative"
		}

		const formStyle = {
			backgroundColor: "#202C39",
			height: "100%"
		}

		return(
			<div className="container" style={containerStyle}>
				<div className="row" style={rowStyle}>
					<div className="col-md-6" style={titleStyle}>
						<Title/>
					</div>
					<div className="col-md-6" style={formStyle}>
						<Form getWeather={this.props.getWeather}/>
						<Weather result={this.props.result}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Frame;