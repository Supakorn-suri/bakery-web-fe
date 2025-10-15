"use client";

import React from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Paper,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconEdit, IconTrash, IconSearch, IconDots } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";

import OrderDetailModal, {
  Order,
} from "@/features/orders/components/OrderDetailModal";
import OrderStatusModal, {
  getStatusColor,
} from "@/features/orders/components/OrderStatusModal";

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Alice Brown",
    date: "2025-10-06",
    total: 750,
    status: "Pending",
  },
  {
    id: "ORD-002",
    customer: "John Smith",
    date: "2025-10-07",
    total: 1200,
    status: "Baking",
  },
  {
    id: "ORD-003",
    customer: "Emma Davis",
    date: "2025-10-07",
    total: 980,
    status: "Ready",
  },
  {
    id: "ORD-004",
    customer: "Liam Johnson",
    date: "2025-10-08",
    total: 1450,
    status: "Completed",
  },
];

const mockOrderDetail: Order = {
  id: "ORD-001",
  customer: "Alice",
  date: "2025-10-08",
  total: 350,
  status: "Ready",
  timeline: {
    pendingAt: "08:30",
    bakingAt: "09:00",
    readyAt: "09:45",
    completedAt: "",
  },
};

const OrderPage = () => {
  const [
    openedDetailModal,
    { open: openDetailModal, close: closeDetailModal },
  ] = useDisclosure(false);

  const [
    openedStatusModal,
    { open: openStatusModal, close: closeStatusModal },
  ] = useDisclosure(false);

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Delete Order",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this order? This action is permanent
          and cannot be undone.
        </Text>
      ),
      labels: { confirm: "Delete Order", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  const rows = mockOrders.map((order) => (
    <Table.Tr key={order.id}>
      <Table.Td>
        <Text fw={500}>{order.id}</Text>
      </Table.Td>
      <Table.Td>{order.customer}</Table.Td>
      <Table.Td>{order.date}</Table.Td>
      <Table.Td>฿{order.total.toLocaleString()}</Table.Td>
      <Table.Td>
        <Badge variant="light" color={getStatusColor(order.status)}>
          {order.status}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Group gap={8}>
          <Tooltip label="More Detail">
            <ActionIcon variant="light" color="teal" onClick={openDetailModal}>
              <IconDots size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="View / Edit Order">
            <ActionIcon variant="light" color="blue" onClick={openStatusModal}>
              <IconEdit size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete Order">
            <ActionIcon variant="light" color="red" onClick={openDeleteModal}>
              <IconTrash size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper w="100%" py={16} px={24}>
      <Group justify="space-between" mt={80} mb={24}>
        <Title order={3}>Orders Management</Title>
        <Button leftSection={<IconSearch size={16} />} radius="md">
          Search / Filter
        </Button>
      </Group>

      <Table
        highlightOnHover
        stickyHeader
        stickyHeaderOffset={60}
        verticalSpacing="sm"
        horizontalSpacing="md"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Customer</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <OrderDetailModal
        opened={openedDetailModal}
        onClose={closeDetailModal}
        order={mockOrderDetail}
      />
      <OrderStatusModal
        opened={openedStatusModal}
        onClose={closeStatusModal}
        currentStatus={"Pending"}
      />
    </Paper>
  );
};

export default OrderPage;
