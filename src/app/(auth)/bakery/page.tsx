"use client";
import React from "react";
import {
  IconArrowRight,
  IconSearch,
  IconClockHour3,
  IconPlus,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

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
  Title,
} from "@mantine/core";

import Recommend from "@/components/Product/Recommend";
import BakeryList from "@/components/Product/BakeryList";
import { UnderlineText } from "@/components/Product/UnderlineText";
import ProductCard from "@/components/Product/ProductCard";

const items: any = [
  {
    id: "item-1",
    name: "Bread",
    price: 450,
    cookTime: "20 min",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1675788938970-e2716f23b1f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5fGVufDB8fDB8fHww",
  },
  {
    id: "item-2",
    name: "Cookie",
    price: 250,
    cookTime: "20 min",
    rating: 4.89,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-3",
    name: "Tart",
    price: 150,
    cookTime: "20 min",
    rating: 4.86,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-4",
    name: "Bread",
    price: 250,
    cookTime: "30 min",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1666114265205-394e9d5848c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-5",
    name: "Cake",
    price: 530,
    cookTime: "45 min",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618426703433-cd39e563cf71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-6",
    name: "Cake",
    price: 350,
    cookTime: "45 min",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1469533778471-92a68acc3633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-7",
    name: "Croissant",
    price: 340,
    cookTime: "30 min",
    rating: 3.9,
    image:
      "https://images.unsplash.com/photo-1600516171254-e604c372872a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

const BakeryPage = () => {
  return (
    <Flex
      direction="column"
      mih="100dvh"
      w="100%"
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(25deg,#FFFFFF 80%, #FBEAD0 90%, #F0A853 99%)",
      }}
      gap={16}
      mt={60}
    >
      <Box p={48} w="100%" bg="transparent">
        <Flex direction="row">
          <Flex direction="column" gap={24}>
            <Flex direction="row" wrap="wrap" gap={8}>
              <Text fw={700} fz={{ base: 32, sm: 48 }} lh={1.2}>
                A little
              </Text>
              <UnderlineText fw={700} fz={{ base: 32, sm: 48 }} lh={1.2}>
                sweetness
              </UnderlineText>
              <Text fw={700} fz={{ base: 32, sm: 48 }} lh={1.2}>
                makes every day
              </Text>
              <UnderlineText fw={700} fz={{ base: 32, sm: 48 }} lh={1.2}>
                brighter.
              </UnderlineText>
            </Flex>
            <TextInput
              radius="xl"
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
          </Flex>
          <Image
            h={{ base: 180, sm: 200, md: 240 }}
            w="auto"
            fit="contain"
            src="/croissant_1.png"
          />
        </Flex>
      </Box>

      <Flex direction="column" gap={24} p={24}>
        <Title order={3}>Sweet moments, baked for you.</Title>

        <Carousel
          slideSize={{ base: "75%", xs: "25%", md: "25%" }}
          slideGap={{ base: "xs", sm: "md" }}
          emblaOptions={{ align: "start", dragFree: true }}
        >
          {items.map((item: any) => (
            <Carousel.Slide key={item.id}>
              <ProductCard {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>
      <Recommend />
      <BakeryList />
    </Flex>
  );
};

export default BakeryPage;
