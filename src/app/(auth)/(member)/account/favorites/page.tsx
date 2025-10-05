"use client";

import React from "react";
import {
  Flex,
  Text,
  Image,
  Paper,
  Stack,
  Title,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";

import { mockItems } from "@/components/Product/Recommend";
import { ProductProps } from "@/components/Product/ProductCard";

const FavoritePage = () => {
  return (
    <Paper w="100%" py={16}>
      <Title order={2}>Favorites</Title>
      <ScrollArea h={560} w="100%" scrollbars="y" offsetScrollbars>
        {mockItems.map((item: ProductProps) => (
          <Flex
            w="100%"
            direction="row"
            key={item.id}
            py={16}
            gap={16}
            style={{
              borderBottom: `1px solid #D9D9D9`,
              paddingBottom: 24,
            }}
          >
            <Image
              src={item.image}
              maw={80}
              h={80}
              radius={16}
              fit="cover"
              alt={item.name}
            />
            <Flex
              direction="row"
              h={80}
              gap={4}
              w="100%"
              justify="space-between"
            >
              <Stack gap={0} justify="flex-start">
                <Text fw={500} fz={16}>
                  {item.name}
                </Text>
                <Text fz={14}>Baker: {item.baker}</Text>
                <Text fz={14}>Quantity: 1</Text>
              </Stack>
              <Stack justify="space-between" align="flex-end">
                <Text fw={600} fz={16}>
                  ฿{item.price}
                </Text>
                <ActionIcon variant="subtle" color="red">
                  <IconHeartFilled />
                </ActionIcon>
              </Stack>
            </Flex>
          </Flex>
        ))}
      </ScrollArea>
    </Paper>
  );
};

export default FavoritePage;
