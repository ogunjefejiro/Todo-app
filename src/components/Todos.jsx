import Todo from "./Todo";

const Todos = ({ handleChecked, handleDelete, parseTodos }) => {
  return (
    <div className="todo-container">
      <h2>Todos List</h2>
      {parseTodos.map((todo) => (
        <Todo
          text={todo.get("text")}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          key={todo.id}
          id={todo.id}
          completed={todo.get("completed")}
        />
      ))}
    </div>
  );
};

export default Todos;
