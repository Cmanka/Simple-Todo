import React from "react";
import { ITodo } from "../interfaces";

type TodoProps = {
  classes: string[];
  todo: ITodo;
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const Todo: React.FC<TodoProps> = ({ classes, todo, onToggle, onRemove }) => {
  return (
    <li className={classes.join(" ")} key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.title}</span>
        <button onClick={() => onRemove(todo.id)}>Remove</button>
      </label>
    </li>
  );
};

export default Todo;
