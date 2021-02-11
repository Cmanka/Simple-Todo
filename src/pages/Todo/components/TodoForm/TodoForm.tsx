import React, { useState, MouseEvent } from 'react';
import { ITodo } from '../../interfaces/ITodo';
import { StyledInput, StyledTodoForm } from './styled';
import { TodoFormProps } from './types';

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }: TodoFormProps) => {
	const [todo, setTodo] = useState<ITodo>({ title: '' });

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ title: event.target.value });
	};

	const addHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!todo?.title || todo.title.length > 20) {
			return;
		}
		onAdd(todo);
		setTodo({ title: '' });
	};

	return (
		<StyledTodoForm>
			<StyledInput
				onChange={changeHandler}
				value={todo.title}
				type="text"
				placeholder="Enter todo item"
			/>
			<button onClick={addHandler}>+</button>
		</StyledTodoForm>
	);
};

export default TodoForm;
