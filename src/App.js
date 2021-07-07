import './App.css';
import React, {Component} from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SiteSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color : 'red',
      fontSize: 12,
    }
  }
  setColor = (params) => {
    this.setState({
      color : params
    })
  }
  changeSize = (value) => {
    // 8 <= size <= 36
    this.setState({
      fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) 
                  ? this.state.fontSize + value :  this.state.fontSize
    })
  }
  settingDefault = (value) => {
    if (value) {
      this.setState({
        color : 'red',
        fontSize: 12,
      })
    }
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
            <ColorPicker color={this.state.color} receiveColor={this.setColor}/>
          <div className="col-lg-6">
            <SizeSetting fontSize={this.state.fontSize} changeSize={this.changeSize}/>
            <Reset settingDefault={this.settingDefault}/>
          </div>
            <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    )
  }
}

export default App;

