import Todo from "./Todo"

const Todos = ({todos, onClick, onDelete}) => {
    return (
        <div className="todo-container">
            <h2>Todos List</h2>
            {todos.map(todo => (<Todo onClick={onClick} onDelete={onDelete} todo={todo}  key={todo.id} completed={todo.completed}/>))}
        </div>
    )
}

export default Todos
