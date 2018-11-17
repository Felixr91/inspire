const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(drawImg) {
		console.log("Looking for a good pic")
		imgApi()
			.then(res => {
				console.log('Image Data:', res.data)
				let index = Math.floor(Math.random() * res.data.images.length)
				drawImg(res.data.images[index])
			})
	}
}
