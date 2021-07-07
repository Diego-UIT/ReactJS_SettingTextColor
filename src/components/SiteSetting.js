import React, {Component} from 'react'

class SiteSetting extends Component {

    changeSize(value) {
        this.props.changeSize(value)
    }
    
    render() {
        return (
            <div className="card border-info">
                <div className="card-header">
                    <h3>Size: {this.props.fontSize}px</h3>
                </div>
                <div className="card-body">
                    <button type="submit" className="btn btn-primary" onClick={ () => this.changeSize(-2)}>-</button>&nbsp;
                    <button type="submit" className="btn btn-primary" onClick={ () => this.changeSize(2)}>+</button>
                </div>
            </div>
        )
    }
  }
  
export default SiteSetting;
  