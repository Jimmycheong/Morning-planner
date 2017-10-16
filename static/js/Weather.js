var weatherAPIID = $('#component').attr('data-weather-key')
var cityID = "6058560"
var weather_api_string = "http://api.openweathermap.org/data/2.5/forecast?id="+cityID+"&APPID="+weatherAPIID

class Weather extends React.Component {

  constructor(){
    super()
    this.state = {weatherData:[]}
    this.render_list = this.render_list.bind(this)
    this.render_empty = this.render_empty.bind(this)
  }

  componentWillMount(){
    // TODO: AJAX call to weather API
    var this_ = this
    $.get(weather_api_string, function(data, status){
      console.log("Returned Data: ", data);
      this_.setState({weatherData: data.list})
      console.log("DATA Set:", this_.state.weatherData)
    })
  }

  render_empty(){
    return(<h1>Loading!</h1>)
  }


  render_list(){
    console.log(this.state.weatherData)
    var currentData = this.state.weatherData[0]
    var temperatureInCelcius = parseInt(currentData.main.temp - 273.1)
    var maxTempInCelcius = parseInt(currentData.main.temp_max - 273.1)
    var minTempInCelcius = parseInt(currentData.main.temp_min - 273.1)

    return (<div className="card-panel">
          <h3>London, United Kingdom</h3>
          <p>Weather: {currentData.weather[0].main}, {currentData.weather[0].description}</p>
          <p>Max: {maxTempInCelcius}</p>
          <p>Minimum: {minTempInCelcius}</p>
          <p>Wind Speed: {currentData.wind.speed}</p>
        </div>)
  }

  render(){
    if (this.state.weatherData.length == 0) {
      return this.render_empty()
    } else {
      return this.render_list()
    }

  }

}
