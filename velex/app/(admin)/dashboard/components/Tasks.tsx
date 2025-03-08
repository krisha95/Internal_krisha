"use client";

import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import SimpleBar from "simplebar-react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    text: "Review system logs for any reported errors",
    completed: false,
  },
  {
    id: 2,
    text: "Conduct user testing to identify potential bugs",
    completed: false,
  },
  { id: 3, text: "Gather feedback from stakeholders", completed: false },
  {
    id: 4,
    text: "Prioritize bugs based on severity and impact",
    completed: false,
  },
  {
    id: 5,
    text: "Investigate and analyze the root cause of each bug",
    completed: false,
  },
  {
    id: 6,
    text: "Develop and implement fixes for the identified bugs",
    completed: false,
  },
  { id: 7, text: "Complete any recurring tasks", completed: false },
  { id: 8, text: "Check emails and respond", completed: false },
  { id: 9, text: "Review schedule for the day", completed: false },
  { id: 10, text: "Daily stand-up meeting", completed: false },
];

const MyTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="card-title">My Tasks</h4>
        <div>
          <Button variant="primary" size="sm" className="rounded-pill">
            <FiPlus className="me-1" />
            Create Task
          </Button>
        </div>
      </Card.Header>

      <Card.Body className="p-0 pb-3">
        <SimpleBar className="scrollbar" style={{ maxHeight: "386px" }}>
          <div className="p-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="form-check form-todo py-1 my-2 ps-4"
              >
                <input
                  type="checkbox"
                  id={`customCheck${task.id}`}
                  className="form-check-input rounded-circle mt-0 fs-18"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor={`customCheck${task.id}`}
                >
                  {task.text}
                </label>
              </div>
            ))}
          </div>
        </SimpleBar>
      </Card.Body>
    </Card>
  );
};

export default MyTasks;
