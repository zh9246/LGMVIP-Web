import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 10000),
      isComplete: false,
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        className="todo-input"
        name="text"
        onChange={handleChange}
        placeholder="Add a todo"
        type="text"
        value={input}
      />
      <button className="todo-btn" onClick={handleSubmit} type="submit">
        Add To-do
      </button>
    </form>
  );
}
