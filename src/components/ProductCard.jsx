import React from 'react';

function ProductCard(props) {
  const { name, price, inStock, addToCart } = props;

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{price}</p>
      {inStock ? (
        <button onClick={addToCart}>Add to Cart</button>
      ) : (
        <p>Out of stock</p>
      )}
    </div>
  );
}

export default ProductCard;