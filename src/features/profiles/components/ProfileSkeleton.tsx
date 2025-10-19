import React from "react";
import { Card, Skeleton, Stack } from "@mantine/core";

export const ProfileSkeleton = () => {
  return (
    <Card shadow="sm" radius="md" p={24} w="100%" withBorder>
      <Stack align="center" gap={16}>
        <Skeleton height={100} circle />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} height={20} mt={6} radius="xl" />
        ))}
      </Stack>
    </Card>
  );
};

export const OverviewSkeleton = () => {
    return (
      <>
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} shadow="sm" radius="md" p={24} withBorder>
            <Skeleton height={50} circle mb={8} />
            <Skeleton height={16} mt={6} radius="xl" />
            <Skeleton height={16} mt={6} radius="xl" />
          </Card>
        ))}
      </>
    );
  };