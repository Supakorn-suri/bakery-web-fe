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
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { register as registerApi } from "../apis/register";
import { RegisterFormData, registerSchema } from "../schemas/authSchemas";
import { RegisterResponse } from "../types/auth";

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
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: "member",
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
