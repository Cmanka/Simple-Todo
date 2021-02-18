import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { logoutThunk } from '../../../../thunks/auth';

const AuthNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logoutThunk());
    history.push('/');
  };
  return (
    <nav>
      <ul className="header-ul">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/todoList">Todo Page</NavLink>
        </li>
        <li>
          <a onClick={logoutClick}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavbar;
