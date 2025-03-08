"use client";
import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Dropdown,
  ProgressBar,
  CardBody,
  Button,
} from "react-bootstrap";
import { Icon } from "@iconify/react";
import CustomVectorMap from "@/components/CustomVectorMap";
import { worldMapOpts } from "../data";
import { BiChevronDown } from "react-icons/bi";

type CountryData = {
  name: string;
  flagIcon: string;
  sessions: number;
  progress: number;
  color: string;
  suffix: string;
};

const countryData: CountryData[] = [
  {
    name: "United States",
    flagIcon: "circle-flags:us",
    sessions: 659,
    suffix: "k",
    progress: 82.05,
    color: "secondary",
  },
  {
    name: "Russia",
    flagIcon: "circle-flags:ru",
    sessions: 485,
    suffix: "k",
    progress: 70.5,
    color: "info",
  },
  {
    name: "China",
    flagIcon: "circle-flags:cn",
    sessions: 355,
    progress: 65.8,
    suffix: "k",
    color: "warning",
  },
  {
    name: "Canada",
    flagIcon: "circle-flags:ca",
    sessions: 204,
    progress: 55.8,
    color: "success",
    suffix: "k",
  },
  {
    name: "Brazil",
    flagIcon: "circle-flags:br",
    sessions: 109,
    progress: 35.9,
    color: "danger",
    suffix: "k",
  },
];

const SessionsByCountry = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="d-flex card-header justify-content-between align-items-center mb-3">
        <h4 className="m-0 fs-16">Sessions by Country</h4>
        <Dropdown show={show} onToggle={() => setShow(!show)}>
          <Button
            as="button"
            onClick={() => setShow(!show)}
            className="btn btn-sm rounded-pill btn-primary d-flex align-items-center"
          >
            View Data
            <BiChevronDown className="ms-1" />
          </Button>

          <Dropdown.Menu align="end">
            <Dropdown.Item href="#">Download</Dropdown.Item>
            <Dropdown.Item href="#">Export</Dropdown.Item>
            <Dropdown.Item href="#">Import</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Card>
        <CardBody className="pt-0">
          <Row className="align-items-center">
            <Col lg={7}>
              <CustomVectorMap
                type="world"
                height="360px"
                width="100%"
                options={worldMapOpts}
              />
            </Col>
            <Col lg={5} dir="ltr">
              <div className="p-3 pb-0">
                {countryData.map((country) => (
                  <div key={country.name}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-1">
                        <Icon
                          icon={country.flagIcon}
                          className="fs-16 align-middle me-1"
                        />
                        <span className="align-middle">{country.name}</span>
                      </p>
                    </div>
                    <Row className="align-items-center mb-3">
                      <Col>
                        <ProgressBar
                          now={country.progress}
                          variant={country.color}
                          className="progress-soft progress-sm"
                        />
                      </Col>
                      <Col className="col-auto">
                        <p className="mb-0 fs-13 fw-semibold">
                          {country.sessions.toLocaleString()}
                          {country.suffix}
                        </p>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default SessionsByCountry;
