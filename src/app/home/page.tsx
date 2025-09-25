"use client";
import { FooterSocial } from '@/components/Footer/Footer';
import Recommend from "@/components/Product/Recommend";
import Review from "@/components/Product/Review";
import {
  Card,
  Flex,
  Text,
  Group,
  Image,
  Box,
  Button,
  List,
  Stack,
} from "@mantine/core";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Box mih="100dvh" w="100%" bg="#FBEAD0" pos="relative">
        <Image
          top="-5%"
          right="30%"
          pos="absolute"
          h={270}
          w="auto"
          fit="contain"
          src="/plate_1.png"
        />
        <Image
          top="30%"
          right="-5%"
          pos="absolute"
          h={300}
          w="auto"
          fit="contain"
          src="/plate_2.png"
        />
        <Image
          top="50%"
          left="3%"
          pos="absolute"
          h={450}
          w="auto"
          fit="contain"
          src="/plate_3.png"
        />
        <Text pos="absolute" top="30%" left="10%" size="100px" fw={900}>
          Freshly baked happiness, just for you.
        </Text>
      </Box>
      <Box
        mih="100dvh"
        w="100%"
        pos="relative"
        style={{
          backgroundColor: "white",
          backgroundSize: "30px 30px",
          backgroundImage: `
            linear-gradient(to right, #FFFAF1 1px, transparent 1px),
            linear-gradient(to bottom, #FFFAF1 1px, transparent 1px)
          `,
        }}
      >
        <Flex direction="row" align="center" justify="center">
          <Card h={100} w="70%" mt="xl" bg="#E1E1E1" px="sm" pt="8">
            <Flex direction="row" align="center" justify="space-around" mb="8">
              <Box
                w="12"
                h="12"
                bg="gray.7"
                style={{ borderRadius: "50%" }}
              ></Box>
              <Box
                w="12"
                h="12"
                bg="gray.7"
                style={{ borderRadius: "50%" }}
              ></Box>
              <Box
                w="12"
                h="12"
                bg="gray.7"
                style={{ borderRadius: "50%" }}
              ></Box>
            </Flex>
            <Card
              h={32}
              w="100%"
              bg="#D6D6D6"
              style={{
                borderRadius: 4,
                borderLeft: "4px solid #333",
                borderRight: "4px solid #333",
                borderTop: "8px solid #CDCDCD",
                borderBottom: "8px solid #BCBCBC",
              }}
            ></Card>
          </Card>
        </Flex>
        <Flex direction="row" align="center" justify="center" gap={24} mx="xl">
          <Card h={250} w={180} bg="#FCFCFC" withBorder>
            <Text>Pre-Order & Favorites</Text>
            <Text size="sm">
              Members can pre-order bakery items and save their favorites for
              later.
            </Text>
          </Card>
          <Card h={250} w={180} bg="#FCFCFC" withBorder>
            <Text>Order Tracking</Text>
            <Text size="sm">
              Track your order in real time with status updates at every step.
            </Text>
          </Card>
          <Card h={250} w={180} bg="#FCFCFC" withBorder>
            <Text>Bakery Management</Text>
            <Text size="sm">
              Bakers and stores can create, update, and delete their menus
              easily.
            </Text>
          </Card>
          <Card h={250} w={180} bg="#FCFCFC" withBorder>
            <Text>Personalized Experience</Text>
            <Text size="sm">
              Enjoy a personalized bakery journey with tailored suggestions.
            </Text>
          </Card>
        </Flex>
      </Box>
      <Box bg="#FFFAEF">
        <Recommend />
        <Review />
      </Box>
      <Box
        mih="100dvh"
        w="100%"
        bg="white"
        pos="relative"
        style={{
          display: "flex", // make Box a flex container
          alignItems: "center", // center vertically
          justifyContent: "center", // center horizontally
        }}
      >
        <Flex direction="row" gap={24} mx="xl">
          <Card h={500} w={350} bg="#FCFCFC" withBorder radius="lg">
            <Flex direction="column" justify="space-between" h="100%">
              <Stack>
                <Text>Member Login</Text>
                <List>
                  <List.Item>Browse bakery menus</List.Item>
                  <List.Item>Browse bakery menus</List.Item>
                  <List.Item>Track order status in real time</List.Item>
                  <List.Item>Save favorite bakery items</List.Item>
                </List>
              </Stack>
              <Button color="dark" fullWidth mt="md" radius="md">
                Apply Now
              </Button>
            </Flex>
          </Card>
          <Card h={500} w={300} bg="#FCFCFC" withBorder radius="lg">
            <Flex direction="column" justify="space-between" h="100%">
              <Stack>
                <Text>Baker Login</Text>
                <List>
                  <List.Item>Create and manage bakery menus</List.Item>
                  <List.Item>Update or delete items anytime</List.Item>
                  <List.Item>Track and manage customer orders</List.Item>
                  <List.Item>View sales reports and charts</List.Item>
                </List>
              </Stack>
              <Button color="dark" fullWidth mt="md" radius="md">
                Apply Now
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Box>
      <Box w="100%" bg="#77523F">
        <FooterSocial />
      </Box>
    </Flex>
  );
}
