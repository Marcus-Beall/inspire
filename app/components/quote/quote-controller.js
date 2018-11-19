import QuoteService from "./quote-service.js";

let qs = new QuoteService


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			let template = `<h3>${quote}</h3>`
			document.getElementById("quote").innerHTML = template
		})
	}
}
