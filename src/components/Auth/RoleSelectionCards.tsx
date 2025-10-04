import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Flex,
  Text,
  Image,
  Button,
  List,
  Stack,
  SimpleGrid,
  Title,
  Divider,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

import LoginModal from "./LoginModal";

const RoleSelectionCards = () => {
  const router = useRouter();
  const [openedLogin, loginHandlers] = useDisclosure(false);

  return (
    <Flex direction="column" gap={48} align="center" justify="center" p={60}>
      <Stack gap={0}>
        <Text
          fz={48}
          fw={900}
          variant="gradient"
          gradient={{ from: "#8A4621", to: "#FBEAD0", deg: 135 }}
        >
          Join us today —
        </Text>
        <Text fz={32} fw={600}>
          whether you’re here to enjoy or to bake.
        </Text>
      </Stack>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        <Card
          h={480}
          w="100%"
          maw={260}
          bg="#FCFCFC"
          withBorder
          radius="lg"
          p={0}
          m={0}
        >
          <Flex direction="column" justify="space-between" h="100%" m={0}>
            <Stack p={0}>
              <Image w="260" h="auto" fit="contain" src="/member.jpg" />
              <Title order={3} ta="center">
                Member
              </Title>
              <Divider mx="md" />
              <List
                px={16}
                spacing="xs"
                size="sm"
                center
                icon={<IconCircleCheck size={16} />}
              >
                <List.Item>Browse bakery</List.Item>
                <List.Item>Place an order</List.Item>
                <List.Item>Track order status in real time</List.Item>
                <List.Item>Save favorite bakery items</List.Item>
              </List>
            </Stack>
            <Button
              m={16}
              color="dark"
              radius="md"
              style={{
                background:
                  "linear-gradient(135deg, #8A4621 0%, #BA653A 75%, #DC682E 100%)",
              }}
              onClick={loginHandlers.open}
            >
              Apply Now
            </Button>
          </Flex>
        </Card>
        <Card
          h={480}
          w="100%"
          maw={260}
          bg="#FCFCFC"
          withBorder
          radius="lg"
          p={0}
          m={0}
        >
          <Flex direction="column" justify="space-between" h="100%">
            <Stack>
              <Image w="260" h="auto" fit="contain" src="/baker.jpg" />
              <Title order={3} ta="center">
                Baker
              </Title>
              <Divider mx="md" />

              <List
                px={16}
                spacing="xs"
                size="sm"
                center
                icon={<IconCircleCheck size={16} />}
              >
                <List.Item>Create and manage bakery menus</List.Item>
                <List.Item>Update or delete items anytime</List.Item>
                <List.Item>Track and manage customer orders</List.Item>
                <List.Item>View sales reports and charts</List.Item>
              </List>
            </Stack>

            <Button
              m={16}
              color="dark"
              radius="md"
              style={{
                background:
                  "linear-gradient(135deg, #8A4621 0%, #BA653A 75%, #DC682E 100%)",
              }}
              onClick={() => router.replace("/register")}
            >
              Apply Now
            </Button>
          </Flex>
        </Card>
      </SimpleGrid>
      <LoginModal opened={openedLogin} close={loginHandlers.close} />
    </Flex>
  );
};

export default RoleSelectionCards;
