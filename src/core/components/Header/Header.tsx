import React, { FC, memo, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthLoadingState } from '../../selectors/auth';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { userClearData } from '../../actions/user';
import { auth } from '../../firebase';
import * as Styled from './styled';

const Header: FC = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectAuthLoadingState);
  const user = auth.currentUser;

  const logoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logout());
    dispatch(userClearData());
    history.push('/');
  };

  return (
    <>
      {isLoading ? (
        <Styled.HeaderNav></Styled.HeaderNav>
      ) : user ? (
        <Styled.HeaderNav>
          <Styled.HeaderUl className="header-ul">
            <Styled.HeaderLi>
              <Link to="/" style={Styled.LinkStyle}>
                Home Page
              </Link>
            </Styled.HeaderLi>
            <Styled.HeaderLi>
              <Link to="/todoList" style={Styled.LinkStyle}>
                Todo Page
              </Link>
            </Styled.HeaderLi>
            <Styled.HeaderLi>
              <Link to="/profile" style={Styled.LinkStyle}>
                Profile
              </Link>
            </Styled.HeaderLi>
            <Styled.HeaderLi>
              <a onClick={logoutClick} style={Styled.LinkStyle}>
                Logout
              </a>
            </Styled.HeaderLi>
          </Styled.HeaderUl>
        </Styled.HeaderNav>
      ) : (
        <Styled.HeaderNav>
          <Styled.HeaderUl className="header-ul">
            <Styled.HeaderLi>
              <Link to="/" style={Styled.LinkStyle}>
                Home Page
              </Link>
            </Styled.HeaderLi>
            <Styled.HeaderLi>
              <Link to="/login" style={Styled.LinkStyle}>
                Login
              </Link>
            </Styled.HeaderLi>
            <Styled.HeaderLi>
              <Link to="/register" style={Styled.LinkStyle}>
                Register
              </Link>
            </Styled.HeaderLi>
          </Styled.HeaderUl>
        </Styled.HeaderNav>
      )}
    </>
  );
});

export default Header;
