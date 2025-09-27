"use client";

import { useState } from "react";
import {
  Container,
  Stepper,
  Button,
  Group,
  Flex,
  TextInput,
  PasswordInput,
  Text,
  Anchor,
  Card,
  Textarea,
  Checkbox,
  Stack,
} from "@mantine/core";
import {
  IconAt,
  IconUser,
  IconUserScan,
  IconBuildingStore,
  IconPhoto,
} from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

const RegisterPage = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const icon = <IconAt size={16} />;

  return (
    <Container fluid h="100dvh" bg="#FAF3E3">
      <Flex direction="column" h="100%" align="center" justify="center">
        <Card mih={450} miw={400} radius={24}>
          <Flex direction="column">
            <Stepper
              color="#FEE19B"
              size="md"
              iconSize={32}
              active={active}
              onStepClick={setActive}
            >
              <Stepper.Step icon={<IconUser size={18} />}>
                Step 1: Personal information
                <Flex direction="column" gap={16}>
                  <Group>
                    <TextInput
                      label="First Name"
                      placeholder="Your first name"
                    />
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
                    <Button>Register</Button>
                  </Group>
                </Flex>
              </Stepper.Step>
              <Stepper.Step icon={<IconBuildingStore size={18} />}>
                Step 2: Bakery information
                <Flex direction="column" gap={16}>
                  <TextInput
                    label="Bakery Name"
                    placeholder="Your bakery name"
                  />
                  <TextInput
                    label="Phone Number"
                    placeholder="Your phone number"
                  />
                  <Textarea label="Input Address" placeholder="Input address" />
                </Flex>
              </Stepper.Step>
              <Stepper.Step icon={<IconUserScan size={18} />}>
                Step 3: Verification & Agreement
                <Flex direction="column" gap={16}>
                  <TextInput
                    label="Bank Account"
                    placeholder="Your bank account"
                  />
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
                  <Checkbox
                    defaultChecked
                    label="Agree to Terms & Privacy Policy"
                  />
                </Flex>
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep}>Next step</Button>
            </Group>
          </Flex>
          <Text>
            Have an account?
            <Anchor pl={4} href="/login" target="_blank">
              Login
            </Anchor>
          </Text>
        </Card>
      </Flex>
    </Container>
  );
};

export default RegisterPage;
