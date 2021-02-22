import React, { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/todoList">Todo Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a onClick={logoutClick}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNavbar;
