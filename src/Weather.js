import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <h2>Valencia</h2>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit"> C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Perticipation: 100%</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/marykidun"
            target="_blank"
            rel="noreferrer"
            title="My Github"
          >
            Open-source
          </a>{" "}
          by Maryna Kidun.
        </footer>
      </div>
    );
  } else {
    const apiKey = "4a373ca426c2a1fcd667e2103b2b6b9f";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
