import styled from 'styled-components';
import { CompletedProps } from './types';

export const StyledTodoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: whitesmoke;
  border: 1px solid black;
  font-size: 36px;
`;

export const StyledTitle = styled.span`
  flex-basis: 60%;
  text-decoration: ${(props: CompletedProps) =>
    props.isCompleted ? 'line-through' : ''};
`;

export const linkStyle = {
  color: 'black',
  fontSize: '16px',
  marginRight: '5px',
  border: '1px solid black',
  textDecoration: 'none',
  padding: '5px 10px',
};

export const StyledInput = styled.input`
  flex-basis: 5%;
`;

export const StyledButton = styled.button`
  flex-basis: 10%;
`;
