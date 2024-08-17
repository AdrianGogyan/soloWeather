import { fetchForecastData } from "./fetching";

const codeToInject = "";

function htmlCode(h, h_icon, h_temp){
    return `
        <div class="hour-sec_main-wrapper">
            <div class="hour-sec_main-wrapper-hour">${h}:00</div>
            <div class="hour-sec_main-wrapper-icon"><img src="${h_icon}" alt="condition icon"></div>
            <div class="hour-sec_main-wrapper-temp">${h_temp}°</div>
        </div>
`;
} 

export async function hourDataFunc(){
    const data = await fetchForecastData("Mannheim");
    const dayData = data.forecast;
    // console.log(dayData);
    const div = document.querySelector(".hour-sec_main");
    const hour = new Date().getHours();
    for(let i = 0; i < 24; i++){
        const index = ((hour + i) < 24) ? 0 : 1;

        const currentHour = (hour + i)%24;
        const currentHour_icon = dayData.forecastday[index].hour[currentHour].condition.icon;
        const currentHour_temp = Math.floor(dayData.forecastday[index].hour[currentHour].temp_c);
        
        const a = htmlCode(currentHour,currentHour_icon,currentHour_temp);
        // console.log(a);
        div.innerHTML += a;
    }

    // return codeToInject;
}