"use client";

import React, { useState, useEffect } from "react";
import {
  TextInput,
  Button,
  Group,
  Modal,
  Flex,
  ModalProps,
  Loader,
  Alert,
} from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { notifications } from "@mantine/notifications";
import { IconAlertCircle } from "@tabler/icons-react";

import { MessageResponse } from "@/features/auth/types/auth";
import { queryClient } from "@/lib/queryClient";

import { UploadFile } from "../../../components/Inputs/UploadFile";
import { updateProduct, getProductById } from "../apis/product";
import {
  UpdateProductFormData,
  updateProductSchema,
} from "../schemas/productSchemas";
import { UpdateProductRequest } from "../types/product";

interface UpdateProductModalProps extends ModalProps {
  productId: number | null;
  opened: boolean;
  onClose: () => void;
}

const UpdateProductModal = ({
  productId,
  opened,
  onClose,
  ...rest
}: UpdateProductModalProps) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [imgPreview, setImgPreview] = useState<string>();

  const { mutate: updateProductMutation, isPending } = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number;
      payload: UpdateProductRequest;
    }) => updateProduct(id, payload),
  });

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product-by-id", productId],
    queryFn: () => getProductById(Number(productId)),
    enabled: opened && !!productId,
    refetchOnWindowFocus: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm<UpdateProductFormData>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      rating: 0,
    },
  });

  // Set form values when product data is loaded
  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("price", product.price?.toString());
      setValue("cook_time", product.cook_time);
      setValue("rating", product.rating || 0);
      // setValue("image", getImageUrl(product.image));
      setImgPreview(product.image);
    }
  }, [product, setValue]);

  const handleDropFile = (droppedFiles: FileWithPath[]) => {
    setFiles(droppedFiles);

    // Set value for RHF
    if (droppedFiles.length > 0) {
      setValue("image", droppedFiles[0], { shouldValidate: true });
    } else {
      setValue("image", undefined, { shouldValidate: true });
    }
  };

  const onSubmit = (data: UpdateProductFormData) => {
    if (!productId) return;

    const payloadData = {
      ...data,
      price: Number(data.price),
    };

    updateProductMutation(
      { id: Number(productId), payload: payloadData },
      {
        onSuccess: (response: MessageResponse) => {
          notifications.show({
            title: response.message || "Update Product successfully!",
            message:
              "Your product has been updated. The table will update shortly.",
            color: "green",
          });
          // reset form
          reset();
          setFiles([]);
          // close modal
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["baker-products"],
          });
        },
        onError: (error: any) => {
          notifications.show({
            title: "Update Product Failed",
            message: error.response?.data?.message || "Please try again",
            color: "red",
          });
        },
      }
    );
  };

  const handleClose = () => {
    if (isDirty) {
      reset();
      setFiles([]);
    }
    onClose();
  };

  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={handleClose}
      title="Update Product"
      {...rest}
    >
      {isLoading ? (
        <Flex justify="center" align="center" py={40}>
          <Loader />
        </Flex>
      ) : error ? (
        <Alert icon={<IconAlertCircle size={16} />} color="red" title="Error">
          Failed to load product details
        </Alert>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap={16}>
            <TextInput
              label="Product Name"
              placeholder="e.g. Croissant"
              {...register("name")}
              error={errors.name?.message}
            />
            <UploadFile
              name="file"
              label="Upload Product Image"
              multiple={false}
              displayImage={imgPreview}
              onDrop={handleDropFile}
              accept={["image/png", "image/jpeg"]}
              maxSize={5 * 1024 ** 2}
              files={files}
              onClear={() => {
                setFiles([]);
                setImgPreview("");
              }}
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
              <Button radius="md" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" radius="md" loading={isPending}>
                Confirm
              </Button>
            </Group>
          </Flex>
        </form>
      )}
    </Modal>
  );
};

export default UpdateProductModal;
