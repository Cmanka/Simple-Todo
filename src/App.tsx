import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    ) as ITodo[];
    setTodoList(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    if (!newTodo.title || newTodo.title.length > 20) {
      alert("Input is empty or item length > 20");
      return;
    }
    setTodoList((prev) => [newTodo, ...prev]);
  };

  const removeHandler = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleHandler = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todoList={todoList}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
      <Footer />
    </div>
  );
};

export default App;
