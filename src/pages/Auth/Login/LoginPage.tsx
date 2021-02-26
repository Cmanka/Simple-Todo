import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthLoadingState } from '../../../core/selectors/auth';
import * as Styled from './styled';
import LoginForm from './components/LoginForm/LoginForm';
import { auth } from '../../../core/firebase';

const LoginPage: FC = memo(() => {
  const isLoading = useSelector(selectAuthLoadingState);
  const user = auth.currentUser;

  return (
    <>
      {isLoading ? (
        <Styled.FormDiv>
          <Styled.FormTitle>Loading...</Styled.FormTitle>
        </Styled.FormDiv>
      ) : user ? (
        <Redirect to="/" />
      ) : (
        <Styled.FormDiv>
          <Styled.FormTitle>Login form</Styled.FormTitle>
          <LoginForm />
        </Styled.FormDiv>
      )}
    </>
  );
});

export default LoginPage;
