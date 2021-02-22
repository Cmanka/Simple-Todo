import { ITodo } from '../interfaces/todo';
import { TodoAction, TodoActionTypes } from '../actions/todo';

export interface State {
  todo: ITodo;
  todoList: ITodo[];
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  todo: null,
  todoList: [],
  isLoading: false,
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOLIST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TodoActionTypes.FETCH_TODOLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        todoList: action.payload.todoList,
      };
    }
    case TodoActionTypes.FETCH_TODOLIST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case TodoActionTypes.ADD_TODO: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TodoActionTypes.ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        todo: action.payload.todo,
        todoList: [...state.todoList, action.payload.todo],
      };
    }
    case TodoActionTypes.ADD_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case TodoActionTypes.REMOVE_TODO: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TodoActionTypes.REMOVE_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        todo: action.payload.todo,
        todoList: [
          ...state.todoList.filter(
            (todo) => todo.id !== action.payload.todo.id
          ),
        ],
      };
    }
    case TodoActionTypes.REMOVE_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case TodoActionTypes.TOGGLE_TODO: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TodoActionTypes.TOGGLE_TODO_SUCCESS: {
      const updatedList: ITodo[] = state.todoList.map((todo) =>
        todo.id === action.payload.todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        isLoading: false,
        todo: action.payload.todo,
        todoList: updatedList,
        error: null,
      };
    }
    case TodoActionTypes.TOGGLE_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
