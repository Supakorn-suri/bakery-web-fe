"use client";

import React, { useEffect } from "react";
import {
  IconBasket,
  IconFileInvoice,
  IconUser,
  IconCoin,
} from "@tabler/icons-react";
import {
  Container,
  Flex,
  Text,
  Card,
  Title,
  SimpleGrid,
  Stack,
  Skeleton,
  Grid,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { ProfileCard } from "@/features/profiles/components/ProfileCard";
import { SalesLineChart } from "@/features/dashboard/components/SalesLineChart";
import { ProductBarChart } from "@/features/dashboard/components/ProductBarChart";
import { OrderDonutChart } from "@/features/dashboard/components/OrderDonutChart";
import { BakerProfileResponse } from "@/features/profiles/types/baker";
import { getBakerProfile } from "@/features/profiles/apis/bakerProfile";
import { UpdateBakerModal } from "@/features/profiles/components/UpdateBakerModal";

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
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  // GET profile
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<BakerProfileResponse>({
    queryKey: ["baker"],
    queryFn: getBakerProfile,
    refetchOnWindowFocus: true,
    refetchOnMount: "always",
  });

  useEffect(() => {
    if (error) {
      notifications.show({
        title: "Error",
        message: "Failed to load profile",
        color: "red",
      });
    }
  }, [error]);

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
        <Flex direction="column" py={16}>
          <Title order={2} mb={16}>
            Profile
          </Title>

          {isLoading || !profile ? (
            <Card shadow="sm" radius="md" p={24} w="100%" withBorder>
              <Stack align="center" gap={16}>
                <Skeleton height={100} circle my="auto" />
                <Skeleton height={16} mt={6} radius="xl" />
                <Skeleton height={16} mt={6} radius="xl" />
                <Skeleton height={16} mt={6} radius="xl" />
                <Skeleton height={16} mt={6} radius="xl" />
                <Skeleton height={16} mt={6} radius="xl" />
              </Stack>
            </Card>
          ) : (
            <ProfileCard
              firstName={profile.first_name}
              lastName={profile.last_name}
              email={profile.email}
              phoneNumber={profile.phone_number || "-"}
              bakeryName={profile.bakery_name || "-"}
              onEdit={openEdit}
              disableEdit={isLoading}
            />
          )}

          {profile && (
            <UpdateBakerModal
              opened={openedEdit}
              close={closeEdit}
              defaultData={profile}
            />
          )}
        </Flex>

        {/* Overview & Charts */}
        <Title order={2}>Overview</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xl">
          {features}
        </SimpleGrid>
        <SalesLineChart
          title="Sales Trend"
          data={salesTrend}
          dataKey="date"
          series={[
            { name: "Croissant", color: "yellow.6" },
            { name: "Baguette", color: "orange.6" },
            { name: "Muffin", color: "primary.6" },
          ]}
        />

        <Grid>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <ProductBarChart
              title="Monthly Product Performance"
              data={productPerformance}
              dataKey="month"
              series={[
                { name: "Croissant", color: "yellow.6" },
                { name: "Baguette", color: "orange.6" },
                { name: "Muffin", color: "primary.6" },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <OrderDonutChart title="Order Status Summary" data={orderStatus} />
          </Grid.Col>
        </Grid>
      </Flex>
    </Container>
  );
};

export default DashboardPage;
