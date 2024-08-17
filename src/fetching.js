const API_KEY = "f64be6df2ee44509b3f50906241707";
const API_BASE = "http://api.weatherapi.com/v1";

export async function fetchForecastData(location, days = 3){
    const res = await fetch(`${API_BASE}/forecast.json?key=${API_KEY}&q=${location}&lang=de&days=${days}`);
    const weatherData = await res.json();
    return weatherData;
}

export function dateDataFunc(){
    const date = new Date();
    const todayNr   = date.getDay();
    const today     = daysDE[todayNr];
    const todayVoll = daysDEVoll[todayNr];
    const day       = date.getDate();
    const hour      = date.getHours();
    const minutes   = date.getMinutes();
    const monthNr   = date.getMonth();
    const month     = monthsEN[monthNr];
    const year      = date.getFullYear();
    const dayOfWeek = date.getUTCDay();

    console.log(date, hour, minutes, today, day, month, year, dayOfWeek, todayVoll);
    
    return {date, hour, minutes, today, day, month, year, dayOfWeek, todayVoll};
}

// English
export const daysEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// German
export const daysDE = ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."];
export const monthsDE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
export const daysDEVoll = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];