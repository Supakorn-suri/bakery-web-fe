"use client";

import React from "react";
import { Text, Button, Group, Modal, Flex, ModalProps } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { deleteProduct } from "@/features/products/apis/product";
import { SuccessResponse } from '../types/product';

interface DeleteProductModalProps extends ModalProps {
  productId: number | null;
  opened: boolean;
  onClose: () => void;
}

export const DeleteProductModal = ({
  productId,
  opened,
  onClose,
  ...rest
}: DeleteProductModalProps) => {
  const queryClient = useQueryClient();
  const { mutate: deleteProductMutation, isPending } = useMutation({
    mutationFn: deleteProduct,
  });

  const handleConfirmDelete = () => {
    if (!productId) return;

    deleteProductMutation(productId, {
      onSuccess: (response: SuccessResponse) => {
        notifications.show({
          title: response.message || "Product deleted successfully!",
          message: "The product has been removed from your list.",
          color: "green",
        });
        // Refetch products
        queryClient.invalidateQueries({ queryKey: ["baker-products"] });
        onClose();
      },
      onError: (error: any) => {
        notifications.show({
          title: "Delete Failed",
          message: error.response?.data?.message || "Failed to delete product",
          color: "red",
        });
      },
    });
  };

  return (
    <Modal
      size="md"
      opened={opened}
      onClose={onClose}
      title="Delete Product"
      {...rest}
    >
      <Flex direction="column" gap={8}>
        <Text size="sm">
          Are you sure you want to delete this product? This action is permanent
          and cannot be undone.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button radius="md" variant="subtle" color="green" onClick={onClose}>
            Cancel
          </Button>
          <Button
            radius="md"
            color="red"
            loading={isPending}
            onClick={handleConfirmDelete}
          >
            Delete product
          </Button>
        </Group>
      </Flex>
    </Modal>
  );
};
