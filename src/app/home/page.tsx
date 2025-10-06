"use client";
import { Caveat } from "next/font/google";
const caveat = Caveat({
  weight: ["400", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-caveat", 
});
import { Flex, Text, Image, Box, Title } from "@mantine/core";
import {
  IconShoppingBag,
  IconClipboardCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";

import About from "@/components/About/About";
import RoleSelectionCards from "@/components/Auth/RoleSelectionCards";
import { FooterSocial } from "@/components/Footer/Footer";
import Recommend from "@/components/Product/Recommend";
import Review from "@/components/Product/Review";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Box
        id="home"
        mih="100dvh"
        w="100%"
        bg="#FBEAD0"
        pos="relative"
        style={{ overflow: "hidden" }}
      >
        <Image
          top="-5%"
          right="30%"
          pos="absolute"
          h={270}
          w="auto"
          fit="contain"
          src="/plate_1.png"
        />
        <Image
          top="30%"
          right="-5%"
          pos="absolute"
          h={300}
          w="auto"
          fit="contain"
          src="/plate_2.png"
        />
        <Image
          top="50%"
          left="3%"
          pos="absolute"
          h={450}
          w="auto"
          fit="contain"
          src="/plate_3.png"
        />
        <Text pos="absolute" top="30%" left="10%" size="100px" fw={900}>
          Freshly baked happiness, just for you.
        </Text>
      </Box>

      <About id="features" />

      <Box
        id="our-bakery"
        w="100%"
        mih="100dvh"
        py={{ base: 64, xs: 120 }}
        bg="#FFFAEF"
      >
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
