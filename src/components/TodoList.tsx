import React from "react";
import { ITodo } from "../interfaces";
import Todo from "./Todo";

type TodoListProps = {
  todoList: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onToggle,
  onRemove,
}) => {
  if (!todoList.length) {
    return (
      <div className="todo-list">
        <h1>List is empty</h1>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <ul>
        {todoList.map((todo) => {
          const classes = ["todo-list__todo"];
          if (todo.completed) {
            classes.push("completed");
          }
          return (
            <Todo
              classes={classes}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
