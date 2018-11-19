import React, { Component } from "react";
import Title from "./Title";
import Form from "./Form";
import Weather from "./Weather"


class Frame extends Component {

	render(){
		var style = {
			boxShadow: "5px 5px 5px #000000",
			backgroundColor: "#eeeeee",
			height: "600px",
			width: "1200px",
			position: "absolute",
			margin: "-300px 0 0 -600px",
			left: "52%",
			top: "50%"
		};


		var titleStyle = {
			height: "600px",
			background: "url('http://inn.spb.ru/images/600/DSC100645253.jpg')",
			backgroundSize: "cover"
		}

		var formStyle = {

			height: "600px",
			backgroundColor: "#bc7b01",
			textAlign: "center",
			color: "white"
		};

		return(
			<div className="container" style={style}>
				<div className="row">
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