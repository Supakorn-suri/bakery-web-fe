"use client";

import { Modal, Button, TextInput, Flex } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { updateMemberProfile } from "../apis/memberProfile";
import { MemberFormData, memberSchema } from "../schemas/profileSchemas";
import { queryClient } from "@/lib/queryClient";
import { MessageResponse } from "@/features/auth/types/auth";

interface UpdateMemberModalProps {
  opened: boolean;
  close: () => void;
  defaultData: MemberFormData;
}

export const UpdateMemberModal = ({
  opened,
  close,
  defaultData,
}: UpdateMemberModalProps) => {
  const { mutate: memberMutation, isPending } = useMutation({
    mutationFn: updateMemberProfile,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      first_name: defaultData?.first_name || "",
      last_name: defaultData?.last_name || "",
      email: defaultData?.email || "",
    },
  });

  const onSubmit = (data: MemberFormData) => {
    memberMutation(data, {
      onSuccess: (response: MessageResponse) => {
        notifications.show({
          title: response.message || "Updated successfully!",
          message: `Your profile has been updated!`,
          color: "green",
        });
        queryClient.invalidateQueries({
          queryKey: ["member"],
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
