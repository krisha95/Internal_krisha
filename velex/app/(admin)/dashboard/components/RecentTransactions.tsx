"use client";
import React from "react";
import { Card, Table, Badge, Button } from "react-bootstrap";
import SimpleBar from "simplebar-react";

interface Transaction {
  id: number;
  date: string;
  amount: string;
  type: "Cr" | "Dr";
  description: string;
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      date: "24 April, 2024",
      amount: "$120.55",
      type: "Cr",
      description: "Commissions",
    },
    {
      id: 2,
      date: "24 April, 2024",
      amount: "$9.68",
      type: "Cr",
      description: "Affiliates",
    },
    {
      id: 3,
      date: "20 April, 2024",
      amount: "$105.22",
      type: "Dr",
      description: "Grocery",
    },
    {
      id: 4,
      date: "18 April, 2024",
      amount: "$80.59",
      type: "Cr",
      description: "Refunds",
    },
    {
      id: 5,
      date: "18 April, 2024",
      amount: "$750.95",
      type: "Dr",
      description: "Bill Payments",
    },
    {
      id: 6,
      date: "17 April, 2024",
      amount: "$455.62",
      type: "Dr",
      description: "Electricity",
    },
    {
      id: 7,
      date: "17 April, 2024",
      amount: "$102.77",
      type: "Cr",
      description: "Interest",
    },
    {
      id: 8,
      date: "16 April, 2024",
      amount: "$79.49",
      type: "Cr",
      description: "Refunds",
    },
    {
      id: 9,
      date: "05 April, 2024",
      amount: "$980.00",
      type: "Dr",
      description: "Shopping",
    },
  ];

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title as="h4">Recent Transactions</Card.Title>
        <Button variant="primary" size="sm" className="rounded-pill">
          View All
        </Button>
      </Card.Header>

      <SimpleBar style={{ maxHeight: "406px", overflowY: "auto" }}>
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 text-nowrap">
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <Badge
                      bg={transaction.type === "Cr" ? "success" : "danger"}
                    >
                      {transaction.type}
                    </Badge>
                  </td>
                  <td>{transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </SimpleBar>
    </Card>
  );
};

export default RecentTransactions;
