import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="todos">
      {props.data.map((todo) => (
        <Todo
          key={todo.id}
          task={todo}
          toggleDone={props.toggleDone}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
}
