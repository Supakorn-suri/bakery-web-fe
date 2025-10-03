"use client";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  Flex,
  Group,
  Text,
  Image,
  Title,
  Divider,
  Rating,
} from "@mantine/core";
import { IconClockHour3 } from "@tabler/icons-react";

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

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  cookTime: string;
  rating: number;
  image: string;
}

const ProductCard = (item: ProductCardProps) => {
  return (
    <Card id={item.id} padding={12} radius={16} withBorder>
      <Card.Section>
        <Image
          src={item.image}
          h={180}
          miw={180}
          maw="auto"
          fit="cover"
          alt={item.name}
        />
      </Card.Section>
      <Group justify="space-between" my={8}>
        <Text fw={500}>{item.name}</Text>
        <Text>฿{item.price}</Text>
      </Group>
      <Group>
        <IconClockHour3 />
        <Text>{item.cookTime}</Text>
        <Divider size="sm" orientation="vertical" />
        <Rating defaultValue={1} count={1} />
        <Text>{item.rating}</Text>
      </Group>
      <Button color="#6E442F" fullWidth mt="md" radius="md">
        Order Now
      </Button>
    </Card>
  );
};

export default ProductCard;
