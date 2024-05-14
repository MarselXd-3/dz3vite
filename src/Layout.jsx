// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Меню</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/create-post">Создать пост</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Подвал</footer>
    </div>
  );
};

export default Layout;
