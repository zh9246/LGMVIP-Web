import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="header">
      <h1>My To-do List</h1>
      <div className="Todo-list-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
