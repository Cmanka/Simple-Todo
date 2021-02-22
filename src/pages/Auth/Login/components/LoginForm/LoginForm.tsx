import React, { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../../../core/thunks/auth';
import Input from '../../../components/Input/Input';
import * as Styled from './styled';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const loginSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(email, password));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={loginSubmit}>
      <Styled.InputDiv>
        <Input
          label="Email"
          name="email"
          placeholder="Enter email"
          onChange={changeEmailHandler}
          value={email}
        />
      </Styled.InputDiv>
      <Styled.InputDiv>
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={changePasswordHandler}
          value={password}
        />
      </Styled.InputDiv>
      <Styled.Button type="submit">Login</Styled.Button>
    </form>
  );
};

export default LoginForm;
