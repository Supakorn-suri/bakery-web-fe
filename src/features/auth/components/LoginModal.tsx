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
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { LoginFormData, loginSchema } from "../schemas/authSchemas";
import { LoginResponse } from "../types/auth";
import { login } from "../apis/login";
import { useAuthStore } from "../store/authStore";

const LoginModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const router = useRouter();
  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: login,
  });
  const { setUser } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation(data, {
      onSuccess: (response: LoginResponse) => {
        setUser(response.user);
        notifications.show({
          title: response.message,
          message: `Welcome back!`,
          color: "green",
        });
        close();

        // Redirect based on role
        if (response.user.role === "baker") {
          router.push("/dashboard");
        } else {
          router.push("/bakery");
        }
      },
      onError: (error: any) => {
        notifications.show({
          title: "Login Failed",
          message: error.response?.data?.message || "Invalid credentials",
          color: "red",
        });
      },
    });
  };

  return (
    <Modal opened={opened} onClose={close} title="Login" centered>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={16}>
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<IconAt size={16} />}
            label="Email"
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
          <Checkbox defaultChecked label="Remember me" />
          <Button type="submit" radius="md" fullWidth loading={isPending}>
            Login
          </Button>
          <Text size="sm" ta="center">
            Don't have an account?
            <Anchor pl={8} href="/register" underline="always">
              Sign up
            </Anchor>
          </Text>
        </Flex>
      </form>
    </Modal>
  );
};

export default LoginModal;
