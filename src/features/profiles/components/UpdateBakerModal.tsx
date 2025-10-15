"use client";

import { Modal, Button, TextInput, Flex } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { BakerFormData, bakerSchema } from "../schemas/profileSchemas";
import { queryClient } from "@/lib/queryClient";
import { updateBakerProfile } from "../apis/bakerProfile";
import { MessageResponse } from "@/features/auth/types/auth";

interface UpdateBakerModalProps {
  opened: boolean;
  close: () => void;
  defaultData: BakerFormData;
}

export const UpdateBakerModal = ({
  opened,
  close,
  defaultData,
}: UpdateBakerModalProps) => {
  const { mutate: bakerMutation, isPending } = useMutation({
    mutationFn: updateBakerProfile,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BakerFormData>({
    resolver: zodResolver(bakerSchema),
    defaultValues: {
      first_name: defaultData?.first_name || "",
      last_name: defaultData?.last_name || "",
      email: defaultData?.email || "",
      bakery_name: defaultData?.bakery_name || "",
      phone_number: defaultData?.phone_number || "",
    },
  });

  const onSubmit = (data: BakerFormData) => {
    bakerMutation(data, {
      onSuccess: (response: MessageResponse) => {
        notifications.show({
          title: response.message || "Updated successfully!",
          message: `Your profile has been updated!`,
          color: "green",
        });
        queryClient.invalidateQueries({
          queryKey: ["baker"],
        });
        close();
      },
      onError: (error: any) => {
        notifications.show({
          title: "Update Failed",
          message: error.response?.data?.message || "Please try again",
          color: "red",
        });
      },
    });
  };

  return (
    <Modal opened={opened} onClose={close} title="Update Profile" centered>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={16}>
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
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<IconAt size={16} />}
            label="Your email"
            placeholder="Your email"
            {...register("email")}
            error={errors.email?.message}
          />
          <TextInput
            label="Bakery Name"
            placeholder="Your bakery name"
            {...register("bakery_name")}
            error={errors.bakery_name?.message}
          />
          <TextInput
            label="Phone Number"
            placeholder="Your phone number"
            {...register("phone_number")}
            error={errors.phone_number?.message}
          />
          <Button
            type="submit"
            mt={16}
            radius="md"
            fullWidth
            loading={isPending}
          >
            Confirm
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
