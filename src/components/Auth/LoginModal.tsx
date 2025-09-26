import {
  Modal,
  Button,
  PasswordInput,
  TextInput,
  Group,
  Flex,
  Text,
  Anchor,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

const LoginModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const icon = <IconAt size={16} />;
  return (
    <Modal opened={opened} onClose={close} title="Login" centered>
      <Flex direction="column">
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Email"
          placeholder="Your email"
        />
        <PasswordInput label="Password" />
        <Group justify="space-between">
          <Text>
            Don't have an account?
            <Anchor pl={4} href="/register" target="_blank">
              Register
            </Anchor>
          </Text>
          <Button>Login</Button>
        </Group>
      </Flex>
    </Modal>
  );
};

export default LoginModal;
