"use client";

import React from "react";
import { ActionIcon, Paper, Title, Badge, Table } from "@mantine/core";
import { IconDots } from "@tabler/icons-react";

const mockOrders = [
  {
    id: "ORD-001",
    date: "2025-09-20",
    total: 1250,
    status: "Delivered",
  },
  {
    id: "ORD-002",
    date: "2025-09-25",
    total: 890,
    status: "Processing",
  },
  {
    id: "ORD-003",
    date: "2025-10-01",
    total: 640,
    status: "Shipped",
  },
  {
    id: "ORD-004",
    date: "2025-10-03",
    total: 320,
    status: "Cancelled",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "green";
    case "Processing":
      return "yellow";
    case "Shipped":
      return "blue";
    case "Cancelled":
      return "red";
    default:
      return "gray";
  }
};

const OrderPage = () => {
  const rows = mockOrders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td>{order.id}</Table.Td>
      <Table.Td>{order.date}</Table.Td>
      <Table.Td>฿{order.total}</Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(order.status)}>{order.status}</Badge>
      </Table.Td>
      <Table.Td>
        <ActionIcon variant="light">
          <IconDots />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper w="100%" py={16}>
      <Title order={2} mb={16}>
        Order History
      </Title>
      <Table stickyHeader stickyHeaderOffset={60}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Paper>
  );
};

export default OrderPage;
