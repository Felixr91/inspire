import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawToScreen(temp) {
	console.log(temp + "drawWeather function")
	let template = ''
	template += `
	<div class="card special-card font-shadow mt-2 border-light" style="width: 8rem;">
  <div class="card-body">
		<p class="card-title d-flex justify-content-center">Boise Temp</p>
		<h6 class="card-subtitle mb-2 text-muted">
			<h2 class="d-flex justify-content-center pb-2 pt-2"><i class="fas fa-thermometer-three-quarters"></i></h2>
		</h6>
    <h6 class="card-subtitle mb-2 text-white d-flex justify-content-center pt-2">${temp}F°</h6>
  </div>
</div>
	`
	document.getElementById("weather").innerHTML = template
}

export default class WeatherController {

	constructor() {
		//fire off get weather right away
		this.getWeather()
	}
	getWeather(drawWeather) {
		weatherService.getWeather(weather => {
			console.log(weather);
			let send = weather
			//draw weather object to the screen
			drawToScreen(weather)
		})
	}
}
