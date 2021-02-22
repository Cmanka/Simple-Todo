import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  selectAuthErrorState,
  selectAuthLoadingState,
  selectAuthUser,
} from '../../../core/selectors/auth';
import * as Styled from './styled';
import LoginForm from './components/LoginForm/LoginForm';

const LoginPage: FC = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const error = useSelector(selectAuthErrorState);
  const user = useSelector(selectAuthUser);

  if (isLoading) {
    return (
      <Styled.FormDiv>
        <Styled.FormTitle>Loading...</Styled.FormTitle>
      </Styled.FormDiv>
    );
  }

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <Styled.FormDiv>
          <Styled.FormTitle>Login form</Styled.FormTitle>
          <Styled.Error hidden={error === null ? true : false}>
            {error}
          </Styled.Error>
          <LoginForm />
        </Styled.FormDiv>
      )}
    </>
  );
};

export default LoginPage;
