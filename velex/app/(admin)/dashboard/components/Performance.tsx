"use client";
import CustomApexChart from "@/components/CustomApexChart";
import React from "react";
import { Alert, Button, Card, CardBody, Col, Row } from "react-bootstrap";
import { conversions, performanceChart } from "../data";

const Performance = () => {
  return (
    <Col xxl={9}>
      <Card>
        <CardBody className="p-0">
          <Row className="g-0">
            <Col lg={8}>
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Performance</h4>
                  <div>
                    {["ALL", "1M", "6M", "1Y"].map((label, index) => (
                      <Button
                        key={index}
                        className="me-1"
                        variant="outline-light"
                        size="sm"
                        active={label === "1Y"}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>

                <Alert variant="warning" className="mt-3 text-truncate mb-0">
                  We regret to inform you that our server is currently
                  experiencing technical difficulties.
                </Alert>

                <div dir="ltr">
                  <CustomApexChart
                    type="line"
                    height={270}
                    series={performanceChart.series}
                    options={performanceChart}
                  />
                </div>
              </div>
            </Col>

            <Col lg={4} className="border-start">
              <div className="p-3">
                <h5 className="card-title">Conversions</h5>

                <CustomApexChart
                  type="radialBar"
                  height={265}
                  series={conversions.series}
                  options={conversions}
                  className="apex-charts mb-2 mt-n2"
                />

                <Row className="text-center">
                  <Col xs={6}>
                    <p className="text-muted mb-2">This Week</p>
                    <h4 className="text-dark mb-3">23.5k</h4>
                  </Col>
                  <Col xs={6}>
                    <p className="text-muted mb-2">Last Week</p>
                    <h4 className="text-dark mb-3">41.05k</h4>
                  </Col>
                </Row>

                <div className="text-center">
                  <Button variant="light" className="shadow-none w-100">
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Performance;
