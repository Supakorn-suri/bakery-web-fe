"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IconAdjustments } from "@tabler/icons-react";
import {
  Flex,
  Box,
  Group,
  Text,
  Pagination,
  SimpleGrid,
  LoadingOverlay,
  Title,
  Center,
  Select,
} from "@mantine/core";

import { HorizontalProductCard } from "../../features/products/components/HorizontalProductCard";
import { getProducts } from "@/features/products/apis/product";
import {
  ProductListResponse,
  ProductResponse,
} from "@/features/products/types/product";

const LIMIT = 10;

export const BakeryList = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<string | null>("newest");

  const {
    data: ProductRes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", "bakery-list", page, sort],
    queryFn: () =>
      getProducts({
        page,
        limit: LIMIT,
        sort: sort as any,
      }),
    placeholderData: (previousData?: ProductListResponse) => previousData,
  });

  const total = ProductRes?.total || ProductRes?.data?.length || 0;
  const currentPageItems = ProductRes?.data?.length || 0;
  const totalPages = ProductRes?.total
    ? Math.ceil(ProductRes.total / LIMIT)
    : Math.ceil(total / LIMIT);
  const startItem = LIMIT * (page - 1) + 1;
  const endItem = LIMIT * (page - 1) + currentPageItems;
  const message =
    currentPageItems > 0
      ? `Showing ${startItem} - ${endItem} of ${total}`
      : "No products found";

  const handleSortChange = (value: string | null) => {
    setSort(value);
    setPage(1); // Reset to first page when sort changes
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Flex gap={16} align="center" w="100%" justify="space-between" mb="md">
        <Title order={3}>All Products</Title>

        <Select
          leftSectionPointerEvents="none"
          leftSection={<IconAdjustments />}
          placeholder="Sort by"
          data={[
            { value: "newest", label: "Newest" },
            { value: "price_asc", label: "Price: Low to High" },
            { value: "price_desc", label: "Price: High to Low" },
            { value: "rating_desc", label: "Rating: High to Low" },
            { value: "rating_asc", label: "Rating: Low to High" },
            { value: "name_asc", label: "Name: A to Z" },
            { value: "name_desc", label: "Name: Z to A" },
          ]}
          value={sort}
          onChange={handleSortChange}
          w={200}
          clearable
        />
      </Flex>

      <Flex
        direction="column"
        py={24}
        gap={24}
        w="100%"
        pos="relative"
        style={{ minHeight: 400 }}
      >
        <LoadingOverlay visible={isLoading} />

        {isError ? (
          <Center h={300}>
            <Text c="red">Failed to load products. Please try again.</Text>
          </Center>
        ) : ProductRes?.data && ProductRes.data.length > 0 ? (
          <>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
              {ProductRes.data.map((item: ProductResponse) => (
                <Box key={`${item.id}-${item.name}`} p={0} m={0}>
                  <HorizontalProductCard
                    id={String(item.id)}
                    name={item.name}
                    baker={item.baker?.bakery_name || "Unknown Baker"}
                    price={item.price}
                    cook_time={item.cook_time || "N/A"}
                    rating={item.rating || 0}
                    image={item.image}
                  />
                </Box>
              ))}
            </SimpleGrid>

            <Group justify="flex-end">
              <Text size="sm" c="dimmed">
                {message}
              </Text>

              <Pagination
                total={totalPages}
                value={page}
                onChange={setPage}
                withPages={false}
                color="#6E442F"
              />
            </Group>
          </>
        ) : (
          <Center h={300}>
            <Text c="dimmed">No products available</Text>
          </Center>
        )}
      </Flex>
    </Flex>
  );
};
