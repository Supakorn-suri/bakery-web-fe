"use client";
import React from "react";
import {
  Card,
  Title,
  Flex,
  Stack,
  Group,
  Text,
  ColorSwatch,
} from "@mantine/core";
import { DonutChart } from "@mantine/charts";

interface OrderStatus {
  name: string;
  value: number;
  color: string;
}

interface OrderDonutChartProps {
  title: string;
  data: OrderStatus[];
  size?: number;
  thickness?: number;
}

export const OrderDonutChart = ({
  title,
  data,
  size = 160,
  thickness = 30,
}: OrderDonutChartProps) => {
  return (
    <Card shadow="sm" radius="md" p={24} withBorder h="100%">
      <Title order={4} mb={24}>
        {title}
      </Title>
      <Flex
        direction={{ base: "column", xs: "row", sm: "column" }}
        gap={{ base: 24, xs: 48, sm: 24 }}
        justify="center"
        align="center"
      >
        <DonutChart
          paddingAngle={4}
          thickness={thickness}
          size={size}
          tooltipDataSource="segment"
          data={data}
        />
        <Stack gap={12}>
          {data.map((status) => (
            <Group key={status.name} justify="space-between">
              <Group>
                <ColorSwatch
                  color={status.color}
                  size={12}
                  withShadow={false}
                />
                <Text>{status.name}</Text>
              </Group>
              <Text fw={600}>{status.value}</Text>
            </Group>
          ))}
        </Stack>
      </Flex>
    </Card>
  );
};
