import React, { FC, useState, MouseEvent, memo } from 'react';
import * as Styled from './styled';
import { TodoFormProps } from './types';

const TodoForm: FC<TodoFormProps> = memo(({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!title || title.length > 20) {
      return;
    }
    onAdd({
      title: title,
      completed: false,
      id: Date.now().toString(),
    });
    setTitle('');
  };

  return (
    <Styled.TodoForm>
      <Styled.Input
        onChange={changeHandler}
        value={title}
        type="text"
        placeholder="Enter todo item"
      />
      <button onClick={addHandler}>+</button>
    </Styled.TodoForm>
  );
});

export default TodoForm;
