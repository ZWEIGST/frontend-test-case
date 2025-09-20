import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { Cart } from './blocks/Cart';
import { Header } from './blocks/Header';
import { ProductList } from './blocks/ProductList';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <div className='main-content'>
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
