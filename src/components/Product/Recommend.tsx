"use client";

import { Carousel } from "@mantine/carousel";
import { Flex, Title } from "@mantine/core";

import ProductCard from "./ProductCard";

export const mockItems: any = [
  {
    id: "item-1",
    name: "Bread",
    baker: "Miyabi Bakery",
    price: 450,
    cookTime: "20 min",
    rating: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1675788938970-e2716f23b1f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5fGVufDB8fDB8fHww",
  },
  {
    id: "item-2",
    name: "Cookie",
    baker: "Miyabi Bakery",
    price: 250,
    cookTime: "20 min",
    rating: 4.89,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-3",
    name: "Tart",
    baker: "Yanagi Bakery",
    price: 150,
    cookTime: "20 min",
    rating: 4.86,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-4",
    name: "Bread",
    baker: "Alice Bakery",
    price: 250,
    cookTime: "30 min",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1666114265205-394e9d5848c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-5",
    name: "Cake",
    baker: "Alice Bakery",
    price: 530,
    cookTime: "45 min",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1618426703433-cd39e563cf71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-6",
    name: "Cake",
    baker: "Yanagi Bakery",
    price: 350,
    cookTime: "45 min",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1469533778471-92a68acc3633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-7",
    name: "Croissant",
    baker: "Yanagi Bakery",
    price: 340,
    cookTime: "30 min",
    rating: 3.9,
    image:
      "https://images.unsplash.com/photo-1600516171254-e604c372872a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

const Recommend = () => {
  return (
    <Flex direction="column" gap={24} p={24}>
      <Title order={3}>Most Loved by Our Members</Title>

      <Carousel
        slideSize="20%"
        slideGap="md"
        emblaOptions={{ align: "start", dragFree: true }}
      >
        {mockItems.map((item: any) => (
          <Carousel.Slide key={item.id}>
            <ProductCard {...item} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Recommend;
