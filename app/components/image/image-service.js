const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);

let image = ''
let images = []

const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			images = res.data.images
			image = images[Math.floor(Math.random() * images.length)].url
			callWhenDone(image)
		})
	}

}
