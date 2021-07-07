import './App.css';
import React, {Component} from 'react'
import Product from './components/Product'

class App extends Component {

  addProduct = () => {
    console.log(this.node.value)
  }

  render() {
    var products = [
      {
        id : 1,
        name: 'Iphone 11',
        price: 20000000,
        status: true,
      },
      {
        id : 2,
        name: 'Iphone 12',
        price: 10000000,
        status: true,
      },
      {
        id : 3,
        name: 'Iphone 13',
        price: 30000000,
        status: true,
      },
    ]
    
    let elements = products.map((product) => {
      let result = ''
      if ( product.status === true ) {
        return <Product 
                key={product.id}
                name={product.name}
                price={product.price}
              />
      }
      return result
    })

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark mb-5">
          <div className="container-fluid">
            <a className="navbar-brand">Events</a>
          </div>
        </nav>
        <div className="container">
          <div className="row mb-4">
            <div className="card border-info">
              <div className="card-header">
                <h3>Add product</h3>
              </div>
              <div className="card-body">
                <div className="form-group">
                    <label>Name product</label>
                    <input type="text" className="form-control"  ref={(node) => { this.node = node }}  />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={this.addProduct}>Save</button>
              </div>
            </div>
          </div>
          <div className="row">
            { elements }
          </div>
        </div>
      </div>
    )
  }
}

export default App;

