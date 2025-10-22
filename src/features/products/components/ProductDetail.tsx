"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Flex,
  Group,
  Text,
  Image,
  Divider,
  Badge,
  ActionIcon,
  Button,
  Stack,
  Rating,
  Progress,
  Paper,
  Title,
  Box,
  SimpleGrid,
  Textarea,
  Loader,
} from "@mantine/core";
import {
  IconClockHour3,
  IconChefHat,
  IconPlus,
  IconMinus,
  IconStarFilled,
  IconChevronLeft,
  IconHeart,
  IconShoppingCart,
  IconTruck,
  IconShield,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";

import { getProductById } from "../apis/product";
import { getImageUrl } from "@/components/Inputs/UploadFile";

const ProductDetail = ({ bakeryId }: { bakeryId: string }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data for reviews count
  const productMock = {
    totalReviews: 25,
    allergens: "Contains: Wheat, Dairy, Eggs",
  };
  const reviewsMock = [
    { id: 1, stars: 5, percentage: 75 },
    { id: 2, stars: 4, percentage: 15 },
    { id: 3, stars: 3, percentage: 7 },
    { id: 4, stars: 2, percentage: 2 },
    { id: 5, stars: 1, percentage: 1 },
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  const {
    data: productDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product-by-id", bakeryId],
    queryFn: () => getProductById(Number(bakeryId)),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <Container size="xl" mt={80} mb={60}>
        <Flex justify="center" align="center" h={400}>
          <Loader color="primary.3" size="lg" />
        </Flex>
      </Container>
    );
  }

  if (error || !productDetail) {
    return (
      <Container size="xl" mt={80} mb={60}>
        <Button
          size="sm"
          radius="md"
          leftSection={<IconChevronLeft size={16} />}
          variant="subtle"
          mb="md"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Paper withBorder shadow="sm" p="xl" radius="lg">
          <Text c="red" ta="center">
            {isNaN(Number(bakeryId))
              ? "Invalid product ID"
              : "Product not found or failed to load"}
          </Text>
        </Paper>
      </Container>
    );
  }

  return (
    <Container size="xl" mt={80} mb={60}>
      <Button
        size="sm"
        radius="md"
        leftSection={<IconChevronLeft size={16} />}
        variant="subtle"
        mb="md"
        onClick={() => router.back()}
      >
        Back
      </Button>

      {/* Product Detail */}
      <Paper withBorder shadow="none" p="xl" radius="lg" mb="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Box pos="relative">
            <Image
              src={getImageUrl(productDetail?.image)}
              h={{ base: 280, md: 400 }}
              w="100%"
              fit="cover"
              radius="md"
              alt={productDetail.name}
            />
            <ActionIcon
              variant="light"
              color="red"
              radius="xl"
              size="lg"
              style={{ position: "absolute", top: 16, right: 16 }}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <IconHeart
                size={20}
                fill={isFavorite ? "currentColor" : "none"}
              />
            </ActionIcon>
          </Box>

          <Flex direction="column" justify="space-between" gap={8}>
            <Stack gap="auto">
              <Group justify="space-between">
                <Title order={2}>{productDetail.name}</Title>
                <Text size="xl" fw={700} c="#BA653A">
                  ฿{productDetail.price}
                </Text>
              </Group>
              <Badge
                size="lg"
                variant="light"
                leftSection={<IconChefHat size={14} />}
                style={{ cursor: "pointer" }}
              >
                {productDetail?.baker?.bakery_name ?? '-'}
              </Badge>
              <Group gap="xs">
                <Group gap={4}>
                  <IconClockHour3 size={18} color="#707070" />
                  <Text size="sm" c="dimmed">
                    {productDetail.cook_time}
                  </Text>
                </Group>
                <Divider orientation="vertical" />
                <Group gap={4}>
                  <Rating
                    value={productDetail.rating}
                    fractions={2}
                    readOnly
                    size="sm"
                  />
                  <Text size="sm" fw={500}>
                    {productDetail.rating}
                  </Text>
                  <Text size="sm" c="dimmed">
                    ({productMock.totalReviews} reviews)
                  </Text>
                </Group>
              </Group>
              <Badge color="orange" variant="light" size="lg">
                {productMock.allergens}
              </Badge>
              <Text size="sm" c="dimmed">
                <Text span fw={700}>
                  Serving Size:
                </Text>{" "}
                1 piece
              </Text>
            </Stack>

            <Divider />
            <Group gap="xl" mt="md">
              <Group gap={8}>
                <IconTruck size={20} color="#BA653A" />
                <Text size="sm">Free delivery over ฿500</Text>
              </Group>
              <Group gap={8}>
                <IconShield size={20} color="#BA653A" />
                <Text size="sm">Quality guaranteed</Text>
              </Group>
            </Group>
            <Group justify="space-between" mb="md">
              <Text fw={500}>Quantity</Text>
              <Group gap="xs">
                <ActionIcon
                  variant="light"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <IconMinus size={16} />
                </ActionIcon>
                <Text fw={600} w={40} ta="center">
                  {quantity}
                </Text>
                <ActionIcon
                  variant="light"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <IconPlus size={16} />
                </ActionIcon>
              </Group>
            </Group>
            <Group grow>
              <Button
                size="lg"
                radius="md"
                leftSection={<IconShoppingCart size={20} />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </Group>
            <Text size="xs" c="dimmed" ta="center" mt="sm">
              Total: ฿{(productDetail.price * quantity).toFixed(2)}
            </Text>
          </Flex>
        </SimpleGrid>
      </Paper>

      {/* Customer Reviews */}
      <Stack mx={{ base: "md", sm: "lg" }}>
        <Title order={3} mb="lg">
          Customer Reviews
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Stack align="center" justify="center">
            <Text size="lg" fw={700} lh={1}>
              {productDetail.rating}
            </Text>
            <Rating
              value={productDetail.rating}
              fractions={2}
              readOnly
              size="lg"
            />
            <Text size="sm" c="dimmed">
              {productMock.totalReviews} reviews
            </Text>
          </Stack>
          <Stack gap="xs">
            {reviewsMock.map((review) => (
              <Group key={review.id} gap="sm">
                <Group gap={4} w={60}>
                  <Text size="sm" fw={500}>
                    {review.stars}
                  </Text>
                  <IconStarFilled size={14} color="#FFC862" />
                </Group>
                <Progress
                  value={review.percentage}
                  style={{ flex: 1 }}
                  color="#FFC862"
                />
                <Text size="sm" w={45} ta="right" c="dimmed">
                  {review.percentage}%
                </Text>
              </Group>
            ))}
          </Stack>
        </SimpleGrid>
        <Divider my="xl" />

        <Box>
          <Text fw={500} mb="md">
            Write a Review
          </Text>
          <Stack gap="md">
            <Rating size="lg" />
            <Textarea
              placeholder="Share your experience with this product..."
              minRows={4}
              radius="md"
            />
            <Group justify="flex-end">
              <Button radius="md">Submit Review</Button>
            </Group>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductDetail;
