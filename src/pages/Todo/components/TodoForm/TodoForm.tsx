import React, { useState, MouseEvent, memo } from 'react';
import { StyledInput, StyledTodoForm } from './styled';
import { TodoFormProps } from './types';

const TodoForm: React.FC<TodoFormProps> = memo(({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState<string>('');

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
    <StyledTodoForm>
      <StyledInput
        onChange={changeHandler}
        value={title}
        type="text"
        placeholder="Enter todo item"
      />
      <button onClick={addHandler}>+</button>
    </StyledTodoForm>
  );
});

export default TodoForm;
