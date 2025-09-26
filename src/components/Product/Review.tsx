"use client";
import React, { useState } from "react";
import {
  Card,
  Flex,
  Title,
  Paper,
  Stack,
  Image,
  Text,
  Group,
  Avatar,
  Rating,
  Box,
} from "@mantine/core";
import { IconQuoteFilled } from "@tabler/icons-react";
import classes from "./Review.module.css";

const mockReview = [
  {
    name: "Emily R.",
    rating: 4,
    review_en:
      "The croissants are absolutely delicious! Flaky, buttery, and taste just like Paris.",
  },
  {
    name: "Somchai K.",
    rating: 5,
    review_en:
      "I love that everything is homemade. The brownies are rich and full of flavor!",
  },
  {
    name: "Anna L.",
    rating: 4.5,
    review_en:
      "Beautiful cakes and the staff is so friendly. My birthday cake was perfect.",
  },
  {
    name: "Ploy T.",
    rating: 5,
    review_en:
      "Perfect place for coffee and sweet treats. I always feel at home here.",
  },
];

const Review = () => {
  const [flipped, setFlipped] = useState(false);

  const QuoteIcon = ({ size = 80, color = "#8A4621", ...props }) => (
    <IconQuoteFilled
      size={size}
      color={color}
      style={{
        position: "absolute",
        bottom: "-24px",
        right: "-6px",
        opacity: 0.15,
        zIndex: 0,
        pointerEvents: "none",
        ...props.style,
      }}
    />
  );
  return (
    <Paper h="100dvh" p={80} pos="relative" bg="#FBEAD0">
      <Flex direction="column" justify="center" align="center">
        <Title order={3}>What Our Customers Say</Title>
        <Image
          mt={80}
          h={600}
          w="auto"
          fit="contain"
          src="/bakery_1.jpg"
          style={{ borderRadius: "12px" }}
        />

        {/* Map reviews */}
        {mockReview.slice(0, 2).map((review, index) => (
          <Card
            key={index}
            className={classes.review_card}
            style={{
              top: `${15 + index * 15}%`,
              left: index % 2 === 0 ? "10%" : "auto",
              right: index % 2 !== 0 ? "10%" : "auto",
              position: "absolute",
            }}
          >
            <Stack>
              <Group justify="space-between">
                <Avatar size="md" radius="xl" color="#8A4621">
                  {review.name[0]}
                </Avatar>
                <Rating
                  size="xs"
                  value={review.rating}
                  fractions={2}
                  readOnly
                />
              </Group>
              <Text size="sm">{review.review_en}</Text>
            </Stack>
            <QuoteIcon />
          </Card>
        ))}

        {/* Example of stacked flipping cards with first 2 reviews */}
        <Box pos="absolute" top="60%" left="20%">
          {mockReview.slice(2, 5).map((review, i) => (
            <Card
              key={i}
              className={classes.review_card}
              onClick={() => setFlipped(!flipped)}
              style={{
                transform: flipped
                  ? i === 0
                    ? "rotate(2deg)"
                    : "rotate(-4deg)"
                  : i === 0
                  ? "rotate(-4deg)"
                  : "rotate(2deg)",
                zIndex: flipped ? (i === 0 ? 1 : 0) : i === 0 ? 0 : 1,
                position: "absolute",
              }}
            >
              <Stack>
                <Group justify="space-between">
                  <Avatar size="md" radius="xl" color="#8A4621">
                    {review.name[0]}
                  </Avatar>
                  <Rating
                    size="xs"
                    value={review.rating}
                    fractions={2}
                    readOnly
                  />
                </Group>
                <Text size="sm">{review.review_en}</Text>
              </Stack>
              <QuoteIcon />
            </Card>
          ))}
        </Box>
      </Flex>
    </Paper>
  );
};

export default Review;
