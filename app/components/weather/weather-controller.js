import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

let daWeather = {}


export default class WeatherController {

	constructor() {
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			daWeather = weather;
			console.log(weather)
			this.drawWeather(daWeather.main.temp)
		})
	}
	get weather() {
		return daWeather
	}

	drawWeather(weather) {
		let weatherk = weather;
		let weatherc = Math.floor(weather - 273.15);
		let weatherf = (weather - 273.15) * 9 / 5 + 32;
		let template = `<nav class="nav nav-pills justify-content-end">
  <li class="nav-item dropdown">
    <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" id="temp1">${weatherc}°C<i class="far fa-sun"></i></a>
</nav>`
		document.getElementById("weather").innerHTML = template
	}
}
