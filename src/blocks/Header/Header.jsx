import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/store';
import { selectUserName } from '../../store';

import './Header.css';

export function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 1,
          name: 'Иван Иванов',
          email: 'ivan@example.com',
        })
      );
    }, 500);
  }, [dispatch]);

  return (
    <header className='header'>
      <h1>🛒 Интернет-магазин</h1>
      <div className='user-info'>
        {userName ? <span>Привет, {userName}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
}
