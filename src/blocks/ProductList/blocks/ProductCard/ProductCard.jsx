import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../../store/store';

import './ProductCard.css';

export function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(addToCart(product));
  };

  return (
    <div key={product.id} className='product-card'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className='price'>${product.price}</div>
      <button onClick={handleButtonClick}>Добавить в корзину</button>
    </div>
  );
}
