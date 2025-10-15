"use client";

import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import {
  Container,
  Flex,
  ActionIcon,
  Grid,
  Paper,
  ScrollArea,
  Text,
  Group,
  Stack,
  Image,
  Title,
  Card,
  Button,
  Divider,
  TextInput,
} from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";

import { mockItems } from "@/components/sections/Recommend";
import ProductCard, {
  ProductProps,
} from "@/features/products/components/ProductCard";

export type CartItem = ProductProps & {
  quantity: number;
};

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    mockItems.slice(0, 3).map((item) => ({ ...item, quantity: 1 }))
  );
  const [discount, setDiscount] = useState<number>(0);
  const [coupon, setCoupon] = useState<string>("");

  const updateQuantity = (id: string, value: number) => {
    setCartItems((prev: CartItem[]) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + value) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev: CartItem[]) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "sweet10") setDiscount(0.1);
    else setDiscount(0);
  };

  const subtotal = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - subtotal * discount;

  return (
    <Container size="xl" mt={{ base: 80, md: 108 }} mb={{ base: 24, md: 48 }}>
      <Flex direction="column" gap={48}>
        <Grid gutter="xl">
          {/*  Cart Section */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper w="100%" p={24} radius="lg" withBorder>
              <Title order={2} mb={16}>
                Your Cart
              </Title>
              <ScrollArea h={480} scrollbars="y" offsetScrollbars>
                {cartItems.length === 0 ? (
                  <Text c="dimmed" ta="center" py={48}>
                    Your cart is empty.
                  </Text>
                ) : (
                  cartItems.map((item: CartItem) => (
                    <Grid
                      key={item.id}
                      py={16}
                      style={{
                        borderBottom: `1px solid #E0E0E0`,
                      }}
                    >
                      <Grid.Col span="content">
                        <Image
                          src={item.image}
                          w={120}
                          h={120}
                          radius={16}
                          fit="cover"
                          alt={item.name}
                        />
                      </Grid.Col>

                      <Grid.Col span="auto">
                        <Stack gap={8}>
                          <Group justify="space-between">
                            <Text fw={600}>{item.name}</Text>
                            <ActionIcon
                              variant="subtle"
                              color="red"
                              onClick={() => removeItem(item.id)}
                            >
                              <IconTrash size={18} />
                            </ActionIcon>
                          </Group>
                          <Text size="sm" c="dimmed">
                            Baker: {item.baker}
                          </Text>
                          <Group mt={8} justify="space-between">
                            <Group>
                              <ActionIcon
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <IconMinus size={14} />
                              </ActionIcon>
                              <Text fw={600}>{item.quantity}</Text>
                              <ActionIcon
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <IconPlus size={14} />
                              </ActionIcon>
                            </Group>
                            <Text fw={600}>฿{item.price * item.quantity}</Text>
                          </Group>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  ))
                )}
              </ScrollArea>
            </Paper>
          </Grid.Col>

          {/* Summary Section */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Card w="100%" radius="lg" h="100%" p={24} withBorder>
              <Title order={3} mb={8}>
                Order Summary
              </Title>
              <Divider my={8} />

              <Stack gap={8}>
                <Group justify="space-between">
                  <Text fw={500}>Subtotal</Text>
                  <Text fw={600}>฿{subtotal.toLocaleString()}</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={500}>Discount</Text>
                  <Text fw={600}>฿{(subtotal * discount).toFixed(0)}</Text>
                </Group>
                <Group justify="space-between">
                  <Text fw={500}>Shipping</Text>
                  <Text fw={600}>Free</Text>
                </Group>
                <Divider my={8} />
                <Group justify="space-between">
                  <Text fw={600}>Total</Text>
                  <Text fw={700} fz={20}>
                    ฿{total.toLocaleString()}
                  </Text>
                </Group>
              </Stack>

              {/* Coupon Section */}
              <TextInput
                mt={16}
                placeholder="Enter coupon (e.g. SWEET10)"
                value={coupon}
                onChange={(e) => setCoupon(e.currentTarget.value)}
              />
              <Button mt={8} radius="md" onClick={applyCoupon} variant="light">
                Apply Coupon
              </Button>

              <Button mt={16} radius="md" fullWidth>
                Proceed to Checkout
              </Button>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Suggestion Section */}
        <Flex direction="column" gap={24}>
          <Title order={3}>You might also like</Title>
          <Carousel
            slideSize="10%"
            slideGap="lg"
            emblaOptions={{ align: "start", dragFree: true }}
          >
            {mockItems.map((item: ProductProps) => (
              <Carousel.Slide key={item.id}>
                <ProductCard {...item} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CartPage;
