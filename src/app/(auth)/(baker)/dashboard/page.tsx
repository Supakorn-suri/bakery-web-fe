"use client";

import React from "react";
import {
  IconBasket,
  IconFileInvoice,
  IconUser,
  IconCoin,
  IconEdit,
} from "@tabler/icons-react";
import {
  Container,
  Flex,
  Text,
  Card,
  Avatar,
  Stack,
  Group,
  Divider,
  Title,
  ColorSwatch,
  SimpleGrid,
  Grid,
  ActionIcon,
} from "@mantine/core";
import { LineChart, BarChart, DonutChart } from "@mantine/charts";

const salesTrend = [
  { date: "Oct 1", Croissant: 120, Baguette: 90, Muffin: 60 },
  { date: "Oct 2", Croissant: 150, Baguette: 100, Muffin: 80 },
  { date: "Oct 3", Croissant: 200, Baguette: 140, Muffin: 100 },
  { date: "Oct 4", Croissant: 180, Baguette: 130, Muffin: 95 },
  { date: "Oct 5", Croissant: 240, Baguette: 150, Muffin: 110 },
];

const productPerformance = [
  { month: "July", Croissant: 4200, Baguette: 3100, Muffin: 2300 },
  { month: "August", Croissant: 4800, Baguette: 2900, Muffin: 2500 },
  { month: "September", Croissant: 5300, Baguette: 3600, Muffin: 2700 },
  { month: "October", Croissant: 6100, Baguette: 4000, Muffin: 3100 },
];

const orderStatus = [
  { name: "Delivered", value: 320, color: "#fd7e14" },
  { name: "Pending", value: 45, color: "#fab005" },
  { name: "Cancelled", value: 15, color: "#f03e3e" },
];

const mockdata = [
  {
    title: "Total Orders",
    value: "380 Orders",
    icon: IconFileInvoice,
  },
  {
    title: "Total Sales",
    value: "฿45,250",
    icon: IconCoin,
  },
  {
    title: "Customers",
    value: "520",
    icon: IconUser,
  },
  {
    title: "Top Product",
    value: "Croissant",
    icon: IconBasket,
  },
];

const DashboardPage = () => {
  const user = {
    name: "Alice A.",
    email: "sweetcrumbs@example.com",
    address: "45 Bakery Street, Bangkok, Thailand",
    avatar:
      "https://images.unsplash.com/photo-1532635224-cf024e66d122?q=80&w=2070&auto=format&fit=crop",
    bakeryName: "Sweet Crumbs Bakery",
    phoneNumber: "0123456789",
  };

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="sm" radius="md" p={24} withBorder>
      <feature.icon size={50} stroke={1.5} color="#8A4621" />
      <Text c="dimmed">{feature.title}</Text>
      <Text fw={600}>{feature.value}</Text>
    </Card>
  ));

  return (
    <Container mt={64} p={24}>
      <Flex direction="column" gap={24}>
        {/* Bakery Info */}
        <Card shadow="sm" radius="md" p={24} withBorder>
          <Group justify="space-between">
            <Title order={2}>Bakery Info</Title>
            <ActionIcon variant="light">
              <IconEdit size={20} stroke={1.5} />
            </ActionIcon>
          </Group>
          <Flex direction="column" align="center" gap={16}>
            <Avatar src={user.avatar} size={100} />
            <Stack w="100%" mt={16} gap={12}>
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Name
                </Text>
                <Text fw={500}>{user.name}</Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Email
                </Text>
                <Text fw={500}>{user.email}</Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Address
                </Text>
                <Text fw={500}>{user.address}</Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Bakery Name
                </Text>
                <Text fw={500}>{user.bakeryName}</Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Phone Number
                </Text>
                <Text fw={500}>{user.phoneNumber}</Text>
              </Group>
            </Stack>
          </Flex>
        </Card>

        {/* Overview & Charts */}
        <Title order={2}>Overview</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xl">
          {features}
        </SimpleGrid>

        <Card shadow="sm" radius="md" p={24} withBorder>
          <Title order={4} mb={24}>
            Sales Trend
          </Title>
          <LineChart
            h={300}
            data={salesTrend}
            dataKey="date"
            withLegend
            series={[
              { name: "Croissant", color: "yellow.6" },
              { name: "Baguette", color: "orange.6" },
              { name: "Muffin", color: "primary.6" },
            ]}
          />
        </Card>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <Card shadow="sm" radius="md" p={24} withBorder h="100%">
              <Title order={4} mb={24}>
                Monthly Product Performance
              </Title>
              <BarChart
                h={300}
                data={productPerformance}
                dataKey="month"
                withLegend
                series={[
                  { name: "Croissant", color: "yellow.6" },
                  { name: "Baguette", color: "orange.6" },
                  { name: "Muffin", color: "primary.6" },
                ]}
              />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Card shadow="sm" radius="md" p={24} withBorder h="100%">
              <Title order={4} mb={24}>
                Order Status Summary
              </Title>
              <Flex
                direction={{ base: "column", xs: "row", sm: "column" }}
                gap={{ base: 24, xs: 48, sm: 24 }}
                justify="center"
                align="center"
              >
                <DonutChart
                  paddingAngle={4}
                  thickness={30}
                  size={160}
                  tooltipDataSource="segment"
                  data={orderStatus}
                />
                <Stack gap={12}>
                  {orderStatus.map((status) => (
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
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
};

export default DashboardPage;
