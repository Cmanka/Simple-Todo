import React from 'react';
import { TodoProps } from './types';
import { StyledTodoLabel, StyledTitle } from './styled';

const Todo: React.FC<TodoProps> = ({ todo, onToggle, onRemove }: TodoProps) => {
	return (
		<li key={todo.id}>
			<StyledTodoLabel>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => onToggle(todo.id)}
				/>
				<StyledTitle isCompleted={todo.completed}>{todo.title}</StyledTitle>
				<button onClick={() => onRemove(todo.id)}>Remove</button>
			</StyledTodoLabel>
		</li>
	);
};

export default Todo;
