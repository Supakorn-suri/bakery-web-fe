"use client";

import { Carousel } from "@mantine/carousel";
import { Card, Group, Text, Image, Divider, Badge, Flex } from "@mantine/core";
import {
  IconClockHour3,
  IconStarFilled,
  IconChefHat,
} from "@tabler/icons-react";

import { ProductProps } from "../../features/products/components/ProductCard";

export const mockItems: ProductProps[] = [
  {
    id: "item-1",
    name: "Bread",
    baker: "Miyabi Bakery",
    price: 450,
    cook_time: "20 min",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1675788938970-e2716f23b1f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5fGVufDB8fDB8fHww",
  },
  {
    id: "item-2",
    name: "Cookie",
    baker: "Miyabi Bakery",
    price: 250,
    cook_time: "20 min",
    rating: 4.89,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-3",
    name: "Tart",
    baker: "Yanagi Bakery",
    price: 150,
    cook_time: "20 min",
    rating: 4.86,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-4",
    name: "Bread",
    baker: "Alice Bakery",
    price: 250,
    cook_time: "30 min",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1666114265205-394e9d5848c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-5",
    name: "Cake",
    baker: "Alice Bakery",
    price: 530,
    cook_time: "45 min",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618426703433-cd39e563cf71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-6",
    name: "Cake",
    baker: "Yanagi Bakery",
    price: 350,
    cook_time: "45 min",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "item-7",
    name: "Croissant",
    baker: "Yanagi Bakery",
    price: 340,
    cook_time: "30 min",
    rating: 3.9,
    image:
      "https://images.unsplash.com/photo-1600516171254-e604c372872a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

const Recommend = () => {
  return (
    <Carousel
      slideSize="10%"
      slideGap="lg"
      emblaOptions={{ align: "start", dragFree: true }}
    >
      {mockItems.map((item: any) => (
        <Carousel.Slide key={item.id}>
          <Card id={item.id} w={240} h={300} p={0} radius={16} withBorder>
            <Image
              src={item.image}
              h={180}
              maw={240}
              fit="cover"
              alt={item.name}
            />
            <Flex
              direction="column"
              justify="space-between"
              p={12}
              h="100%"
              w="100%"
            >
              <Flex direction="column" gap={4}>
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
                    {item.cook_time}
                  </Text>
                  <Divider size="xs" orientation="vertical" my={2} mx={4} />
                  <IconStarFilled color="#FFC862" size={16} />
                  <Text size="sm" c="#707070">
                    {item.rating}
                  </Text>
                </Group>
              </Flex>
            </Flex>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default Recommend;
