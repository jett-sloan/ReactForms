import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid'; 

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: uuidv4() };
    setTodos([...todos, todoWithId]);
  };

  function removeTodo(id) {
    const updatedTodos = todos.filter(function(todo) {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo key={todo.id} display={todo.display} />
          <button onClick={function() { removeTodo(todo.id); }}>
              Remove
            </button>
        </div>
      ))}
    </div>
  );
}

