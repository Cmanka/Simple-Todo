import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthLoadingState } from '../../../core/selectors/auth';
import * as Styled from './styled';
import { Redirect } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { auth } from '../../../core/firebase';

const RegisterPage: FC = memo(() => {
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
          <Styled.FormTitle>Register form</Styled.FormTitle>
          <RegisterForm />
        </Styled.FormDiv>
      )}
    </>
  );
});

export default RegisterPage;
