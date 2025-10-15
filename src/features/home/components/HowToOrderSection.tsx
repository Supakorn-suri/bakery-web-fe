"use client";

import React from "react";
import { Box, Flex, Text, Title } from "@mantine/core";
import {
  IconShoppingBag,
  IconClipboardCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

export const HowToOrderSection = () => {
  return (
    <Box ta="center" px={24} mt={{ base: 64, xs: 120 }}>
      <Title order={3} mb={32}>
        How to Order
      </Title>
      <Flex
        direction={{ base: "column", xs: "row" }}
        justify="center"
        align="center"
        gap={{ base: 24, xs: 48 }}
      >
        <OrderStep
          icon={<IconShoppingBag size={64} stroke={1.5} color="#E59866" />}
          title="1. Choose Your Favorite"
          description="Pick the pastries or breads you love from our menu."
        />

        <OrderStep
          icon={<IconClipboardCheck size={64} stroke={1.5} color="#E59866" />}
          title="2. Place Your Order"
          description="Add to cart and confirm your order easily."
        />

        <OrderStep
          icon={<IconTruckDelivery size={64} stroke={1.5} color="#E59866" />}
          title="3. Enjoy Fresh Delivery"
          description="Sit back and wait for your fresh treats to arrive."
        />
      </Flex>
    </Box>
  );
};

type OrderStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const OrderStep = ({ icon, title, description }: OrderStepProps) => (
  <Box maw={250}>
    {icon}
    <Text fw={600} mt={16}>
      {title}
    </Text>
    <Text c="dimmed" fz="sm">
      {description}
    </Text>
  </Box>
);
