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
  IconPhoto,
} from "@tabler/icons-react";
import { getImageUrl } from "@/components/Inputs/UploadFile";

export interface ProductProps {
  id: string;
  name: string;
  baker: string;
  price: number;
  cook_time: string;
  rating: number;
  image: string;
}

export const ProductCard = (item: ProductProps) => {
  const router = useRouter();
  return (
    <Card id={item.id} w={200} h={300} p={0} radius={16} withBorder>
      <Box pos="relative" w="100%">
        {item.image ? (
          <Image
            src={getImageUrl(item.image)}
            h={150}
            maw={200}
            fit="cover"
            alt={item.name}
            fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%23f0f0f0'/%3E%3C/svg%3E"
          />
        ) : (
          <Flex h={150} w={200} bg="#f0f0f0" align="center" justify="center">
            <IconPhoto size={48} color="#999" />
          </Flex>
        )}
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
          <Group justify="space-between" w="100%">
            <Text size="sm" fw={500} maw={130} lineClamp={1}>
              {item.name}
            </Text>
            <Text size="sm" fw={600} c="primary">
              ฿{item.price}
            </Text>
          </Group>
          <Badge
            size="xs"
            variant="light"
            leftSection={<IconChefHat size={12} />}
            my={4}
            maw="100%"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {item.baker}
          </Badge>
          <Group gap={4}>
            <IconClockHour3 color="#707070" size={16} />
            <Text size="xs" c="#707070">
              {item.cook_time}
            </Text>
            <Divider size="xs" orientation="vertical" my={2} mx={4} />
            <IconStarFilled color="#FFC862" size={16} />
            <Text size="xs" c="#707070">
              {typeof item.rating === "number" ? item.rating.toFixed(1) : "0.0"}
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
