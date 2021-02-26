import React, { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './styled';
import { useForm } from 'react-hook-form';
import { RegisterFormValues } from './types';
import { IRegisterForm } from '../../../../../core/interfaces/register-form';
import { register as registerAction } from '../../../../../core/actions/auth';

const RegisterForm: FC = memo(() => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<RegisterFormValues>({
    defaultValues: {
      email: `test${Date.now()}@mail.com`,
    },
  });

  useEffect(() => {
    register(
      { name: 'firstName' },
      {
        required: 'First name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
    register(
      { name: 'lastName' },
      {
        required: 'Last name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
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
    dispatch(registerAction({ ...(data as IRegisterForm) }));
  });

  return (
    <form onSubmit={onSubmit}>
      <Styled.InputDiv>
        <label htmlFor="firstName">
          <strong>First name</strong>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          ref={register}
        />
        {errors.firstName && (
          <Styled.ErrorMessage>{errors.firstName.message}</Styled.ErrorMessage>
        )}
      </Styled.InputDiv>
      <Styled.InputDiv>
        <label htmlFor="lastName">
          <strong>Last name</strong>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="enter last name"
          ref={register}
        />
        {errors.lastName && (
          <Styled.ErrorMessage>{errors.lastName.message}</Styled.ErrorMessage>
        )}
      </Styled.InputDiv>
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

      <Styled.Button type="submit">Register</Styled.Button>
    </form>
  );
});

export default RegisterForm;
