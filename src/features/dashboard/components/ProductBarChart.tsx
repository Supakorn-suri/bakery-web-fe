"use client";
import React from "react";
import { Card, Title } from "@mantine/core";
import { BarChart } from "@mantine/charts";

interface ProductBarChartProps {
  title: string;
  data: any[];
  series: { name: string; color: string }[];
  dataKey: string;
  height?: number;
}

export const ProductBarChart = ({
  title,
  data,
  series,
  dataKey,
  height = 300,
}: ProductBarChartProps) => {
  return (
    <Card shadow="sm" radius="md" p={24} withBorder h="100%">
      <Title order={4} mb={24}>
        {title}
      </Title>
      <BarChart h={height} data={data} dataKey={dataKey} withLegend series={series} />
    </Card>
  );
};
