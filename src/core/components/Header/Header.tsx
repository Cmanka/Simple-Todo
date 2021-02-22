import React, { FC } from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { selectAuthLoadingState, selectAuthUser } from '../../selectors/auth';
import UnauthNavbar from './components/UnauthorizedNavbar/UnauthNavbar';
import AuthNavbar from './components/AuthorizedNavbar/AuthNavbar';

const Header: FC = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const user = useSelector(selectAuthUser);

  if (isLoading) {
    return <nav></nav>;
  }

  return <>{user ? <AuthNavbar /> : <UnauthNavbar />}</>;
};

export default Header;
