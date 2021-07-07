import React, {Component} from 'react'

class Reset extends Component {
    
    resetDefault = () => {
        this.props.settingDefault(true)
    }
    render() {
        return (
            <button type="submit" className="btn btn-primary mt-3" onClick={this.resetDefault}>Reset</button>
        )
    }
  }
  
export default Reset;
  