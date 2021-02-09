import React, { useState, MouseEvent } from "react";

type TodoFormProps = {
  onAdd(title: string): void;
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onAdd(title);
    setTitle("");
  };

  return (
    <div className="todo-form">
      <div className="todo-form__input-field">
        <input
          onChange={changeHandler}
          value={title}
          type="text"
          id="title"
          placeholder="Enter todo item"
        />
      </div>
      <div className="todo-form__add-button">
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  );
};

export default TodoForm;
