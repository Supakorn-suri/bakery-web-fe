"use client";

import { useState } from "react";
import { Flex, Stepper, Button, ActionIcon, Text, Anchor } from "@mantine/core";
import {
  IconUser,
  IconBuildingStore,
  IconUserScan,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileWithPath } from "@mantine/dropzone";
import { useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

import { register as registerApi } from "../apis/register";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2BakeryInfo from "./Step2BakeryInfo";
import Step3Verification from "./Step3Verification";
import { RegisterFormData, registerSchema } from "../schemas/authSchemas";
import { MessageResponse } from "../types/auth";

interface BakerRegisterFormProps {
  onLoginClick: () => void;
}

export default function BakerRegisterForm({
  onLoginClick,
}: BakerRegisterFormProps) {
  const [active, setActive] = useState(0);
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "baker" },
    shouldUnregister: false,
  });

  const { mutate: registerMutation, isPending } = useMutation({
    mutationFn: registerApi,
  });

  const nextStep = () => setActive((c) => (c < 2 ? c + 1 : c));
  const prevStep = () => setActive((c) => (c > 0 ? c - 1 : c));

  const handleDropFile = (f: FileWithPath[]) => setFiles(f);

  const handleNextStep = async () => {
    let fields: (keyof RegisterFormData)[] = [];
    if (active === 0)
      fields = [
        "first_name",
        "last_name",
        "email",
        "password",
        "confirm_password",
      ];
    else if (active === 1) fields = ["bakery_name", "phone_number"];
    else if (active === 2) fields = ["bank_name", "account_number"];

    const valid = await trigger(fields);
    if (valid) nextStep();
  };

  const onSubmit = (data: RegisterFormData) => {
    registerMutation(data, {
      onSuccess: (response: MessageResponse) => {
        notifications.show({
          title: response.message || "Registered successfully!",
          message: `Welcome to our bakery! Please login to continue`,
          color: "green",
        });
        reset();
        setFiles([]);
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
    <Flex direction="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper color="#BA653A" size="md" iconSize={32} active={active}>
          <Stepper.Step icon={<IconUser size={18} />}>
            <Step1PersonalInfo register={register} errors={errors} />
          </Stepper.Step>
          <Stepper.Step icon={<IconBuildingStore size={18} />}>
            <Step2BakeryInfo register={register} errors={errors} />
          </Stepper.Step>
          <Stepper.Step icon={<IconUserScan size={18} />}>
            <Step3Verification
              register={register}
              errors={errors}
              files={files}
              onDropFile={handleDropFile}
            />
          </Stepper.Step>
        </Stepper>

        <Flex direction="row" justify="space-between" mt="xl" align="center">
          <Text size="sm" ta="center" mt={24}>
            Have an account?
            <Anchor pl={8} underline="always" onClick={onLoginClick}>
              Login
            </Anchor>
          </Text>

          <Flex direction="row" gap={16} align="center">
            <ActionIcon
              size="lg"
              variant="light"
              onClick={prevStep}
              radius="md"
            >
              <IconChevronLeft
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
            {active === 2 ? (
              <Button
                type="submit"
                radius="md"
                size="sm"
                h={34}
                loading={isPending}
              >
                Apply
              </Button>
            ) : (
              <ActionIcon
                size="lg"
                variant="light"
                onClick={handleNextStep}
                radius="md"
              >
                <IconChevronRight
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            )}
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
}
