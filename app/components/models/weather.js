export default class Weather {
  constructor(data) {
    this.temp = data.main.temp,
      this.temp_max = data.main.temp_max,
      this.temp_min = data.main.temp_min,
      this.humidity = data.main.humidity,
      this.vision = data.weather.main
  }
}
