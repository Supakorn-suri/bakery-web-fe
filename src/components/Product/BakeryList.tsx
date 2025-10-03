"use client";
import { useState } from "react";
import {
  IconArrowRight,
  IconSearch,
  IconClockHour3,
  IconPlus,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Flex,
  Box,
  Group,
  Chip,
  Card,
  Image,
  Text,
  Rating,
  Divider,
  Pagination,
  SimpleGrid,
} from "@mantine/core";

const limit = 10;
const total = 145;
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
          <Chip variant="outline" color="#6E442F">
            Most Order
          </Chip>
          <Chip variant="outline" color="#6E442F">
            Rating
          </Chip>
        </Group>
      </Box>
      <Divider w="100%" />

      <Flex direction="column" p={24} gap={24}>
        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          <Card w={360} h={160} withBorder p={0} radius={24}>
            <Flex direction="row">
              <Image h="auto" w={160} fit="contain" src="/bakery_1.jpg" />
              <Flex direction="column" justify="space-between" p={12} h={160}>
                <Text fw={500}>Baker Name</Text>
                <Group justify="space-between" my={8}>
                  <IconClockHour3 />
                  <Text>2 min</Text>
                  <Divider size="sm" orientation="vertical" />
                  <Rating defaultValue={1} count={1} />
                  <Text>4.5</Text>
                </Group>
                <Group justify="space-between" my={8}>
                  <Text>฿ 100</Text>
                  <ActionIcon color="#6E442F" radius="xl">
                    <IconPlus size={18} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Flex>
          </Card>
          <Card w={360} h={160} withBorder p={0} radius={24}>
            <Flex direction="row">
              <Image h="auto" w={160} fit="contain" src="/bakery_1.jpg" />
              <Flex direction="column" justify="space-between" p={12} h={160}>
                <Text fw={500}>Baker Name</Text>
                <Group justify="space-between" my={8}>
                  <IconClockHour3 />
                  <Text>2 min</Text>
                  <Divider size="sm" orientation="vertical" />
                  <Rating defaultValue={1} count={1} />
                  <Text>4.5</Text>
                </Group>
                <Group justify="space-between" my={8}>
                  <Text>฿ 100</Text>
                  <ActionIcon color="#6E442F" radius="xl">
                    <IconPlus size={18} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Flex>
          </Card>
          <Card w={360} h={160} withBorder p={0} radius={24}>
            <Flex direction="row">
              <Image h="auto" w={160} fit="contain" src="/bakery_1.jpg" />
              <Flex direction="column" justify="space-between" p={12} h={160}>
                <Text fw={500}>Baker Name</Text>
                <Group justify="space-between" my={8}>
                  <IconClockHour3 />
                  <Text>2 min</Text>
                  <Divider size="sm" orientation="vertical" />
                  <Rating defaultValue={1} count={1} />
                  <Text>4.5</Text>
                </Group>
                <Group justify="space-between" my={8}>
                  <Text>฿ 100</Text>
                  <ActionIcon color="#6E442F" radius="xl">
                    <IconPlus size={18} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Flex>
          </Card>
          <Card w={360} h={160} withBorder p={0} radius={24}>
            <Flex direction="row">
              <Image h="auto" w={160} fit="contain" src="/bakery_1.jpg" />
              <Flex direction="column" justify="space-between" p={12} h={160}>
                <Text fw={500}>Baker Name</Text>
                <Group justify="space-between" my={8}>
                  <IconClockHour3 />
                  <Text>2 min</Text>
                  <Divider size="sm" orientation="vertical" />
                  <Rating defaultValue={1} count={1} />
                  <Text>4.5</Text>
                </Group>
                <Group justify="space-between" my={8}>
                  <Text>฿ 100</Text>
                  <ActionIcon color="#6E442F" radius="xl">
                    <IconPlus size={18} />
                  </ActionIcon>
                </Group>
              </Flex>
            </Flex>
          </Card>
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
