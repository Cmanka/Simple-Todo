import React, { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../../../../core/thunks/auth';
import Input from '../../../components/Input/Input';
import * as Styled from './styled';

const RegisterForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const dispatch = useDispatch();

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const changeFirstNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(event.target.value);
  };

  const registerSubmit = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerThunk({ email, password, firstName, lastName }));
    setPassword('');
    setEmail('');
    setFirstName('');
    setLastName('');
  };

  return (
    <form onSubmit={registerSubmit}>
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
      <Styled.InputDiv>
        <Input
          label="First name"
          name="firstName"
          placeholder="Enter first name"
          onChange={changeFirstNameHandler}
          value={firstName}
        />
      </Styled.InputDiv>
      <Styled.InputDiv>
        <Input
          label="Last name"
          name="lastName"
          placeholder="Enter last name"
          onChange={changeLastNameHandler}
          value={lastName}
        />
      </Styled.InputDiv>
      <Styled.Button type="submit">Register</Styled.Button>
    </form>
  );
};

export default RegisterForm;
