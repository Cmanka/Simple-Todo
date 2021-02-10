import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './interfaces/ITodo';
import { StyledTodoPage } from './styled';
import Header from './components/Header/Header';

const TodoPage: React.FC = () => {
	const [todoList, setTodoList] = useState<ITodo[]>([]);
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todoList') || '[]');
		setTodoList(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);

	const addHandler = (title: string) => {
		const newTodo: ITodo = {
			title,
			id: Date.now(),
			completed: false,
		};
		if (!newTodo.title || newTodo.title.length > 20) {
			alert('Input is empty or item length > 20');
			return;
		}
		setTodoList((prev) => [newTodo, ...prev]);
	};

	const removeHandler = (id: number) => {
		setTodoList((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleHandler = (id: number) => {
		setTodoList((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	return (
		<StyledTodoPage>
			<Header />
			<TodoForm onAdd={addHandler} />
			<TodoList
				todoList={todoList}
				onToggle={toggleHandler}
				onRemove={removeHandler}
			/>
			<Footer />
		</StyledTodoPage>
	);
};

export default TodoPage;
