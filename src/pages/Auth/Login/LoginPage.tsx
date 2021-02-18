import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  selectAuthErrorState,
  selectAuthLoadingState,
} from '../../../core/selectors/auth';
import {
  selectUserDataState,
  selectUserLoadingState,
} from '../../../core/selectors/user';
import { StyledFormDiv, StyledError, StyledFormTitle } from './styled';
import LoginForm from './components/LoginForm/LoginForm';

const LoginPage: React.FC = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const isLoadingUser = useSelector(selectUserLoadingState);
  const user = useSelector(selectUserDataState);
  const error = useSelector(selectAuthErrorState);

  if (user) {
    return <Redirect to="/" />;
  }

  if (isLoading || isLoadingUser) {
    return (
      <StyledFormDiv>
        <StyledFormTitle>Loading...</StyledFormTitle>
      </StyledFormDiv>
    );
  }

  return (
    <StyledFormDiv>
      <StyledFormTitle>Login form</StyledFormTitle>
      <StyledError hidden={error === null ? true : false}>{error}</StyledError>
      <LoginForm />
    </StyledFormDiv>
  );
};

export default LoginPage;
