"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import { Flex, Title } from "@mantine/core";

import Recommend, { mockItems } from "@/components/Product/Recommend";
import BakeryList from "@/components/Product/BakeryList";
import ProductCard from "@/components/Product/ProductCard";
import HeroSection from "@/components/Product/HeroSection";
import SearchSpotlight from "@/components/Product/SearchSpotlight";

const BakeryPage = () => {
  return (
    <Flex
      direction="column"
      mih="100dvh"
      w="100%"
      pos="relative"
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(25deg,#FFFFFF 75%, #FFF5DC 90%, #FFFFFF 99%)",
      }}
      gap={16}
      mt={60}
    >
      <HeroSection />

      <SearchSpotlight />

      <Flex direction="column" gap={24} p={24}>
        <Title order={3}>Sweet moments, baked for you</Title>

        <Carousel
          slideSize="20%"
          slideGap="md"
          emblaOptions={{ align: "start", dragFree: true }}
        >
          {mockItems.map((item: any) => (
            <Carousel.Slide key={item.id}>
              <ProductCard {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>

      <Recommend />
      <BakeryList />
    </Flex>
  );
};

export default BakeryPage;
