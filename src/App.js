import { useState, useEffect } from "react";
import AddTodos from "./components/AddTodos";
import Header from "./components/Header";
import Todos from "./components/Todos";
import "./index.css";
import Parse from "parse/lib/browser/Parse";

Parse.initialize("vExK4h0GaQNFF05q5I7nB6BXwkokG9y5baWwzRzM", "AQ8yHjobpxgdna5BzVPfhRWtec55ndvtESboaXq2");
Parse.serverURL = "https://parseapi.back4app.com";

function App() {
  const [parseTodos, setParseTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChecked = async (id) => {
    const query = new Parse.Query("Todos");
    const update = query.equalTo("objectId", id);
    const result = await update.first();
    if (result.get("completed") === false) {
      result.set("completed", true);
    } else {
      result.set("completed", false);
    }
    result.save();
    getTodos();
  };
  const handleDelete = async (id) => {
    const query = new Parse.Query("Todos");
    const remove = query.equalTo("objectId", id);
    const result = await remove.first();
    result.destroy().then(() => {
      getTodos();
      alert("Todo has been successfully deleted");
    });
  };
  const addNewTodo = async ({ text, completed }) => {
    try {
      // create a new Parse Object instance
      const Todos = new Parse.Object("Todos");
      // define the attributes you want for your Object
      Todos.set("text", text);
      Todos.set("completed", completed);
      // save it on Back4App Data Store
      await Todos.save();
      getTodos();
    } catch (error) {
      console.log("Error saving new todos: ", error);
    }
  };

  const getTodos = async () => {
    // create your Parse Query using the Person Class you've created
    const query = new Parse.Query("Todos");
    query.descending("createdAt");
    // run the query
    const todo = await query.find();
    setParseTodos(todo);
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <Header />
      <AddTodos onAdd={addNewTodo} />
      {loading ? (
        <div className="spinner">
          <img src="/spinner.gif" alt="" />
        </div>
      ) : (
        <div>
          {parseTodos?.length > 0 && (
            <Todos parseTodos={parseTodos} handleChecked={handleChecked} handleDelete={handleDelete} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
