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
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
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

  onAdd(name, price){
    const products = this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({products})
  }

  onEditSubmit(name, price, originalName){
    let products = this.getProducts();

    products = products.map(product => {
      if(product.name === originalName){
        product.name = name;
        product.price = price;
      }
      return product
    });
    this.setState({products})
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manajers</h1>
        <AddItem onAdd = {this.onAdd}/>
        {
          this.state.products.map(product => {
            return (
              <div key={product.name}>
                <ProductItem 
                key = {product.name}
                {...product}
                onDelete = {this.onDelete}
                onEditSubmit = {this.onEditSubmit}
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
