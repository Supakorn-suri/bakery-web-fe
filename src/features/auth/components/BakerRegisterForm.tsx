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
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { register as registerApi } from "../apis/register";
import { RegisterFormData, registerSchema } from "../schemas/authSchemas";
import { RegisterResponse } from "../types/auth";

interface BakerRegisterFormProps {
  onLoginClick: () => void;
}

const BakerRegisterForm = ({ onLoginClick }: BakerRegisterFormProps) => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: registerApi,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "baker",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation(data, {
      onSuccess: (response: RegisterResponse) => {
        notifications.show({
          title: response.message,
          message: `Welcome to our bakery!, Please login to continue`,
          color: "green",
          position: "top-center",
        });
        // reset form
        reset();
        // open login modal
        onLoginClick();
      },
      onError: (error: any) => {
        notifications.show({
          title: "Register Failed",
          message: error.response?.data?.message || "Please try again",
          color: "red",
          position: "top-center",
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <TextInput
                  label="First Name"
                  placeholder="Your first name"
                  {...register("firstName")}
                  error={errors.firstName?.message}
                />
                <TextInput
                  label="Last Name"
                  placeholder="Your last name"
                  {...register("lastName")}
                  error={errors.lastName?.message}
                />
              </SimpleGrid>
              <TextInput
                leftSectionPointerEvents="none"
                leftSection={<IconAt size={16} />}
                label="Your email"
                placeholder="Your email"
                {...register("email")}
                error={errors.email?.message}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                {...register("password")}
                error={errors.password?.message}
              />
              <PasswordInput
                label="Confirm password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
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
              <TextInput
                label="Account Number"
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
        </Stepper>

        <Flex direction="row" justify="space-between" mt="xl" align="center">
          <Text size="sm" ta="center" mt={24}>
            Have an account?
            <Anchor pl={8} underline="always" onClick={onLoginClick}>
              Login
            </Anchor>
          </Text>
          {active === 2 ? (
            <Button type="submit" radius="md" loading={isPending}>
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
    </form>
  );
};

export default BakerRegisterForm;
