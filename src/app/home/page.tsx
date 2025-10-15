"use client";

import { Flex, Box, Title } from "@mantine/core";

import RoleSelectionCards from "@/features/home/components/RoleSelectionCards";
import Recommend from "@/components/sections/Recommend";
import Review from "@/features/home/components/Review";
import HomeHeroSection from "@/features/home/components/HomeHeroSection";
import { HowToOrderSection } from "@/features/home/components/HowToOrderSection";
import FeatureSection from "@/features/home/components/FeatureSection";
import { FooterSocial } from "@/components/footers/Footer";

export default function Home() {
  return (
    <Flex direction="column">
      <HomeHeroSection id="home" />

      <FeatureSection id="features" />

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
          <HowToOrderSection />
        </Flex>
      </Box>

      <Review id="reviews" />

      <RoleSelectionCards id="for-members" />

      <FooterSocial />
    </Flex>
  );
}
