"use client";
import { useRouter } from "next/navigation";

import {
  Container,
  Flex,
  Group,
  Text,
  Image,
  Divider,
  Badge,
  ActionIcon,
  Button,
} from "@mantine/core";
import {
  IconClockHour3,
  IconChefHat,
  IconPlus,
  IconStarFilled,
  IconChevronLeft,
} from "@tabler/icons-react";

const ProductDetail = ({ bakeryId }: { bakeryId: string }) => {
  const router = useRouter();
  return (
    <Container mt={60}>
      <Button
        size="xs"
        radius="md"
        leftSection={<IconChevronLeft size={16} />}
        variant="transparent"
        onClick={() => router.replace("/")}
      >
        Back
      </Button>
      <Flex>
        <Image
          h={350}
          maw={350}
          fit="cover"
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Flex
          direction="column"
          justify="space-between"
          p={12}
          h="100%"
          w="100%"
        >
          <Flex direction="column">
            <Text fw={500}>Bakery Name</Text>
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconChefHat size={12} />}
              my={4}
            >
              Baker Name
            </Badge>
            <Group gap={4}>
              <IconClockHour3 color="#707070" size={16} />
              <Text size="sm" c="#707070">
                50 min
              </Text>
              <Divider size="xs" orientation="vertical" my={2} mx={4} />
              <IconStarFilled color="#FFC862" size={16} />
              <Text size="sm" c="#707070">
                4.5
              </Text>
            </Group>
          </Flex>
          <Group justify="space-between">
            <Text fw={600} c="primary">
              ฿ 300
            </Text>
            <ActionIcon
              radius="xl"
              //   onClick={() => router.push(`/bakery/${item.id}`)}
            >
              <IconPlus size={18} />
            </ActionIcon>
          </Group>
        </Flex>
        {/* Serving size / portion info → e.g. “1 piece (120g)”. */}
      </Flex>
      <Text>Baker info</Text>
      <Text>Review breakdown</Text>
      <Text>You may also like</Text>
    </Container>
  );
};

export default ProductDetail;
