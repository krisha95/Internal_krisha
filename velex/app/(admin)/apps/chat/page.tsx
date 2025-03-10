"use client";
import React from "react";
import ChatSideBar from "./components/ChatSideBar";
import { Col, Row } from "react-bootstrap";
import ChatBox from "./tabcomponents/ChatBox";
import SimpleBar from "simplebar-react";

const page = () => {
  return (
    // <div className="wrapper">
    //   <div className="page-content">
    // <div className="container-xxl">
    <Row className="g-1">
      <Col xxl={3}>
        <ChatSideBar />
      </Col>
      <Col xxl={9}>
        <ChatBox />
      </Col>
    </Row>
    // </div>
    //   </div>
    // </div>
  );
};

export default page;
