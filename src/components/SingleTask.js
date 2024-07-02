import React from "react";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function SingleTask({ task, toggleDoneStatus, deleteTask }) {
  const onToggle = () => {
    toggleDoneStatus(task.id);
  };

  const onDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Card text={"dark"} style={{ width: "18rem" }} className="mb-2">
      <Card.Body>
        <Card.Title style={{ textDecoration: task.done ? "line-through" : "" }}>
          {" "}
          {task.title}{" "}
        </Card.Title>
        <Form.Check type="checkbox" label="done" onChange={onToggle} />
        <Card.Text>{task.date.toLocaleDateString()}</Card.Text>
        <Button onClick={onDelete}>delete</Button>
      </Card.Body>
    </Card>
  );
}
