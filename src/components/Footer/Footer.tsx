import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Box, Text } from "@mantine/core";

export function FooterSocial() {
  return (
    <Box style={{ width: "100%", padding: "1rem 0" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Text fz="sm" c="white">
          © {new Date().getFullYear()} BakeStory. All rights reserved.
        </Text>
        <Group gap={12}>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
}
