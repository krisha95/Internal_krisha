"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Card, Col } from "react-bootstrap";
import { FinanceCardProps } from "../types";
import { currency } from "@/helpers";

type PropsType = {
  item: FinanceCardProps;
};

const FinanceCard = ({ item }: PropsType) => {
  const isPositive = item.growth > 0;
  const isNegative = item.growth < 0;

  const variant = isPositive ? "success" : isNegative ? "danger" : "warning";
  const growthIcon = isPositive
    ? "tabler:arrow-badge-up"
    : isNegative
    ? "tabler:arrow-badge-down"
    : "tabler:minus";

  return (
    <Col md={6} xxl={12}>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-0 fw-bold mb-2">
                {item.prefix}
                {item.amount}
                {item.suffix}
              </h4>
              <p className="text-muted">{item.title}</p>
              <span className={`badge fs-12 badge-soft-${variant}`}>
                <Icon icon={growthIcon} /> {Math.abs(item.growth)}%
              </span>
            </div>
            <div>
              <div className="avatar-lg d-inline-block me-1">
                <span
                  className={`avatar-title bg-${item.Variant}-subtle text-${item.Variant} rounded-circle`}
                >
                  <Icon icon={item.icon} className="fs-32" />
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const statistics = () => {
  const financeData: FinanceCardProps[] = [
    {
      title: "Wallet Balance",
      amount: 55.6,
      growth: 8.72,
      icon: "solar:wallet-money-outline",
      Variant: "secondary",
      suffix: "k",
      prefix: currency,
    },
    {
      title: "Total Income",
      amount: 75.09,
      growth: 7.36,
      icon: "solar:shop-2-outline",
      Variant: "primary",
      suffix: "k",
      prefix: currency,
    },
    {
      title: "Total Expenses",
      amount: 62.8,
      growth: -5.62,
      icon: "solar:hand-money-outline",
      Variant: "secondary",
      suffix: "k",
      prefix: currency,
    },
  ];

  return (
    <div className="row">
      {financeData.map((item, index) => (
        <FinanceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default statistics;
