import { ActionIcon, Flex, Box, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const FooterSocial = () => {
  return (
    <Box bg="#77523F" p={{ base: 8, xs: 16 }} w="100%">
      <Flex
        direction="row"
        gap={12}
        justify={{ base: "center", xs: "space-between" }}
        align="center"
        w="100%"
      >
        <Text fz="sm" c="white" display={{ base: "none", xs: "block" }}>
          © {new Date().getFullYear()} BakeStory. All rights reserved.
        </Text>
        <Flex direction="row">
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Flex>
    </Box>
  );
};
