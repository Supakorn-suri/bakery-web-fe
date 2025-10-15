"use client";

import { useRouter } from "next/navigation";
import {
  Flex,
  Card,
  Group,
  Text,
  Image,
  Divider,
  Box,
  Badge,
  ActionIcon,
} from "@mantine/core";
import {
  IconClockHour3,
  IconHeart,
  IconChefHat,
  IconPlus,
  IconStarFilled,
} from "@tabler/icons-react";
import { ProductProps } from "./ProductCard";

const HorizontalProductCard = (item: ProductProps) => {
  const router = useRouter();

  return (
    <Card id={item.id} w={360} h={160} withBorder p={0} radius={24}>
      <Flex direction="row" h="100%">
        <Box pos="relative" w="100%">
          <Image h={160} maw={160} fit="cover" src={item.image} />
          <ActionIcon
            variant="light"
            color="red"
            radius="xl"
            size="lg"
            style={{ position: "absolute", top: 8, right: 20 }}
          >
            <IconHeart size={18} />
          </ActionIcon>
        </Box>
        <Flex
          direction="column"
          justify="space-between"
          p={12}
          h="100%"
          w="100%"
        >
          <Flex direction="column">
            <Text fw={500}>{item.name}</Text>
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconChefHat size={12} />}
              my={4}
            >
              {item.baker}
            </Badge>
            <Group gap={4}>
              <IconClockHour3 color="#707070" size={16} />
              <Text size="sm" c="#707070">
                {item.cookTime}
              </Text>
              <Divider size="xs" orientation="vertical" my={2} mx={4} />
              <IconStarFilled color="#FFC862" size={16} />
              <Text size="sm" c="#707070">
                {item.rating}
              </Text>
            </Group>
          </Flex>
          <Group justify="space-between">
            <Text fw={600} c="primary">
              ฿ {item.price}
            </Text>
            <ActionIcon
              radius="xl"
              onClick={() => router.push(`/bakery/${item.id}`)}
            >
              <IconPlus size={18} />
            </ActionIcon>
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
};

export default HorizontalProductCard;
