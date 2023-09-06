import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div ClassName="container">
      <div ClassName="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search for City..."
                className="form-control"
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-10"
              />
            </div>
          </div>
        </form>
        <div>
          <h1>Dubai</h1>
          <ul>
            <li>Weather </li>
            <li>Wednesday 18:00 </li>
            <li>Mostly sunny</li>
          </ul>
        </div>

        <div class="row">
          <div class="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly sunny"
            />
            37°C
          </div>
          <div class="col-6">
            <ul>
              <li>Precipitation: 1% </li>
              <li>Humidity: 62% </li>
              <li>Wind: 14 mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
