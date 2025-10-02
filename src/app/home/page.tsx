"use client";
import About from "@/components/About/About";
import RoleSelectionCards from "@/components/Auth/RoleSelectionCards";
import { FooterSocial } from "@/components/Footer/Footer";
import Recommend from "@/components/Product/Recommend";
import Review from "@/components/Product/Review";
import { Flex, Text, Image, Box } from "@mantine/core";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Box
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
      <About />
      <Box w="100%" bg="#FFFAEF">
        <Recommend />
      </Box>
      <Review />

      <Box
        mih="100dvh"
        w="100%"
        bg="white"
        pos="relative"
        style={{
          display: "flex", // make Box a flex container
          alignItems: "center", // center vertically
          justifyContent: "center", // center horizontally
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
