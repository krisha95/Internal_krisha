"use client";
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import {
  BiEdit,
  BiLeftArrowAlt,
  BiPlus,
  BiRightArrowAlt,
  BiSearchAlt,
  BiSolidCircle,
  BiTrash,
} from "react-icons/bi";
import { tasks as initialTasks } from "./data";

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleCheckboxChange = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex flex-wrap justify-content-between gap-3">
          <div className="search-bar">
            <span>
              <i className="bx bx-search-alt">
                <BiSearchAlt />
              </i>
            </span>
            <input
              type="search"
              className="form-control"
              id="search"
              placeholder="Search task..."
            />
          </div>
          <div>
            <Button variant="primary">
              <i className="bx bx-plus me-1">
                <BiPlus />
              </i>
              Create Task
            </Button>
          </div>
        </div>
      </div>

      <div className="table-responsive table-centered">
        <Table className="text-nowrap mb-0">
          <thead className="bg-light bg-opacity-50">
            <tr>
              <th className="border-0 py-2">Task Name</th>
              <th className="border-0 py-2">Created Date</th>
              <th className="border-0 py-2">Due Date</th>
              <th className="border-0 py-2">Assigned</th>
              <th className="border-0 py-2">Status</th>
              <th className="border-0 py-2">Priority</th>
              <th className="border-0 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      id={`customCheck${task.id}`}
                      className="form-check-input rounded-circle mt-0 fs-18"
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                    <label
                      className={`form-check-label ${
                        task.completed
                          ? "text-decoration-line-through text-muted"
                          : ""
                      }`}
                      htmlFor={`customCheck${task.id}`}
                    >
                      {task.taskName}
                    </label>
                  </div>
                </td>
                <td>{task.createdDate}</td>
                <td>{task.dueDate}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={task.assigned.avatar.src}
                      alt=""
                      className="avatar-xs rounded-circle me-2"
                    />
                    <h5 className="fs-14 m-0 fw-normal">
                      {task.assigned.name}
                    </h5>
                  </div>
                </td>
                <td>
                  <span
                    className={`badge ${
                      task.status === "Completed"
                        ? "badge-soft-success"
                        : task.status === "Pending"
                        ? "badge-soft-primary"
                        : "badge-soft-warning"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

                <td
                  className={`text-${
                    task.priority === "High"
                      ? "danger"
                      : task.priority === "Medium"
                      ? "warning"
                      : "success"
                  }`}
                >
                  <i className="bx bxs-circle me-1">
                    <BiSolidCircle />
                  </i>
                  {task.priority}
                </td>
                <td>
                  <Button variant="soft-secondary" size="sm" className="me-1">
                    <i className="bx bx-edit fs-16">
                      <BiEdit />
                    </i>
                  </Button>
                  <Button variant="soft-danger" size="sm">
                    <i className="bx bx-trash fs-16">
                      <BiTrash />
                    </i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
        <div className="col-sm">
          <div className="text-muted">
            Showing <span className="fw-semibold">10</span> of{" "}
            <span className="fw-semibold">52</span> tasks
          </div>
        </div>
        <div className="col-sm-auto mt-3 mt-sm-0">
          <ul className="pagination pagination-rounded m-0">
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="bx bx-left-arrow-alt">
                  <BiLeftArrowAlt />
                </i>
              </a>
            </li>
            <li className="page-item active">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link">
                <i className="bx bx-right-arrow-alt">
                  <BiRightArrowAlt />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
