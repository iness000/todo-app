import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const addTask = (taskTitle) => {
    console.log("adding a new task");
    const task = {
      id: currentId,
      title: taskTitle,
      date: new Date(),
      done: false,
    };
    setTasks([...tasks, task]);
    setCurrentId(currentId + 1);
  };

  return (
    <div style={{ padding: "0 50px" }}>
      <AddTask addTask={addTask} />
      <TasksList setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
