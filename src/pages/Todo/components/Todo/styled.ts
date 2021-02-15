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
  text-decoration: ${(props: CompletedProps) =>
    props.isCompleted ? 'line-through' : ''};
`;
