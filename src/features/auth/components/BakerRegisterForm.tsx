"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Flex,
  Stepper,
  TextInput,
  PasswordInput,
  Title,
  Text,
  Anchor,
  ActionIcon,
  Button,
  SimpleGrid,
  Textarea,
  Group,
  Stack,
  Checkbox,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  IconAt,
  IconUser,
  IconUserScan,
  IconBuildingStore,
  IconPhoto,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

interface BakerRegisterFormProps {
  onLoginClick: () => void;
}

const BakerRegisterForm = ({ onLoginClick }: BakerRegisterFormProps) => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const icon = <IconAt size={16} />;

  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Flex direction="column">
      <Stepper
        color="#BA653A"
        size="md"
        iconSize={32}
        active={active}
        onStepClick={setActive}
      >
        <Stepper.Step icon={<IconUser size={18} />}>
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
        </Stepper.Step>

        <Stepper.Step icon={<IconBuildingStore size={18} />}>
          <Flex direction="column" gap={16} mt={16}>
            <Title order={4}>Step 2: Bakery information</Title>
            <TextInput label="Bakery Name" placeholder="Your bakery name" />
            <TextInput label="Phone Number" placeholder="Your phone number" />
            <Textarea label="Bakery Address" placeholder="Bakery address" />
          </Flex>
        </Stepper.Step>

        <Stepper.Step icon={<IconUserScan size={18} />}>
          <Flex direction="column" gap={16} mt={16}>
            <Title order={4}>Step 3: Verification & Agreement</Title>
            <TextInput label="Bank Name" placeholder="Your bank account" />
            <TextInput label="Account Number" placeholder="Your bank account" />
            <Text>Please Upload your bank photo</Text>
            <Dropzone
              onDrop={() => console.log("accepted files")}
              onReject={() => console.log("rejected files")}
              maxSize={5 * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
            >
              <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: "none" }}
              >
                <Dropzone.Idle>
                  <IconPhoto
                    size={52}
                    color="var(--mantine-color-dimmed)"
                    stroke={1.5}
                  />
                </Dropzone.Idle>

                <Stack>
                  <Text size="xl" inline>
                    Drag images here or click to select files
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Attach as many files as you like, each file should not
                    exceed 5mb
                  </Text>
                </Stack>
              </Group>
            </Dropzone>
            <Checkbox defaultChecked label="Agree to Terms & Privacy Policy" />
          </Flex>
        </Stepper.Step>
      </Stepper>

      <Flex direction="row" justify="space-between" mt="xl" align="center">
        <Text size="sm" ta="center" mt={24}>
          Have an account?
          <Anchor pl={8} underline="always" onClick={onLoginClick}>
            Login
          </Anchor>
        </Text>
        {active === 2 ? (
          <Button radius="md" onClick={() => router.replace("/bakery")}>
            Apply
          </Button>
        ) : (
          <Flex direction="row" gap={16}>
            <ActionIcon variant="light" onClick={prevStep}>
              <IconChevronLeft
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="light" onClick={nextStep}>
              <IconChevronRight
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default BakerRegisterForm;
