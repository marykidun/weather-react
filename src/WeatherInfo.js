import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row ">
        <div class="col-4">
          <h2 className="cityName">{props.data.city}</h2>
          <div className=" text-muted dataInfo">
            <FormattedDate date={props.data.date} />
          </div>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-2 showIcon">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-2 showTemperature">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul>
            <li>Perticipation: 100%</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
