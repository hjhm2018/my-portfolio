import React, { Component } from "react";
import axios from "axios";
import {
  RiTempHotLine,
  RiTempColdLine,
  RiCelsiusLine,
  RiCommunityLine,
  RiBlazeLine,
  RiTempHotFill,
} from "react-icons/ri";

export class Weather extends Component {
  state = {
    weatherData: [],
    defaultCity: "Vancouver",
    city: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
    // console.log(e.target.value);
  };

  onClick = async () => {
    const instance = axios.create({
      baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.city}&units=metric`,
      headers: { "x-rapidapi-key": `${process.env.REACT_APP_apiKey}` },
    });

    const data = await instance.get();

    this.setState({
      weatherData: data,
    });
  };

  componentDidMount = async () => {
    const instance = axios.create({
      baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.state.defaultCity}&units=metric`,
      headers: { "x-rapidapi-key": `${process.env.REACT_APP_apiKey}` },
    });

    const data = await instance.get();

    this.setState({
      weatherData: data,
    });
  };
  render() {
    // console.log(this.state.weatherData);
    return (
      <div className="text-center">
        <h1 className="text-center bg-dark text-light p-2 rounded sticky-top col-10 mx-auto mt-2 mb-2">
          <span role="img" aria-label="sun emoji">
            &#127774;
          </span>{" "}
          Weather App{" "}
          <span role="img" aria-label="hurricane emoji">
            &#127744;
          </span>{" "}
        </h1>
        <div className="mb-4">
          <input
            className="p-2 mt-5 text-center"
            type="text"
            name="city"
            maxLength="50"
            onChange={this.onChange}
            placeholder="Enter city name"
          />
          <button
            className="btn btn-primary p-2 ml-1"
            onClick={() => this.onClick()}
            disabled={!this.state.city}
          >
            Search
          </button>
        </div>

        {this.state.weatherData.data && this.state.weatherData.data.name ? (
          <div className="bg-secondary text-light col-3 mx-auto rounded p-3">
            <p>
              <span className="font-weight-bold">
                <RiCommunityLine /> &nbsp; City:{" "}
              </span>{" "}
              {this.state.weatherData.data.name}
            </p>
            <p>
              <span className="font-weight-bold">
                <RiTempHotFill />
                &nbsp; Temperature:{" "}
              </span>{" "}
              {this.state.weatherData.data.main.temp}&nbsp;
              <RiCelsiusLine />
            </p>
            <p>
              <span className="font-weight-bold">
                <RiBlazeLine />
                &nbsp; Feels like:{" "}
              </span>{" "}
              {this.state.weatherData.data.main.feels_like}&nbsp;
              <RiCelsiusLine />
            </p>
            <p>
              <span className="font-weight-bold">
                <RiTempHotLine /> &nbsp;Max. Temp:{" "}
              </span>{" "}
              {this.state.weatherData.data.main.temp_max}&nbsp;
              <RiCelsiusLine />
            </p>
            <p>
              <span className="font-weight-bold">
                <RiTempColdLine /> &nbsp;Min. Temp:{" "}
              </span>
              {this.state.weatherData.data.main.temp_min}&nbsp;
              <RiCelsiusLine />
            </p>
          </div>
        ) : (
          "Enter City Name"
        )}
      </div>
    );
  }
}

export default Weather;
