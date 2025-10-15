"use client";

import React from "react";
import {
  ActionIcon,
  Button,
  Group,
  Image,
  Paper,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconEdit, IconTrash, IconPlus } from "@tabler/icons-react";

import { modals } from "@mantine/modals";
import { useDisclosure } from "@mantine/hooks";

import { mockItems } from "@/components/sections/Recommend";
import { ProductProps } from "@/features/products/components/ProductCard";
import UpdateProductModal from "@/features/products/components/UpdateProductModal";
import CreateProductModal from "@/features/products/components/CreateProductModal";

const ProductPage = () => {
  const [
    openedUpdateModal,
    { open: openUpdateModal, close: closeUpdateModal },
  ] = useDisclosure(false);
  const [
    openedCreateModal,
    { open: openCreateModal, close: closeCreateModal },
  ] = useDisclosure(false);

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Delete Bakery",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this bakery? This action is permanent
          and cannot be undone.
        </Text>
      ),
      labels: { confirm: "Delete bakery", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  const rows = mockItems.map((product: ProductProps) => (
    <Table.Tr key={product.id}>
      <Table.Td>
        <Group>
          <Image
            src={product.image}
            alt={product.name}
            w={60}
            h={60}
            radius="md"
            fit="cover"
          />
        </Group>
      </Table.Td>
      <Table.Td>{product.name}</Table.Td>
      <Table.Td>฿{product.price}</Table.Td>
      <Table.Td>{product.cookTime}</Table.Td>
      <Table.Td>{product.rating}</Table.Td>
      <Table.Td>
        <Group gap={16}>
          <Tooltip label="Edit">
            <ActionIcon variant="light" color="blue" onClick={openUpdateModal}>
              <IconEdit size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete">
            <ActionIcon variant="light" color="red" onClick={openDeleteModal}>
              <IconTrash size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Paper w="100%" py={16} px={24}>
      <Group justify="space-between" mt={80} mb={24}>
        <Title order={3}>Product Management</Title>
        <Button
          leftSection={<IconPlus size={16} />}
          radius="md"
          onClick={openCreateModal}
        >
          Add New Product
        </Button>
      </Group>
      <Table
        highlightOnHover
        stickyHeader
        stickyHeaderOffset={60}
        verticalSpacing="xs"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product Image</Table.Th>
            <Table.Th>Product Name</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Cook Time</Table.Th>
            <Table.Th>Rating</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <UpdateProductModal
        opened={openedUpdateModal}
        onClose={closeUpdateModal}
      />
      <CreateProductModal
        opened={openedCreateModal}
        onClose={closeCreateModal}
      />
    </Paper>
  );
};

export default ProductPage;
