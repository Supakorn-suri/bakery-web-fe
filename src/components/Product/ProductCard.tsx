"use client";

import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Group,
  Text,
  Image,
  Divider,
  Badge,
  Flex,
  Box,
  ActionIcon,
} from "@mantine/core";
import {
  IconClockHour3,
  IconStarFilled,
  IconChefHat,
  IconHeart,
} from "@tabler/icons-react";

interface ProductCardProps {
  id: string;
  name: string;
  baker: string;
  price: number;
  cookTime: string;
  rating: number;
  image: string;
}

const ProductCard = (item: ProductCardProps) => {
  const router = useRouter();

  return (
    <Card id={item.id} w={200} h={300} p={0} radius={16} withBorder>
      <Box pos="relative" w="100%">
        <Image src={item.image} h={150} maw={200} fit="cover" alt={item.name} />
        <ActionIcon
          variant="light"
          color="red"
          radius="xl"
          size="lg"
          style={{ position: "absolute", top: 8, right: 8 }}
        >
          <IconHeart size={18} />
        </ActionIcon>
      </Box>
      <Flex direction="column" justify="space-between" p={12} h="100%" w="100%">
        <Flex direction="column">
          <Group justify="space-between">
            <Text fw={500}>{item.name}</Text>
            <Text fw={600} c="primary">
              ฿{item.price}
            </Text>
          </Group>
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

        <Button
          fullWidth
          mt="md"
          radius="md"
          onClick={() => router.push(`/bakery/${item.id}`)}
        >
          Order Now
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
