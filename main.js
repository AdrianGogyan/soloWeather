import { bgGen } from "./src/backgroundGenerator";
import { codeInjector } from "./src/codeInjector";
import "./src/hour";
import { fetchForecastData } from "./src/fetching";
import "/styles/style.scss"
import { hourDataFunc } from "./src/hour";
import { dayForecast } from "./src/forecastDays";

bgGen();

const forecastData = await fetchForecastData("Mannheim");
const currentData = forecastData.current;
const currentCond = currentData.condition;
const temperature = Math.floor(currentData.temp_c);
const windSpeed = currentData.wind_kph;
const sky = currentCond.text;
const highestTemp = currentData.feelslike_c;


codeInjector("Mannheim",
    temperature,
    windSpeed,
    sky,
    highestTemp,
    25,
    "9:00",
    "#",
    "30°"

);

hourDataFunc();
fetchForecastData("mannheim");
dayForecast();