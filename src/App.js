import { useRef, useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import "./styles.css";

const tasks = [];

export default function App() {
  const [todos, setTodos] = useState(tasks);
  const todoRef = useRef(0);

  function addTask(title) {
    if (title) {
      todoRef.current += 1;
      const task = {
        id: todoRef.current,
        title: title,
        completed: false
      };
      setTodos((todos) => [...todos, task]);
    }
  }

  function toggleDone(task) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === task.id) {
        return {
          ...todo,
          title: <del>{todo.title}</del>,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    setTodos((prev) => updatedTodos);
  }

  function deleteTodo(task) {
    const updatedTasks = todos.filter((todo) => todo.id !== task.id);
    setTodos((prev) => updatedTasks);
  }

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <Todos data={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTask} />
    </div>
  );
}
