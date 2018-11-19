import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?
let is = new ImageService
let bgImageObj = {}
let body = document.querySelector('body')
export default class ImageController {
  constructor() {
    this.drawImage()
  }

  drawImage() {
    is.getImage(function (image) {
      document.getElementById('body').style.backgroundImage = "url(" + image + ")"
    })
  }
}