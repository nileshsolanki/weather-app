import React, { Component } from "react";

class Form extends Component {

	render(){

		var formStyle = {
			marginTop: "20px", 
			textAlign: "center"
 		}

		return(
			<form onSubmit={this.props.getWeather} style={formStyle}>
				<input type="text" name="country" className="form-control" placeholder="Country..."/>
				<input type="text" name="city" className="my-2 form-control" placeholder="City..."/>
				<input type="submit" className="btn btn-primary" value="find weather"/>
			</form>
		);
	}
}

export default Form;