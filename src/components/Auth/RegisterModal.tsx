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

const RegisterModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const icon = <IconAt size={16} />;
  return (
    <Modal opened={opened} onClose={close} title="Register" centered>
      <Flex direction="column">
        <Group>
          <TextInput label="First Name" placeholder="Your first name" />
          <TextInput label="Last Name" placeholder="Your last name" />
        </Group>
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Your email"
          placeholder="Your email"
        />
        <PasswordInput label="Password" />
        <PasswordInput label="Confirm password" />
        <Group justify="space-between">
          <Text>
            Have an account?
            <Anchor pl={4} href="/login" target="_blank">
              Login
            </Anchor>
          </Text>
          <Button>Register</Button>
        </Group>
      </Flex>
    </Modal>
  );
};

export default RegisterModal;
