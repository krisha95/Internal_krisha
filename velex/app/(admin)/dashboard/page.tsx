import React from "react";
import FinanceCards from "./components/statistics";
import { Col, Row } from "react-bootstrap";
import Performance from "./components/Performance";

const Page = () => {
  return (
    <>
      <Row>
        <Col xxl={3}>
          <FinanceCards />
        </Col>
        <Performance />
      </Row>
    </>
  );
};

export default Page;
