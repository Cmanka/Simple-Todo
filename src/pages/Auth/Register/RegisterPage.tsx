import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthErrorState,
  selectAuthLoadingState,
  selectAuthUser,
} from '../../../core/selectors/auth';
import * as Styled from './styled';
import { Redirect } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';

const RegisterPage: FC = () => {
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
          <Styled.FormTitle>Register form</Styled.FormTitle>
          <Styled.Error hidden={error === null ? true : false}>
            {error}
          </Styled.Error>
          <RegisterForm />
        </Styled.FormDiv>
      )}
    </>
  );
};

export default RegisterPage;
