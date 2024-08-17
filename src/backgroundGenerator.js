export function bgGen() {
    const dayImg = [
        "assets/day/cloudy_day.jpg",
        "assets/day/foggy_day.jpg",
        "assets/day/heavy_rain_day.jpg",
        "assets/day/ice_pellets.jpg",
        "assets/day/lightning_day.jpg",
        "assets/day/rain_day.jpg",
        "assets/day/snow_day.jpg",
        "assets/day/sunny.jpg",
    ];
    
    const randomImgIndex = Math.floor(Math.random() * dayImg.length);
    const randomImage = dayImg[randomImgIndex];

    // Set the background image with a linear gradient overlay
    document.getElementById("app").style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/day/sunny.jpg')`;
}
