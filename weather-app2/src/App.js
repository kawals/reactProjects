import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    speed: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_Key = 'd5aacbfb40eca3087c632879011c09ae';
    const api_Url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_Key}&units=metric`;
    const api_data = await fetch(api_Url);
    const data = await api_data.json();
    if(city && country && data.cod!='404') {
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: ''
      })
    } else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        speed: undefined,
        city: undefined,
        country: undefined,
        error: 'Please Enter correct City & Country'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          speed={this.state.speed}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
