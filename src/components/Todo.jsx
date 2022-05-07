import {FaTrash} from "react-icons/fa"

const Todo = ({todo, completed, onClick, onDelete }) => {
    return (
        <div className="todos">
            <h3 style={{color: completed ? "grey" : "black", textDecoration: completed ? "line-through" : "none"}}><input type="checkbox" onClick={() => onClick(todo.id)}/>{todo.text} </h3>
            <div className="btn-container">
                <button className="btn" onClick={() => onDelete(todo.id)}>
                <FaTrash color="red"/>
                </button>
                </div>
        </div>
    )
}

export default Todo
