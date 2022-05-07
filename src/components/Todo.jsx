import { FaTrash } from "react-icons/fa";

const Todo = ({ completed, text, id, handleChecked, handleDelete }) => {
  return (
    <div className="todos">
      <h3 style={{ color: completed ? "grey" : "black", textDecoration: completed && "line-through" }}>
        <input type="checkbox" defaultChecked={completed} onClick={() => handleChecked(id)} />
        {text}
      </h3>
      <div className="btn-container">
        <button className="btn" onClick={() => handleDelete(id)}>
          <FaTrash color="red" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
