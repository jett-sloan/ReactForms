import React, { useState } from "react";

const NewTodoForm = ({ addTodo}) => {
  const INITIAL_STATE = {
    Todo: "" // Initialize with an empty string
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new todo object with display property
    const newTodo = {
      display: formData.Todo
    };
    addTodo(newTodo);
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Todo:</label>
        <input
          type="text"
          placeholder="Todo"
          value={formData.Todo}
          onChange={handleChange}
          name="Todo"
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
