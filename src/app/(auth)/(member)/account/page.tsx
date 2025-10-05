"use client";

import React from "react";
import {
  Flex,
  Text,
  Card,
  Avatar,
  Stack,
  Group,
  Divider,
  Button,
  Title,
} from "@mantine/core";

const ProfilePage = () => {
  const user = {
    name: "Name",
    email: "name@example.com",
    address: "123 Main Street, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1532635224-cf024e66d122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <Flex direction="column" py={16}>
      <Title order={2} mb={16}>
        Profile
      </Title>

      <Card shadow="sm" radius="md" p={24} w="100%" withBorder>
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
          </Stack>

          <Button mt={24} radius="md">
            Edit Profile
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ProfilePage;
