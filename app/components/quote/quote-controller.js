import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawToScreen(quote) {
	let template = ''
	template += `
	<h3 class="">${quote}</h3>
	`
	document.getElementById("injectQuote").innerHTML = template
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			drawToScreen(quote)
		})
	}
}
