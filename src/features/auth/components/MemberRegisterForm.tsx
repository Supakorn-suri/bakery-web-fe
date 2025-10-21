"use client";

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
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { register as registerApi } from "../apis/register";
import {
  MemberRegisterFormData,
  memberRegisterSchema,
} from "../schemas/authSchemas";
import { MessageResponse } from "../types/auth";

interface MemberRegisterFormProps {
  onLoginClick: () => void;
}

const MemberRegisterForm = ({ onLoginClick }: MemberRegisterFormProps) => {
  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: registerApi,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MemberRegisterFormData>({
    resolver: zodResolver(memberRegisterSchema),
    defaultValues: {
      role: "member",
    },
  });

  const onSubmit = (data: MemberRegisterFormData) => {
    registerMutation(data, {
      onSuccess: (response: MessageResponse) => {
        notifications.show({
          title: response.message || "Registered successfully!",
          message: `Welcome to our bakery!, Please login to continue`,
          color: "green",
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
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <Flex direction="column" gap={16} mt={16}>
          <Title order={4}>Step 1: Personal information</Title>
          <SimpleGrid cols={{ base: 1, xs: 2 }}>
            <TextInput
              label="First Name"
              placeholder="Your first name"
              {...register("first_name")}
              error={errors.first_name?.message}
            />
            <TextInput
              label="Last Name"
              placeholder="Your last name"
              {...register("last_name")}
              error={errors.last_name?.message}
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
            {...register("confirm_password")}
            error={errors.confirm_password?.message}
          />
        </Flex>

        <Flex direction="row" justify="space-between" mt="xl" align="center">
          <Text size="sm" ta="center" mt={24}>
            Have an account?
            <Anchor pl={8} underline="always" onClick={onLoginClick}>
              Login
            </Anchor>
          </Text>
          <Button type="submit" radius="md" loading={isPending}>
            Apply
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default MemberRegisterForm;
