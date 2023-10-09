import { useState } from "react";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    props.addTodo(title);
    setTitle("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add new task..."
        onChange={handleChange}
        value={title}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
