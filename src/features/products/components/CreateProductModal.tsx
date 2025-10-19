"use client";

import React, { useState } from "react";
import {
  TextInput,
  Button,
  Group,
  Modal,
  Flex,
  ModalProps,
} from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";

import { queryClient } from "@/lib/queryClient";

import { UploadFile } from "../../../components/Inputs/UploadFile";
import { createProduct } from "../apis/product";
import {
  CreateProductFormData,
  createProductSchema,
} from "../schemas/productSchemas";
import { SuccessProductResponse } from "../types/product";

const CreateProductModal = ({ opened, onClose, ...rest }: ModalProps) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const { mutate: createProductMutation, isPending } = useMutation({
    mutationFn: createProduct,
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      rating: 0,
    },
  });

  const handleDropFile = (droppedFiles: FileWithPath[]) => {
    setFiles(droppedFiles);

    // Set value for RHF
    if (droppedFiles.length > 0) {
      setValue("image", droppedFiles[0], { shouldValidate: true });
    } else {
      setValue("image", undefined, { shouldValidate: true });
    }
  };

  const onSubmit = (data: CreateProductFormData) => {
    // Convert price to number
    const payload = {
      ...data,
      price: Number(data.price),
    };
    createProductMutation(payload, {
      onSuccess: (response: SuccessProductResponse) => {
        notifications.show({
          title: response.message || "Create Product successfully!",
          message:
            "Your product has been added. The table will update shortly.",
          color: "green",
        });
        // reset form
        reset();
        // Refetch products
        queryClient.invalidateQueries({ queryKey: ["baker-products"] });
        setFiles([]);
        // close modal
        onClose();
      },
      onError: (error: any) => {
        notifications.show({
          title: "Create Product Failed",
          message: error.response?.data?.message || "Please try again",
          color: "red",
        });
      },
    });
  };

  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={onClose}
      title="Create Product"
      {...rest}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap={16}>
          <TextInput
            label="Product Name"
            placeholder="e.g. Croissant"
            {...register("name")}
            error={errors.name?.message}
          />
          <UploadFile
            label="Upload Product Image"
            multiple={false}
            onDrop={handleDropFile}
            accept={["image/png", "image/jpeg"]}
            maxSize={5 * 1024 ** 2}
            files={files}
            onClear={() => handleDropFile([])}
          />
          <TextInput
            label="Price (THB)"
            placeholder="e.g. 150"
            {...register("price")}
            error={errors.price?.message}
          />
          <TextInput
            label="Cook Time"
            placeholder="e.g. 30 min"
            {...register("cook_time")}
            error={errors.cook_time?.message}
          />
          <Group justify="flex-end" mt="md">
            <Button radius="md" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" radius="md" loading={isPending}>
              Confirm
            </Button>
          </Group>
        </Flex>
      </form>
    </Modal>
  );
};

export default CreateProductModal;
