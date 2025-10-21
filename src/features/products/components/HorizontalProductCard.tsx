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
  IconPhoto,
} from "@tabler/icons-react";
import { ProductProps } from "./ProductCard";
import { getImageUrl } from "@/components/Inputs/UploadFile";

export const HorizontalProductCard = ({
  id,
  name,
  baker,
  price,
  cook_time,
  rating,
  image,
}: ProductProps) => {
  const router = useRouter();

  return (
    <Card id={id} miw={360} w="100%" h={160} withBorder p={0} radius={24}>
      <Flex direction="row" h="100%">
        <Box pos="relative"  maw={160} w="100%"  >
          {image ? (
            <Image
              src={getImageUrl(image)}
              h={160}
              maw={160}
              fit="cover"
              alt={name}
              fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150'%3E%3Crect width='200' height='150' fill='%23f0f0f0'/%3E%3C/svg%3E"
            />
          ) : (
            <Flex
              h={160}
              maw={160}
              bg="#f0f0f0"
              align="center"
              justify="center"
            >
              <IconPhoto size={48} color="#999" />
            </Flex>
          )}
          <ActionIcon
            variant="light"
            color="red"
            radius="xl"
            size="lg"
            style={{ position: "absolute", top: 12, left: 12 }}
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
            <Text fw={500}>{name}</Text>
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconChefHat size={12} />}
              my={4}
            >
              {baker}
            </Badge>
            <Group gap={4}>
              <IconClockHour3 color="#707070" size={16} />
              <Text size="sm" c="#707070">
                {cook_time}
              </Text>
              <Divider size="xs" orientation="vertical" my={2} mx={4} />
              <IconStarFilled color="#FFC862" size={16} />
              <Text size="sm" c="#707070">
                {rating}
              </Text>
            </Group>
          </Flex>
          <Group justify="space-between">
            <Text fw={600} c="primary">
              ฿ {price}
            </Text>
            <ActionIcon
              radius="xl"
              onClick={() => router.push(`/bakery/${id}`)}
            >
              <IconPlus size={18} />
            </ActionIcon>
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
};
