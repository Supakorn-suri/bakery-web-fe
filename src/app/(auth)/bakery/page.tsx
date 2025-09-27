import React from "react";
import {
  IconArrowRight,
  IconSearch,
  IconClockHour3,
  IconPlus,
} from "@tabler/icons-react";
import {
  ActionIcon,
  TextInput,
  Box,
  Flex,
  Group,
  Chip,
  Card,
  Image,
  Text,
  Rating,
  Divider,
} from "@mantine/core";
import Recommend from "@/components/Product/Recommend";

const BakeryPage = () => {
  return (
    <Flex direction="column" gap={16} mt={60}>
      <TextInput
        radius="xl"
        px={60}
        size="md"
        placeholder="Search questions"
        rightSectionWidth={42}
        leftSection={<IconSearch size={18} stroke={1.5} />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled">
            <IconArrowRight size={18} stroke={1.5} />
          </ActionIcon>
        }
      />
      <Recommend />
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BakeryPage;
