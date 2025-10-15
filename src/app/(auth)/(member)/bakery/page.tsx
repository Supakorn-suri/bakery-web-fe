"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import { Flex, Title, Container } from "@mantine/core";

import { mockItems } from "@/components/sections/Recommend";
import BakeryList from "@/components/sections/BakeryList";
import ProductCard from "@/features/products/components/ProductCard";
import HeroSection from "@/components/sections/HeroSection";
import SearchSpotlight from "@/components/Inputs/SearchSpotlight";

const BakeryPage = () => {
  return (
    <Container
      fluid
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(25deg,#FFFFFF 75%, #FFF5DC 90%, #FFFFFF 99%)",
      }}
    >
      <Flex
        mt={96}
        direction="column"
        p={{ base: 24, sm: 48 }}
        maw={1408}
        mx={{ base: 0, lg: "auto" }}
      >
        <HeroSection />

        <SearchSpotlight />

        <Flex direction="column" gap={24}>
          <Title order={3}>Sweet moments, baked for you</Title>
          <Carousel
            slideSize="10%"
            slideGap="lg"
            emblaOptions={{ align: "start", dragFree: true }}
          >
            {mockItems.map((item: any) => (
              <Carousel.Slide key={item.id}>
                <ProductCard {...item} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Flex>

        <Flex direction="column" gap={24} my={56}>
          <Title order={3}>Most Loved by Our Members</Title>
          <Carousel
            slideSize="10%"
            slideGap="lg"
            emblaOptions={{ align: "start", dragFree: true }}
          >
            {mockItems.map((item: any) => (
              <Carousel.Slide key={item.id}>
                <ProductCard {...item} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Flex>
        <BakeryList />
      </Flex>
    </Container>
  );
};

export default BakeryPage;
