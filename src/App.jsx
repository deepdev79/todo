import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [items, setItem] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { task, id: crypto.randomUUID() };
    setItem((items) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleDeleteAll() {
    setItem((items) => items.filter((item) => item.id === true));
  }

  return (
    <div className="container">
      <h1>Things to remember</h1>
      <AddEvent task={task} onSetTask={setTask} onHandleSubmit={handleSubmit} />
      <ToDoEvents items={items} onDeleteItem={handleDelete} />
      <Button onDeleteAll={handleDeleteAll} />
    </div>
  );
}

function AddEvent({ task, onSetTask, onHandleSubmit }) {
  return (
    <div>
      <form className="addEvent">
        <input
          type="text"
          value={task}
          placeholder="Enter task to remember"
          onChange={(e) => onSetTask(e.target.value)}
        ></input>
        <button className="btn" onClick={onHandleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

function ToDoEvents({ items, onDeleteItem }) {
  return (
    <div>
      <ul className="list">
        {items.map((item) => (
          <List item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function List({ item, onDeleteItem }) {
  return (
    <li className="items">
      <span>{item.task}</span>
      <button
        style={{ float: "right" }}
        className="btn"
        onClick={() => onDeleteItem(item.id)}
      >
        🗑️
      </button>
    </li>
  );
}

function Button({ onDeleteAll }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="btn" onClick={() => onDeleteAll()}>
        Completed All Tasks
      </button>
    </div>
  );
}

export default App;
