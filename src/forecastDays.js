import { dateDataFunc, daysDEVoll, fetchForecastData } from "./fetching";

export async function dayForecast(day = 3){
    const data = await fetchForecastData("Mannheim");
    const div = document.querySelector(".day-sec-wrapper");
    let b = ``;
    const dateInfo = dateDataFunc();
    const todayNR = dateInfo[day];
    // console.log(todayNR);
    for (let i = 0; i < 3; i++) {

        const a_icon = data.forecast.forecastday[i].day.condition.icon;
        const h_temp = data.forecast.forecastday[i].day.maxtemp_c;
        const t_temp = data.forecast.forecastday[i].day.mintemp_c;
        const w_speed = data.forecast.forecastday[i].day.maxwind_kph;
        let dayName = daysDEVoll[(dateInfo.dayOfWeek + i) % 7];
        if (dayName == dateInfo.todayVoll) {
            dayName = "Heute"
        }

        b += `
        

            <div class="day-sec-wrapper-day">
                <div class="day-sec-wrapper-day-name">${dayName}:</div>
                <div class="day-sec-wrapper-day-icon">
                    <img src="${a_icon}" alt="condition icon">
                </div>
                <div class="day-sec-wrapper-day-text">H:${h_temp}° T:${t_temp}° Wind: ${w_speed}km/h</div>
            </div>
        `;
    }

    div.innerHTML = b; 

    
}