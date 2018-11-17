let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);

const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(drawQuote) {
		console.log('looking for some good quotes')
		quoteApi().then((res) => {
			console.log(res.data.quote.body)
			let quote = res.data.quote.body
			drawQuote(quote)
		})
	}
}
