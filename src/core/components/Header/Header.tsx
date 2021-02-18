import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import {
  selectUserDataState,
  selectUserLoadingState,
} from '../../../core/selectors/user';
import { selectAuthLoadingState } from '../../selectors/auth';
import UnauthNavbar from './components/UnauthorizedNavbar/UnauthNavbar';
import AuthNavbar from './components/AuthorizedNavbar/AuthNavbar';

const Header: React.FC = () => {
  const user = useSelector(selectUserDataState);
  const isLoading = useSelector(selectAuthLoadingState);
  const isUserLoading = useSelector(selectUserLoadingState);

  if (isLoading || isUserLoading) {
    return <nav></nav>;
  }

  if (!user) {
    return <UnauthNavbar />;
  }

  return <AuthNavbar />;
};

export default Header;
