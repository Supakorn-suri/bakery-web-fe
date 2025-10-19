"use client";

import { useState } from "react";
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
} from "@mantine/core";
import { IconSearch, IconClockHour3 } from "@tabler/icons-react";

import { mockItems } from "../sections/Recommend";

const SearchSpotlight = () => {
  const [query, setQuery] = useState("");

  const items = mockItems
    .filter((item: any) =>
      item.name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((item: any) => (
      <Spotlight.Action key={item.id} onClick={() => console.log(item)}>
        <Group wrap="nowrap" w="100%">
          {item.image && (
            <Center>
              <Image
                src={item.image}
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
              <IconClockHour3 />
              <Text>{item.cook_time}</Text>
              <Divider size="sm" orientation="vertical" />
              <Rating defaultValue={1} count={1} />
              <Text>{item.rating}</Text>
            </Group>
          </Box>
        </Group>
      </Spotlight.Action>
    ));

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
          style={{
            backdropFilter: "blur(2px)",
          }}
          // styles={{
          //   input: {
          //     backgroundColor: "rgba(255, 255, 255, 0.8)",
          //   },
          // }}
          // leftSection={<IconSearch size={18} stroke={1.5} />}
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
          placeholder="Search..."
          leftSection={<IconSearch stroke={1.5} />}
        />
        <Spotlight.ActionsList>
          {items.length > 0 ? (
            items
          ) : (
            <Spotlight.Empty>Nothing found...</Spotlight.Empty>
          )}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
};

export default SearchSpotlight;
