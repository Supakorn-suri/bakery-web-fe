"use client";
import { Carousel } from "@mantine/carousel";
import { Button, Card, Flex, Group, Text, Image, Title } from "@mantine/core";

const items: any = [
  {
    id: "item-1",
    name: "Bread",
    price: 450,
    image:
      "https://plus.unsplash.com/premium_photo-1675788938970-e2716f23b1f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFrZXJ5fGVufDB8fDB8fHww",
  },
  {
    id: "item-2",
    name: "Cookie",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-3",
    name: "Tart",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "item-4",
    name: "Bread",
    price: 650,

    image:
      "https://images.unsplash.com/photo-1666114265205-394e9d5848c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-5",
    name: "Cake",
    price: 530,
    image:
      "https://images.unsplash.com/photo-1618426703433-cd39e563cf71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-6",
    name: "Cake",
    price: 1350,
    image:
      "https://images.unsplash.com/photo-1469533778471-92a68acc3633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "item-7",
    name: "Croissant",
    price: 340,
    image:
      "https://images.unsplash.com/photo-1600516171254-e604c372872a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHxiYWtlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

const Recommend = () => {
  return (
    <Flex direction="column" gap={24} mb={150}>
      <Title order={3}>Most Loved by Our Members</Title>
      <Carousel
        slideSize="20%"
        slideGap="md"
        emblaOptions={{ align: "center" }}
      >
        {items.map((item: any) => (
          <Carousel.Slide key={item.id}>
            <Card padding={12} radius={16} withBorder>
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
              <Button color="#6E442F" fullWidth mt="md" radius="md">
                Order Now
              </Button>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};

export default Recommend;
