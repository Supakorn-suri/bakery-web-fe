"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "@mantine/carousel";
import { Flex, Title, Container } from "@mantine/core";

import { BakeryList } from "@/components/sections/BakeryList";
import { ProductCard } from "@/features/products/components/ProductCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { SearchSpotlight } from "@/components/Inputs/SearchSpotlight";
import { getProducts } from "@/features/products/apis/product";
import { ProductResponse } from "@/features/products/types/product";

const BakeryPage = () => {
  // Fetch recommended products (newest)
  const { data: recommendedData } = useQuery({
    queryKey: ["products", "recommended"],
    queryFn: () =>
      getProducts({
        page: 1,
        limit: 10,
        sort: "newest",
      }),
  });

  // Fetch most loved products (highest rating)
  const { data: mostLovedData } = useQuery({
    queryKey: ["products", "most-loved"],
    queryFn: () =>
      getProducts({
        page: 1,
        limit: 10,
        sort: "rating_desc",
      }),
  });

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

        {/* Recommended Products */}
        {recommendedData?.data && recommendedData.data.length > 0 && (
          <Flex direction="column" gap={24}>
            <Title order={3}>Sweet moments, baked for you</Title>
            <Carousel
              slideSize="10%"
              slideGap="lg"
              emblaOptions={{ align: "start", dragFree: true }}
            >
              {recommendedData.data.map((item: ProductResponse) => (
                <Carousel.Slide key={item.id}>
                  <ProductCard
                    id={String(item.id)}
                    name={item.name}
                    baker={item.baker?.bakery_name || "Unknown Baker"}
                    price={item.price}
                    cook_time={item.cook_time || "N/A"}
                    rating={item.rating || 0}
                    image={item.image}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Flex>
        )}

        {/* Most Loved Products */}
        {mostLovedData?.data && mostLovedData.data.length > 0 && (
          <Flex direction="column" gap={24} my={56}>
            <Title order={3}>Most Loved by Our Members</Title>
            <Carousel
              slideSize="10%"
              slideGap="lg"
              emblaOptions={{ align: "start", dragFree: true }}
            >
              {mostLovedData.data.map((item: ProductResponse) => (
                <Carousel.Slide key={item.id}>
                  <ProductCard
                    id={String(item.id)}
                    name={item.name}
                    baker={item.baker?.bakery_name || "Unknown Baker"}
                    price={item.price}
                    cook_time={item.cook_time || "N/A"}
                    rating={item.rating || 0}
                    image={item.image}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Flex>
        )}

        <BakeryList />
      </Flex>
    </Container>
  );
};

export default BakeryPage;
