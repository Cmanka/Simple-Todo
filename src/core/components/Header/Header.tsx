import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header: React.FC = () => {
  return (
    <nav>
      <ul className="header-ul">
        <li>
          <NavLink to="/">Todo Page</NavLink>
        </li>
        <li>
          <NavLink to="/details">Details Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
