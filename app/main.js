import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ImageController from "./components/image/image-controller.js"

class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      quoteController: new QuoteController(),
      imageController: new ImageController()
    }
  }
}

window.app = new app()  