"use client";

import React from "react";
import { Timeline, Modal, Text, Stack, Group, Button } from "@mantine/core";
import {
  IconClipboardList,
  IconChefHat,
  IconTruckDelivery,
  IconCheck,
} from "@tabler/icons-react";

export type OrderStatus = "Pending" | "Baking" | "Ready" | "Completed";

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: OrderStatus;
  timeline?: {
    pendingAt?: string;
    bakingAt?: string;
    readyAt?: string;
    completedAt?: string;
  };
}

interface OrderDetailModalProps {
  opened: boolean;
  onClose: () => void;
  order?: Order;
}

const OrderDetailModal: React.FC<OrderDetailModalProps> = ({
  opened,
  onClose,
  order,
}) => {
  const activeStep =
    order?.status === "Pending"
      ? 0
      : order?.status === "Baking"
      ? 1
      : order?.status === "Ready"
      ? 2
      : 3;

  return (
    <Modal opened={opened} onClose={onClose} title="Order Details" centered>
      {order ? (
        <Stack gap={8}>
          <Text>
            <Text span fw={600}>
              Order ID:
            </Text>{" "}
            {order.id}
          </Text>
          <Text>
            <Text span fw={600}>
              Customer:
            </Text>{" "}
            {order.customer}
          </Text>
          <Text>
            <Text span fw={600}>
              Date:
            </Text>{" "}
            {order.date}
          </Text>
          <Text>
            <Text span fw={600}>
              Total:
            </Text>{" "}
            ฿{order.total.toLocaleString()}
          </Text>

          {/* Timeline without labels */}
          <Timeline active={activeStep} bulletSize={24} lineWidth={2} mt={12}>
            <Timeline.Item
              bullet={<IconClipboardList size={14} />}
              title="Order Received"
            >
              <Text size="xs" c="dimmed" mt={4}>
                {order.timeline?.pendingAt ?? "-"}
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconChefHat size={14} />}
              title="Preparing Order"
            >
              <Text size="xs" c="dimmed" mt={4}>
                {order.timeline?.bakingAt ?? "-"}
              </Text>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconTruckDelivery size={14} />}
              title="Out for Delivery"
            >
              <Text size="xs" c="dimmed" mt={4}>
                {order.timeline?.readyAt ?? "-"}
              </Text>
            </Timeline.Item>

            <Timeline.Item bullet={<IconCheck size={14} />} title="Delivered">
              <Text size="xs" c="dimmed" mt={4}>
                {order.timeline?.completedAt ?? "-"}
              </Text>
            </Timeline.Item>
          </Timeline>

          <Group justify="flex-end" mt={12}>
            <Button onClick={onClose} radius="md">
              Close
            </Button>
          </Group>
        </Stack>
      ) : (
        <Text>No order selected</Text>
      )}
    </Modal>
  );
};

export default OrderDetailModal;
