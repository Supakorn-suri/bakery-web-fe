"use client";
import React from "react";
import { Card, Title } from "@mantine/core";
import { LineChart } from "@mantine/charts";

interface SalesLineChartProps {
  title: string;
  data: any[];
  series: { name: string; color: string }[];
  dataKey: string;
  height?: number;
}

export const SalesLineChart = ({
  title,
  data,
  series,
  dataKey,
  height = 300,
}: SalesLineChartProps) => {
  return (
    <Card shadow="sm" radius="md" p={24} withBorder>
      <Title order={4} mb={24}>
        {title}
      </Title>
      <LineChart h={height} data={data} dataKey={dataKey} withLegend series={series} />
    </Card>
  );
};
