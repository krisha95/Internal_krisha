import React from "react";
import Statistics from "./components/Statistics";
import { Col, Row } from "react-bootstrap";
import Performance from "./components/Performance";
import Tasks from "./components/Tasks";
import SessionsByCountry from "./components/SessionsByCountry";
import FriendsRequest from "./components/FriendsRequest";
import RecentTransactions from "./components/RecentTransactions";

const Page = () => {
  return (
    <>
      <Row>
        <Col xxl={3}>
          <Statistics />
        </Col>
        <Performance />
      </Row>
      <Row>
        <Col xxl={12}>
          <SessionsByCountry />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Tasks />
        </Col>
        <Col xl={4}>
          <FriendsRequest />
        </Col>
        <Col xl={4}>
          <RecentTransactions />
        </Col>
      </Row>
    </>
  );
};

export default Page;
