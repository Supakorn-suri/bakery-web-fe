"use client";

import { useState } from "react";
import { IconAdjustments } from "@tabler/icons-react";
import {
  Flex,
  Box,
  Group,
  Chip,
  Text,
  Divider,
  Pagination,
  SimpleGrid,
} from "@mantine/core";

import { mockItems } from "./Recommend";
import HorizontalProductCard from "./HorizontalProductCard";

const limit = 10;
const total = 40;
const totalPages = Math.ceil(total / limit);

const BakeryList = () => {
  const [page, setPage] = useState(1);
  const message = `Showing ${limit * (page - 1) + 1} - ${Math.min(
    total,
    limit * page
  )} of ${total}`;

  return (
    <Flex direction="column" justify="center" align="center">
      <Divider w="100%" />

      <Box p={12} w="100%">
        <Group>
          <IconAdjustments />
          <Chip variant="outline" color="#6E442F">
            Most Order
          </Chip>
          <Chip variant="outline" color="#6E442F">
            Rating
          </Chip>
        </Group>
      </Box>
      <Divider w="100%" />
      <Flex direction="column" py={24} gap={24}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          {mockItems.map((item: any) => (
            <HorizontalProductCard key={item.id} {...item} />
          ))}
        </SimpleGrid>
        <Group justify="flex-end">
          <Text size="sm">{message}</Text>
          <Pagination
            total={totalPages}
            value={page}
            onChange={setPage}
            withPages={false}
          />
        </Group>
      </Flex>
    </Flex>
  );
};

export default BakeryList;
