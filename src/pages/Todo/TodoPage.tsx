import React from 'react';
import Footer from './components/Footer/Footer';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { StyledTodoPage } from './styled';
import Header from './components/Header/Header';
import { ITodo } from './interfaces/ITodo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoState } from './interfaces/ITodoState';
import { addTodo, removeTodo, toggleTodo } from '../../core/redux/actionCreators';

const TodoPage: React.FC = () => {
	
	const todoList = useSelector<TodoState,TodoState["todoList"]>((state)=>state.todoList);
	const dispatch = useDispatch();

	React.useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

	const onAddTodo = (todo:ITodo)=>{
		dispatch(addTodo(todo))
	}

	const onRemoveTodo = (todo:ITodo)=>{
		dispatch(removeTodo(todo))
	}

	const onToggleTodo = (todo:ITodo)=>{
		dispatch(toggleTodo(todo))
	}

	return (
		<StyledTodoPage>
			<Header />
			<TodoForm onAdd={onAddTodo} />
			<TodoList
				todoList={todoList}
				onToggle={onToggleTodo}
				onRemove={onRemoveTodo}
			/>
			<Footer />
		</StyledTodoPage>
	);
};

export default TodoPage;
