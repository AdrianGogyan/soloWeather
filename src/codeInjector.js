import { fetchForecastData } from "./fetching";

const app = document.getElementById("app");



export function codeInjector(
    location,
    temperature,
    wind_speed,
    today_condition,
    highest_temperature,
    lowest_temperature,
    hour,
    hour_icon,
    hour_temp
    
){
    app.innerHTML = `
        <div class="app-buttons">
        <div class="app-button-back">

        </div>
        <div class="app-button-favorite">

        </div>
      </div>

      <div class="main-sec">
        <div class="main-sec_cityname">${location}</div>
        <div class="main-sec_temp">${temperature}°</div>
        <div class="main-sec_extra">Wind: ${wind_speed}km/h</div>
      </div>

      <div class="hour-sec">
        <div class="hour-sec_condition">
          Heute ${today_condition}. Füllt wie  ${highest_temperature}.
        </div>
        <div class="hour-sec_main">    
        </div>
      </div>

      <div class="day-sec">
        <div class="day-sec-text">Vorhersage für die nächsten 3 Tage:</div>
        <div class="day-sec-wrapper">
          
        </div>
      </div>

      <div class="extra-sec">
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenaufgang</div>
          <div class="extra-sec-extra-data">6:45 Uhr</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenuntergang</div>
          <div class="extra-sec-extra-data">16:45 Uhr</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Feuchtigkeit</div>
          <div class="extra-sec-extra-data">73%</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Gefühl</div>
          <div class="extra-sec-extra-data">24.6°</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenaufgang</div>
          <div class="extra-sec-extra-data">6:45 Uhr</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenaufgang</div>
          <div class="extra-sec-extra-data">6:45 Uhr</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenaufgang</div>
          <div class="extra-sec-extra-data">6:45 Uhr</div>
        </div>
        <div class="extra-sec-extra">
          <div class="extra-sec-extra-name">Sonnenaufgang</div>
          <div class="extra-sec-extra-data">6:45 Uhr</div>
        </div>
      </div>

    `;
}