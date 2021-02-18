import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthErrorState,
  selectAuthLoadingState,
} from '../../../core/selectors/auth';
import { StyledFormDiv, StyledError, StyledFormTitle } from './styled';
import {
  selectUserDataState,
  selectUserLoadingState,
} from '../../../core/selectors/user';
import { Redirect } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';

const RegisterPage: React.FC = () => {
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
      <StyledFormTitle>Register form</StyledFormTitle>
      <StyledError hidden={error === null ? true : false}>{error}</StyledError>
      <RegisterForm />
    </StyledFormDiv>
  );
};

export default RegisterPage;
