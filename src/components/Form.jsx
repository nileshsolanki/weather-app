import React, { Component } from "react";

class Form extends Component {

	render(){

		var formStyle = {
			marginTop: "100px", 
			left: "50%"
		}

		return(
			<form onSubmit={this.props.getWeather} style={formStyle}>
				<input type="text" className="m-2" name="country" placeholder="Country..."/>
				<input type="text" className="m-2" name="city" placeholder="City..."/>
				<input type="submit" className="btn btn-primary m-2" value="find weather"/>
			</form>
		);
	}
}

export default Form;