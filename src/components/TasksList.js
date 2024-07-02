import { SingleTask } from "./SingleTask";

export function TasksList({ tasks, setTasks }) {
  const toggleDoneStatus = (id) => {
    console.log("triggered update done status");
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newTask = { ...task };
        newTask.done = !newTask.done;
        return newTask;
      }

      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    console.log("triggered delete");
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
      {tasks.map((task) => (
        <div key={task.id}>
          <SingleTask
            task={task}
            toggleDoneStatus={toggleDoneStatus}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </div>
  );
}
