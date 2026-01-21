import { useState } from "react";

export default function Checklist() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <>
      <h4>Checklist</h4>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <input type="checkbox" /> {task}
            <button
              onClick={() =>
                setTasks(tasks.filter((_, idx) => idx !== i))
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

