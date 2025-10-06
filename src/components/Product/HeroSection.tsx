import React from "react";

import { Flex, Image, Text, Divider } from "@mantine/core";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <Flex
      direction="row"
      px={{ base: 32, sm: 72, md: 100 }}
      maw={1200}
      mx={{ base: 0, lg: "auto" }}
      gap={{ base: 0, md: 48 }}
      justify="space-between"
    >
      <Text className={classes.hero_text}>
        <Text span style={{ display: "block" }} inherit>
          A little
        </Text>
        <Text span style={{ display: "block" }} inherit>
          sweetness
        </Text>
        <Text span style={{ display: "block" }} inherit>
          makes every day
        </Text>
        <Text span style={{ display: "block" }} inherit>
          brighter.
        </Text>
      </Text>

      <Image
        fit="contain"
        src="/croissant_1.png"
        className={classes.hero_img_md}
      />

      <Flex direction="column" className={classes.note_card}>
        <Text className={classes.handwriting_text}>
          Fresh from the oven,
          <Text span style={{ display: "block" }} inherit>
            just for you.
          </Text>
        </Text>
      </Flex>
      <Image
        fit="contain"
        src="/croissant_1.png"
        className={classes.hero_img_sm}
      />
    </Flex>
  );
};

export default HeroSection;
