import React from 'react';

import './CartItem.css';

export function CartItem({
  item,
  onMinusButtonClick,
  onPlusButtonClick,
  onRemoveButtonClick,
}) {
  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.name} />
      <div className='item-details'>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        <div className='quantity-controls'>
          <button onClick={onMinusButtonClick}>-</button>
          <span>{item.quantity}</span>
          <button onClick={onPlusButtonClick}>+</button>
        </div>
      </div>
      <button className='remove-btn' onClick={onRemoveButtonClick}>
        Удалить
      </button>
    </div>
  );
}
