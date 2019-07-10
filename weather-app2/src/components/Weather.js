import React, {Component} from 'react'

class Weather extends Component {
  render() {
    return(
      <section>
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Description: {this.props.description}</p>}
        {this.props.speed && <p>Speed: {this.props.speed}</p>}
        {this.props.city && <p>City: {this.props.city}</p>}
        {this.props.country && <p>Country: {this.props.country}</p>}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </section>
    );
  }
}

export default Weather
