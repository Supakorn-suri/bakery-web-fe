import { Text, Image, Box } from "@mantine/core";

import classes from "./HomeHeroSection.module.css";

const HomeHeroSection = ({ id }: { id: string }) => {
  return (
    <Box
      id={id}
      mih="100dvh"
      w="100%"
      bg="#FBEAD0"
      pos="relative"
      style={{ overflow: "hidden" }}
    >
      <Image
        top="-5%"
        right="30%"
        h={270}
        src="/plate_1.png"
        className={classes.bakery_img}
      />
      <Image
        top="30%"
        right="-5%"
        h={300}
        src="/plate_2.png"
        className={classes.bakery_img}
      />
      <Image
        top="50%"
        left="3%"
        h={450}
        src="/plate_3.png"
        className={classes.bakery_img}
      />
      <Text className={classes.handwriting_text}>
        <Text span style={{ display: "block" }} inherit>
          Freshly baked happiness,
        </Text>
        <Text span style={{ display: "block" }} inherit>
          just for you.
        </Text>
      </Text>
      <Text
        pos="absolute"
        right="0"
        top="30%"
        style={{ transform: "rotate(-4deg)" }}
        className={classes.handwriting_text}
      >
        <Text span style={{ display: "block" }} inherit>
          Because life’s better
        </Text>
        <Text span style={{ display: "block" }} inherit>
          with butter.
        </Text>
      </Text>
      <Text
        pos="absolute"
        left="-1%"
        bottom="27%"
        style={{ transform: "rotate(4deg)" }}
        className={classes.handwriting_text}
      >
        Every bite tells a story.
      </Text>
      <Text className={classes.main_text}>
        <Text span style={{ display: "block" }} inherit>
          Freshly
        </Text>
        <Text span style={{ display: "block" }} inherit>
          baked
        </Text>
        <Text span style={{ display: "block" }} inherit>
          happiness,
        </Text>
        <Text span style={{ display: "block" }} inherit>
          just for you.
        </Text>
      </Text>
    </Box>
  );
};

export default HomeHeroSection;
