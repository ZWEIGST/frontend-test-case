import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity, selectCart } from '../../store';

import { CartItem } from './blocks/CartItem';

import './Cart.css';

export function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleRemoveItem = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const handleUpdateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    dispatch(updateQuantity({ id, quantity }));
  }, [dispatch, handleRemoveItem]);

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      alert('Заказ оформлен!');
      dispatch(clearCart());
      setShowCheckout(false);
      setIsOpen(false);
    }, 1000);
  };

  const cartCount = cart.reduce((acc, cartItem) => {
    acc += cartItem.quantity;

    return acc;
  }, 0);

  const totalPrice = cart.reduce((acc, { quantity, price }) => {
    acc += quantity * price;

    return acc;
  }, 0);

  return (
    <div className='cart'>
      <button className='cart-toggle' onClick={() => setIsOpen(!isOpen)}>
        Корзина ({cartCount})
      </button>

      {isOpen && (
        <div className='cart-dropdown'>
          <div className='cart-header'>
            <h3>Корзина</h3>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className='cart-items'>
            {cart.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onMinusButtonClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                  onPlusButtonClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                  onRemoveButtonClick={() => handleRemoveItem(item.id)}
                />
              ))
            )}
          </div>

          <div className='cart-footer'>
            <div className='total'>Итого: ${totalPrice}</div>
            <button
              className='checkout-btn'
              onClick={handleCheckout}
              disabled={cart.length === 0 || showCheckout}
            >
              {showCheckout ? 'Оформляем...' : 'Оформить заказ'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
