import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  renderWeather(cityData, index) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="green" />
        </td>
        <td>
          <Chart data={humidities} color="blue" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>도시</th>
            <th>온도</th>
            <th>기압</th>
            <th>습도</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather.bind(this))}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
