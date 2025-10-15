import React from "react";
import {
  Card,
  Flex,
  Text,
  List,
  SimpleGrid,
  Box,
  Divider,
} from "@mantine/core";

import classes from "./FeatureSection.module.css";

const FeatureSection = ({ id }: { id: string }) => {
  return (
    <Box id={id} className={classes.bg_grid}>
      <Flex direction="row" align="center" justify="center">
        <Card h={80} w="70%" mt="xl" bg="#E1E1E1" px="sm" pt="6">
          <Flex direction="row" align="center" justify="space-around">
            <Box className={classes.circle}></Box>
            <Box className={classes.circle}></Box>
            <Box className={classes.circle}></Box>
          </Flex>
        </Card>
        <Card className={classes.tab_bill}></Card>
      </Flex>
      <Flex direction="row" align="center" justify="center">
        <SimpleGrid
          cols={{ base: 1, xs: 2 }}
          spacing={{ base: 12, sm: 36, md: 80 }}
          verticalSpacing={{ base: 36, md: 80 }}
          mt={-16}
        >
          <Card className={classes.bill_card1}>
            <Text size="lg" fw={600}>
              Pre-Order & Favorites
            </Text>
            <Divider my="md" size="sm" />
            <Text size="sm" mb="sm">
              <Text span fw={600} c="#8A4621" inherit>
                Pre-order
              </Text>{" "}
              your bakery picks and pick them up anytime.
            </Text>
            <Text size="sm">
              Save{" "}
              <Text span fw={600} c="#8A4621" inherit>
                favorites
              </Text>{" "}
              for quick re-order next time.
            </Text>
            {Array.from({ length: 4 }).map((_, i) => (
              <Divider key={i} my="md" />
            ))}
          </Card>
          <Card className={classes.bill_card2}>
            <Flex direction="column" justify="space-between" h="100%">
              <Flex direction="column">
                <Text size="lg" fw={600}>
                  Order Tracking
                </Text>
                <Divider my="md" variant="dashed" size="sm" />
                <List spacing="sm" size="sm" center>
                  <List.Item>
                    Track your order in real time with status updates at every
                    step
                  </List.Item>
                  <List.Item>
                    Get instant updates on order status via notifications
                  </List.Item>
                </List>
              </Flex>
              <Flex direction="column">
                <Divider my="md" variant="dashed" />
                <Text size="xs" c="dimmed" ta="center">
                  COMING SOON
                </Text>
                <Divider mt="md" variant="dashed" />
              </Flex>
            </Flex>
          </Card>
          <Card className={classes.bill_card3}>
            <Text size="lg" fw={600}>
              Bakery Management
            </Text>
            <Divider my="md" size="sm" />
            <List spacing="sm" size="sm">
              <List.Item>Create & edit menus</List.Item>
              <List.Item>Upload product photos</List.Item>
              <List.Item>Update prices anytime</List.Item>
              <List.Item>Manage stock & availability</List.Item>
            </List>
            {Array.from({ length: 4 }).map((_, i) => (
              <Divider key={i} my="md" variant="dashed" />
            ))}
          </Card>
          <Card className={classes.bill_card4}>
            <Text size="lg" fw={600}>
              Personalized Experience
            </Text>
            <Divider my="md" variant="dashed" size="sm" />
            <Text size="sm">
              Enjoy a personalized bakery journey with tailored suggestions.
            </Text>
            <Divider my="md" variant="dashed" />
            <Text size="xs" c="dimmed" ta="center">
              THANK YOU FOR YOUR SUPPORT!
            </Text>
            <Divider my="md" variant="dashed" />
          </Card>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default FeatureSection;
