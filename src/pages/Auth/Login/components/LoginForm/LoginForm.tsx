import React, { FC, useEffect, memo } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LoginFormValues } from './types';
import * as Styled from './styled';
import { login } from '../../../../../core/actions/auth';

const LoginForm: FC = memo(() => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<LoginFormValues>();

  useEffect(() => {
    register({ name: 'email' }, { required: 'Email is required' });
    register(
      { name: 'password' },
      {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Min length is 6',
        },
      }
    );
  }, [register]);

  const onSubmit = handleSubmit((data) => {
    dispatch(login(data.email, data.password));
  });

  return (
    <form onSubmit={onSubmit}>
      <Styled.InputDiv>
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          ref={register}
        />
        {errors.email && (
          <Styled.ErrorMessage>{errors.email.message}</Styled.ErrorMessage>
        )}
      </Styled.InputDiv>
      <Styled.InputDiv>
        <label htmlFor="password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          ref={register}
        />
        {errors.password && (
          <Styled.ErrorMessage>{errors.password.message}</Styled.ErrorMessage>
        )}
      </Styled.InputDiv>
      <Styled.Button type="submit">Login</Styled.Button>
    </form>
  );
});

export default LoginForm;
