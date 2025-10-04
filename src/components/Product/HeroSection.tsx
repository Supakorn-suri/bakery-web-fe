import React from "react";

import { Flex, Box, Image, Text, Divider } from "@mantine/core";

const HeroSection = () => {
  return (
    <Flex
      direction="row"
      px={{ base: 32, sm: 100, md: 180 }}
      justify="space-between"
    >
      <Flex direction="column" gap={24}>
        <Text
          color="#FFC862"
          fw={700}
          fz={{ base: 48, sm: 56, md: 72 }}
          lh={1.2}
          style={{
            transform: "rotate3d(4, 1, -2, 25deg)",
            zIndex: 1,
          }}
        >
          A little <br />
          sweetness <br /> makes every day <br />
          brighter.
        </Text>
      </Flex>
      <Image
        h={{ base: 140, sm: 240, md: 300 }}
        w="auto"
        fit="contain"
        src="/croissant_1.png"
        style={{ position: "absolute", right: "30%", top: "2%" }}
      />

      <Flex
        direction="column"
        gap={16}
        style={{
          transform: "rotate(4deg)",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "4px",
        }}
        bg="#FEE19B"
        w={{ base: 150, sm: 240 }}
        h={{ base: 220, sm: 300 }}
        mt={24}
        p={24}
      >
        <Text fw={600} fz={{ base: 14, sm: 20 }} lh={1.2} color="#572B06">
          Fresh from the oven,
        </Text>
        <Divider
          orientation="vertical"
          size="sm"
          h={{ base: 80, sm: 120 }}
          color="#572B06"
        />
        <Text fw={600} fz={{ base: 14, sm: 20 }} lh={1.2} color="#572B06">
          just for you.
        </Text>
      </Flex>
      <Image
        h={{ base: 90, sm: 140, md: 200 }}
        w="auto"
        fit="contain"
        src="/croissant_1.png"
        style={{
          position: "absolute",
          right: "5%",
          top: "11%",
          transform: "scaleX(-1) rotate(-15deg)",
        }}
      />
    </Flex>
  );
};

export default HeroSection;
