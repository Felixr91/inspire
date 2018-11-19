const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class WeatherService {

	getWeather(drawWeather) {
		console.log('Calling the Weatherman')
<<<<<<< HEAD
		weatherApi()
			.then(function (res) {
				localStorage.setItem('weather', JSON.stringify(res.data))
				// res.data.temp is the temperature in Kelvin
				console.log(res.data)
				let kelvin = res.data.main.temp
				drawWeather(Math.floor(1.8 * (kelvin - 273) + 32))
			})
=======
		weatherApi().then(function (res) {
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
			// res.data.temp is the temperature in Kelvin
			// You should probably convert the temperature data to either F or C
			callWhenDone(res.data);
		})
>>>>>>> 92ae929374ac07ced5429c24c442f719c237328d
	}
}
