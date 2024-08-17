import { bgGen } from "./src/backgroundGenerator";
import { codeInjector } from "./src/codeInjector";
import "./src/hour";
import { fetchForecastData } from "./src/fetching";
import "/styles/style.scss"
import { hourDataFunc } from "./src/hour";
import { dayForecast } from "./src/forecastDays";

bgGen();

codeInjector("Mannheim","30", "15.5");

hourDataFunc();
fetchForecastData("mannheim");
dayForecast();