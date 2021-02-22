import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const UnauthNavbar: FC = () => {
  return (
    <nav>
      <ul className="header-ul">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UnauthNavbar;
