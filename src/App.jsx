import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [items, setItem] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setItem((items) => [...items, task]);
  }

  return (
    <div>
      <h1>Things to do</h1>
      <AddEvent task={task} onSetTask={setTask} onHandleSubmit={handleSubmit} />
      <ToDoEvents items={items} />
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

function ToDoEvents({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <List item={item} />
        ))}
      </ul>
    </div>
  );
}

function List({ item }) {
  return (
    <li>
      <input type="CheckBox" value={item}></input>
      <span>{item}</span>
    </li>
  );
}

function Button() {
  return <button>Complete</button>;
}

export default App;
