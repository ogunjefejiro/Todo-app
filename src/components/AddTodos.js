import { useState } from "react"
const AddTodos = ({onAdd}) => {

    const [text, setText] = useState("")
    const [completed, setCompleted] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add todos")
            return
        }

        onAdd({text, completed})

        setText("")
        setCompleted(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Type in your todos..." value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default AddTodos
