import React from 'react';

import './ProductCard.css';

export function ProductCard({ product, onAddToCartButtonClick }) {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className='price'>${product.price}</div>
      <button onClick={onAddToCartButtonClick}>Добавить в корзину</button>
    </div>
  );
}
