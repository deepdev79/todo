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

  return (
    <div>
      <h1>Things to do</h1>
      <AddEvent task={task} onSetTask={setTask} onHandleSubmit={handleSubmit} />
      <ToDoEvents items={items} onDeleteItem={handleDelete} />
      <Button />
    </div>
  );
}

function AddEvent({ task, onSetTask, onHandleSubmit }) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={task}
          onChange={(e) => onSetTask(e.target.value)}
        ></input>
        <button onClick={onHandleSubmit}>Add</button>
      </form>
    </div>
  );
}

function ToDoEvents({ items, onDeleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <List item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function List({ item, onDeleteItem }) {
  return (
    <li>
      <input type="CheckBox" value={item.task}></input>
      <span>{item.task}</span>
      <button onClick={() => onDeleteItem(item.id)}>🗑️</button>
    </li>
  );
}

function Button() {
  return <button>Complete</button>;
}

export default App;
