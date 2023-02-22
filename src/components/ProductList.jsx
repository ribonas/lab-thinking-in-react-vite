import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList(props) {
  const products = props.products;

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;