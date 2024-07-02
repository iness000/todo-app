import React, { useState } from "react";

export function AddTask({ addTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const onTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // to prevent refreshing the page on form submit
    addTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div>
      <form>
        <input type="text" onChange={onTaskTitleChange} value={taskTitle} />
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
