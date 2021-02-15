import { ITodo } from '../interfaces/todo';
import { TodoActionTypes } from '../actions/todo';

export interface State {
  todoList: ITodo[];
}

const initialState: State = {
  todoList: [],
};

export const reducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const newTodo: ITodo = {
        id: Date.now(),
        title: action.payload.todo.title,
        completed: false,
      };
      return { ...state, todoList: [...state.todoList, newTodo] };
    }

    case TodoActionTypes.REMOVE_TODO: {
      const updatedTodoList: ITodo[] = state.todoList.filter(
        (todo) => todo.id !== action.payload.todo.id
      );
      return { ...state, todoList: updatedTodoList };
    }

    case TodoActionTypes.TOGGLE_TODO: {
      const updatedTodoList: ITodo[] = state.todoList.map((todo) =>
        todo.id === action.payload.todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state, todoList: updatedTodoList };
    }

    default:
      return state;
  }
};
