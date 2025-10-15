"use client";

import React, { useState } from "react";
import {
  Modal,
  Button,
  Select,
  Stack,
  Group,
  Text,
  Badge,
} from "@mantine/core";
import { OrderStatus } from "./OrderDetailModal";

interface OrderStatusModalProps {
  opened: boolean;
  onClose: () => void;
  currentStatus: OrderStatus;
  onUpdateStatus?: (status: OrderStatus) => void;
}

export const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "Pending":
      return "gray";
    case "Baking":
      return "yellow";
    case "Ready":
      return "blue";
    case "Completed":
      return "green";
    default:
      return "gray";
  }
};

const OrderStatusModal: React.FC<OrderStatusModalProps> = ({
  opened,
  onClose,
  currentStatus,
  onUpdateStatus,
}) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const handleUpdate = () => {
    if (!selectedStatus || !onUpdateStatus) return;
    onUpdateStatus(selectedStatus);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Update Order Status"
      centered
    >
      <Stack gap="sm">
        <Group gap={16}>
          <Text fw={600}>Current Status:</Text>
          <Badge variant="light" color={getStatusColor(currentStatus)}>
            {currentStatus}
          </Badge>
        </Group>
        <Select
          label="New Status"
          placeholder="Select status"
          data={["Pending", "Baking", "Ready", "Completed"]}
          value={selectedStatus}
          onChange={(value: string | null) => {
            if (value === null) return;
            setSelectedStatus(value as OrderStatus);
          }}
        />
        <Button onClick={handleUpdate} radius="md" mt="md">
          Update
        </Button>
      </Stack>
    </Modal>
  );
};

export default OrderStatusModal;
