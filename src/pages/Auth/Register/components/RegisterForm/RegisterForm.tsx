import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../../../../core/thunks/auth';
import Input from '../../../components/Input/Input';
import { StyledButton, StyledInputDiv } from './styled';

const RegisterForm: React.FC = () => {
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
      <StyledInputDiv>
        <Input
          label="Email"
          name="email"
          placeholder="Enter email"
          onChange={changeEmailHandler}
          value={email}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={changePasswordHandler}
          value={password}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <Input
          label="First name"
          name="firstName"
          placeholder="Enter first name"
          onChange={changeFirstNameHandler}
          value={firstName}
        />
      </StyledInputDiv>
      <StyledInputDiv>
        <Input
          label="Last name"
          name="lastName"
          placeholder="Enter last name"
          onChange={changeLastNameHandler}
          value={lastName}
        />
      </StyledInputDiv>
      <StyledButton type="submit">Register</StyledButton>
    </form>
  );
};

export default RegisterForm;
