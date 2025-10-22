"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spotlight, spotlight } from "@mantine/spotlight";
import {
  Center,
  Group,
  Text,
  TextInput,
  ActionIcon,
  Box,
  Image,
  Rating,
  Divider,
  Loader,
} from "@mantine/core";
import { IconSearch, IconClockHour3 } from "@tabler/icons-react";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import { getProducts } from "@/features/products/apis/product";
import { ProductResponse } from "@/features/products/types/product";

import { getImageUrl } from "./UploadFile";

interface SearchSpotlightProps {
  onSearchChange?: (value: string) => void;
}

export const SearchSpotlight = ({ onSearchChange }: SearchSpotlightProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 300);

  // Fetch products based on search query
  const { data: productRes, isLoading } = useQuery({
    queryKey: ["products", "search", debouncedQuery],
    queryFn: () =>
      getProducts({
        page: 1,
        limit: 10,
        search: debouncedQuery || undefined,
      }),
    enabled: debouncedQuery.length > 0,
  });

  useEffect(() => {
    if (onSearchChange && debouncedQuery) {
      onSearchChange(debouncedQuery);
    }
  }, [debouncedQuery, onSearchChange]);

  const handleProductClick = (id: number) => {
    router.push(`/bakery/${id}`);
    spotlight.close();
    setQuery("");
  };

  const items =
    productRes?.data?.map((item: ProductResponse) => (
      <Spotlight.Action
        key={item.id}
        onClick={() => handleProductClick(item.id)}
      >
        <Group wrap="nowrap" w="100%">
          {item.image && (
            <Center>
              <Image
                src={getImageUrl(item.image)}
                alt={item.name}
                h={80}
                w={80}
                maw="auto"
                fit="cover"
                radius="md"
              />
            </Center>
          )}

          <Box style={{ flex: 1 }}>
            <Group justify="space-between" my={8}>
              <Text fw={500}>{item.name}</Text>
              <Text>฿{item.price}</Text>
            </Group>
            <Group>
              <IconClockHour3 size={16} />
              <Text size="sm">{item.cook_time || "N/A"}</Text>
              <Divider size="sm" orientation="vertical" />
              <Rating value={1} count={1} readOnly />
              <Text size="sm">{item.rating?.toFixed(1) || "0.0"}</Text>
            </Group>
          </Box>
        </Group>
      </Spotlight.Action>
    )) || [];

  return (
    <>
      <Box
        miw={160}
        w="100%"
        maw={480}
        mx="auto"
        p={16}
        style={{
          backdropFilter: "blur(2px)",
          position: "relative",
          zIndex: 1,
          bottom: 80,
          borderRadius: "80px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <TextInput
          radius="xl"
          size="md"
          placeholder="Search your favorite bakery"
          rightSectionWidth={42}
          readOnly
          style={{
            backdropFilter: "blur(2px)",
            cursor: "pointer",
          }}
          styles={{
            input: {
              cursor: "pointer",
            },
          }}
          onClick={spotlight.open}
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              variant="filled"
              onClick={spotlight.open}
            >
              <IconSearch size={18} stroke={1.5} />
            </ActionIcon>
          }
        />
      </Box>

      <Spotlight.Root
        query={query}
        onQueryChange={setQuery}
        scrollable
        maxHeight={350}
      >
        <Spotlight.Search
          placeholder="Search products..."
          leftSection={<IconSearch stroke={1.5} />}
        />
        <Spotlight.ActionsList>
          {isLoading ? (
            <Center p="xl">
              <Loader size="sm" />
            </Center>
          ) : items.length > 0 ? (
            items
          ) : query.length > 0 ? (
            <Spotlight.Empty>No products found...</Spotlight.Empty>
          ) : (
            <Center p="xl">
              <Text c="dimmed" size="sm">
                Start typing to search products
              </Text>
            </Center>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
};
