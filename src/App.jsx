// src/App.js
import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import ProductList from './components/ProductList.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import ProductCard from './components/ProductCard.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      cart: []
    };
  }

  handleAddToCart = (product) => {
    const newCart = [...this.state.cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      newCart[index].quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    this.updateProductInStock(product.id, false);
  };

  handleRemoveFromCart = (product) => {
    const newCart = [...this.state.cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      this.setState({ cart: newCart });
      this.updateProductInStock(product.id, true);
    }
  };

  updateProductInStock = (productId, value) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((item) => item.id === productId);
    if (index >= 0) {
      newProducts[index].inStock = value;
      this.setState({ products: newProducts });
    }
  };

  render() {
    return (
      <div>
        <ProductList products={this.state.products} addToCart={this.handleAddToCart} />
        <ShoppingCart cart={this.state.cart} removeFromCart={this.handleRemoveFromCart} />
      </div>
    );
  }
}

export default App;