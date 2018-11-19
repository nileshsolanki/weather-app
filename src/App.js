import React, { Component } from 'react';
import Form from './components/Form';
import Frame from './components/Frame';

const API_KEY = "1d6b1e16378c30cd13df4c27552a4ed5";

class App extends Component {

	state = {
		city: undefined,
		country: undefined,
		humidity: undefined,
		temperature: undefined,
		description: undefined,
		error: undefined,
	}

	getWeather = async (e) => {
		e.preventDefault();
		const country = e.target.elements.country.value;
		const city = e.target.elements.city.value;

		console.log(`country is ${country} and city is ${city}`);

		const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const result = await data.json();

		if(city && country){
			this.setState({
				city: result.name,
				country: result.sys.country,
				temperature: result.main.temp,
				humidity: result.main.humidity,
				description: result.weather[0].description,
				error: undefined
			});
		}else{
			this.setState({
				city: undefined,
				country: undefined,
				temperature: undefined,
				humidity: undefined,
				description: undefined,
				error: "Enter proper location"
			});
		}

		console.log(result);
	}


    render() {

	    return (
	      <div>
	        <Frame getWeather={this.getWeather} result={this.state}/>
	      </div>
	    );
  	}
}

export default App;
