"use client";

import { useRouter } from "next/navigation";
import {
  Flex,
  TextInput,
  PasswordInput,
  Title,
  Text,
  Anchor,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

interface MemberRegisterFormProps {
  onLoginClick: () => void;
}

const MemberRegisterForm = ({ onLoginClick }: MemberRegisterFormProps) => {
  const router = useRouter();
  const icon = <IconAt size={16} />;

  return (
    <Flex direction="column">
      <Flex direction="column" gap={16} mt={16}>
        <Title order={4}>Step 1: Personal information</Title>
        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          <TextInput label="First Name" placeholder="Your first name" />
          <TextInput label="Last Name" placeholder="Your last name" />
        </SimpleGrid>
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Your email"
          placeholder="Your email"
        />
        <PasswordInput label="Password" placeholder="Your password" />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
        />
      </Flex>

      <Flex direction="row" justify="space-between" mt="xl" align="center">
        <Text size="sm" ta="center" mt={24}>
          Have an account?
          <Anchor pl={8} underline="always" onClick={onLoginClick}>
            Login
          </Anchor>
        </Text>
        <Button radius="md" onClick={() => router.replace("/bakery")}>
          Apply
        </Button>
      </Flex>
    </Flex>
  );
};

export default MemberRegisterForm;
