import React, { Component } from 'react';
import './App.css';
import ProductItem from './components/ProductItem';
import AddItem from './components/AddItem';

const products = [
  {
    name: "ipad",
    price: 200
  },
  {
    name: "iphone",
    price: 70
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount(){
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts(){
    return this.state.products
  }

  onDelete(name){
    const products = this.getProducts();
    const filterProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: filterProducts });
  }

  onAdd(){
    
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manajers</h1>
        <AddItem />
        {
          this.state.products.map(product => {
            return (
              <div key={product.name}>
                <ProductItem 
                key = {product.name}
                {...product}
                onDelete = {this.onDelete}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
