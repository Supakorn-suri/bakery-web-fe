"use client";

import { useRouter } from "next/navigation";
import {
  Modal,
  Button,
  PasswordInput,
  TextInput,
  Flex,
  Text,
  Anchor,
  Checkbox,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

const LoginModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const router = useRouter();

  const icon = <IconAt size={16} />;
  return (
    <Modal opened={opened} onClose={close} title="Login" centered>
      <Flex direction="column" gap={16}>
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Email"
          placeholder="Your email"
        />
        <PasswordInput label="Password" />
        <Checkbox defaultChecked label="Remember me" />
        <Button fullWidth onClick={() => router.replace("/bakery")}>
          Login
        </Button>
        <Text size="sm" ta="center">
          Don't have an account?
          <Anchor pl={8} href="/register" target="_blank" underline="always">
            Sign up
          </Anchor>
        </Text>
      </Flex>
    </Modal>
  );
};

export default LoginModal;
