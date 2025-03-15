import React from "react";
import TodoList from "./TodoList";
import { Col, Row } from "react-bootstrap";

const page = () => {
  return (
    <Row>
      <Col>
        <TodoList />
      </Col>
    </Row>
  );
};

export default page;
