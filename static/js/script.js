
var componentStyle = {
  height: "500px",
}

var host_url = "https://api.tfl.gov.uk/"
var stopID = "490001171G"

var app_id = $('#component').attr('data-app-id')
var app_key = $('#component').attr('data-app-key')

var api_string = host_url+"StopPoint/"+stopID+"/arrivals/?app_id="+app_id+"&app_key="+app_key

console.log(api_string)

class Component extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      mock: false
    }

    this.render_loading = this.render_loading.bind(this)
    this.render_list = this.render_list.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  componentWillMount(){
    var this_ = this
    $.get(api_string, function(data, status){
      console.log("Status: ", data)
      var sortedData = data.sort(function (a, b) {
        return a.timeToStation - b.timeToStation;
      })
      this_.setState({data:sortedData})
    })
    // this.setState({
    //   data: mockData,
    //   mock: true
    // })
  }
  //
  componentDidMount(){
    if (this.state.mock != true) {
    var this_ = this
      setTimeout(function() {
        this_.updateData();
      }, 2000)
    } else {
    }
  }

  sortData(data){
    return data.sort(function (a, b) {
        return a.timeToStation - b.timeToStation;
    })
  }

  updateData(){
    var this_ = this
    $.get(api_string, function(data, status){
        var sortedData = this_.sortData(data)
        this_.setState({data: sortedData})
          setTimeout(function() {
            this_.updateData();
          }, 30000)
    })
  }

  render_list(){
    var data = this.state.data
    var dataList = data.map(function (object, index) {
        var mins = parseInt(object.timeToStation / 60)
        var remainingSecond = object.timeToStation % 60
        var arrivalTime
        if (mins == 0) {
          return (
            <div className="card-panel red darken-1 white-text row" key={index.toString()} style={cardStyle}>
              <div className="col s3" style={borderStyle}><h4>{object.lineName}</h4></div>
              <div className="col s5" style={borderStyle}><p>{object.towards}</p></div>
              <div className="col s4"><h4>{remainingSecond}s</h4></div>
            </div>
          )
        } else {
          return (
            <div className="card-panel green darken-2 white-text row" key={index.toString()} style={cardStyle}>
              <div className="col s3" style={borderStyle}><h4>{object.lineName}</h4></div>
              <div className="col s5" style={borderStyle}><p>{object.towards}</p></div>
              <div className="col s4"><h5>{mins}m {remainingSecond}s</h5></div>
            </div>
          )
        }
    })

    return(
      <div>
        <div className="row">
          <div className="col s3"><h4>Bus</h4></div>
          <div className="col s5"><h4>Towards</h4></div>
          <div className="col s4"><h4>Arriving</h4></div>
        </div>
        <div style={dataListStyle}>
          {dataList}
        </div>
      </div>
    )
  }

  render_loading(){
    return (
      <div>
        <div className="progress red">
            <div className="indeterminate"></div>
        </div>
      </div>
    )
  }


  render(){
    if (this.state.data.length > 0) {
      return this.render_list()
    } else {
      return this.render_loading()
    }
  }
}

ReactDOM.render(
<div className="row">
  <div className="col s6">
    <Component name="Component 1"/>
  </div>
</div>,
document.getElementById('component')
)


// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
