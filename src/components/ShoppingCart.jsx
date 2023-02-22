import React from 'react';
import ProductCard from './ProductCard.jsx';

function ShoppingCart(props) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {props.cartData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }

export default ShoppingCart;