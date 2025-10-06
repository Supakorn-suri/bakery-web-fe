"use client";

import { Flex, Text, Box, Title } from "@mantine/core";
import {
  IconShoppingBag,
  IconClipboardCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

import About from "@/components/Home/About";
import RoleSelectionCards from "@/components/Auth/RoleSelectionCards";
import { FooterSocial } from "@/components/Footer/Footer";
import Recommend from "@/components/Product/Recommend";
import Review from "@/components/Product/Review";
import HomeHeroSection from "@/components/Home/HomeHeroSection";

export default function Home() {
  return (
    <Flex direction="column">
      <HomeHeroSection id="home" />

      <About id="features" />

      <Box
        id="our-bakery"
        w="100%"
        mih="100dvh"
        py={{ base: 64, xs: 120 }}
        bg="#FFFAEF"
      >
        <Flex direction="column" maw={1408} mx={{ base: 0, lg: "auto" }}>
          <Title order={3} mb={32} ta="center">
            Most Loved by Our Members
          </Title>
          <Recommend />
          <Box ta="center" px={24} mt={{ base: 64, xs: 120 }}>
            <Title order={3} mb={32}>
              How to Order
            </Title>
            <Flex
              direction={{ base: "column", xs: "row" }}
              justify="center"
              align="center"
              gap={{ base: 24, xs: 48 }}
            >
              <Box maw={250}>
                <IconShoppingBag size={64} stroke={1.5} color="#E59866" />
                <Text fw={600} mt={16}>
                  1. Choose Your Favorite
                </Text>
                <Text c="dimmed" fz="sm">
                  Pick the pastries or breads you love from our menu.
                </Text>
              </Box>

              <Box maw={250}>
                <IconClipboardCheck size={64} stroke={1.5} color="#E59866" />
                <Text fw={600} mt={16}>
                  2. Place Your Order
                </Text>
                <Text c="dimmed" fz="sm">
                  Add to cart and confirm your order easily.
                </Text>
              </Box>

              <Box maw={250}>
                <IconTruckDelivery size={64} stroke={1.5} color="#E59866" />
                <Text fw={600} mt={16}>
                  3. Enjoy Fresh Delivery
                </Text>
                <Text c="dimmed" fz="sm">
                  Sit back and wait for your fresh treats to arrive.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Review />

      <Box
        id="for-members"
        mih="100dvh"
        w="100%"
        bg="white"
        pos="relative"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RoleSelectionCards />
      </Box>
      <Box w="100%" bg="#77523F">
        <FooterSocial />
      </Box>
    </Flex>
  );
}
