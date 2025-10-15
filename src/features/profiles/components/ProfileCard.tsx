import React from "react";
import {
  Flex,
  Text,
  Card,
  Avatar,
  Stack,
  Group,
  Divider,
  CardProps,
  ActionIcon,
  Space,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

interface ProfileCardProps extends CardProps {
  firstName: string;
  lastName: string;
  email: string;
  onEdit?: () => void;
  disableEdit?: boolean;
  phoneNumber?: string;
  bakeryName?: string;
}

export const ProfileCard = ({
  firstName,
  lastName,
  email,
  onEdit,
  disableEdit,
  phoneNumber,
  bakeryName,
  ...rest
}: ProfileCardProps) => {
  return (
    <Card shadow="sm" radius="md" p={24} w="100%" withBorder {...rest}>
      <Card.Section>
        <Group justify="space-between">
          <Space w="xs" />
          <ActionIcon variant="subtle" onClick={onEdit} disabled={disableEdit}>
            <IconEdit size={16} />
          </ActionIcon>
        </Group>
      </Card.Section>

      <Flex direction="column" align="center" gap={16}>
        <Avatar size={100} name={firstName} />

        <Stack w="100%" mt={16} gap={12}>
          <Group justify="space-between">
            <Text fw={500} c="dimmed">
              First Name
            </Text>
            <Text fw={500}>{firstName || "-"}</Text>
          </Group>
          <Divider />

          <Group justify="space-between">
            <Text fw={500} c="dimmed">
              Last Name
            </Text>
            <Text fw={500}>{lastName || "-"}</Text>
          </Group>
          <Divider />

          <Group justify="space-between">
            <Text fw={500} c="dimmed">
              Email
            </Text>
            <Text fw={500}>{email || "-"}</Text>
          </Group>
          <Divider />
          {bakeryName && (
            <>
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Bakery Name
                </Text>
                <Text fw={500}>{bakeryName ?? "-"}</Text>
              </Group>
              <Divider />
            </>
          )}
          {phoneNumber && (
            <>
              <Group justify="space-between">
                <Text fw={500} c="dimmed">
                  Phone Number
                </Text>
                <Text fw={500}>{phoneNumber ?? "-"}</Text>
              </Group>
              <Divider />
            </>
          )}
        </Stack>
      </Flex>
    </Card>
  );
};
