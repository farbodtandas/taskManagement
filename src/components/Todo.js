export default function Todo({ task, toggleDone, deleteTodo }) {
  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleDone(task)}
        />
        <span>{task.title}</span>
      </div>
      <div>
        <button onClick={() => deleteTodo(task)}>X</button>
      </div>
    </div>
  );
}
