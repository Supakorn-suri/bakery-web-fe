"use client";

import React, { useState } from "react";
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
  Pagination,
  TextInput,
  Loader,
} from "@mantine/core";
import { IconEdit, IconTrash, IconPlus, IconSearch } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";

import { useDisclosure } from "@mantine/hooks";

import UpdateProductModal from "@/features/products/components/UpdateProductModal";
import CreateProductModal from "@/features/products/components/CreateProductModal";
import { getProductsByBaker } from "@/features/products/apis/product";
import { ProductResponse } from "@/features/products/types/product";
import { DeleteProductModal } from "@/features/products/components/DeleteProductModal";

const limit = 10;
const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return "";
  if (imagePath.startsWith("/uploads")) {
    const imgUrl = `http://localhost:8080${imagePath}`;
    return imgUrl;
  }
  return imagePath;
};

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const [
    openedUpdateModal,
    { open: openUpdateModal, close: closeUpdateModal },
  ] = useDisclosure(false);
  const [
    openedCreateModal,
    { open: openCreateModal, close: closeCreateModal },
  ] = useDisclosure(false);
  const [
    openedDeleteModal,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);

  const {
    data: productsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["baker-products", page, search],
    queryFn: () =>
      getProductsByBaker({
        page,
        limit,
        search: search || undefined,
      }),
    staleTime: 1000 * 60 * 5, // 5 min
    refetchOnWindowFocus: false,
  });

  const products = productsData?.data || [];
  const totalProducts = productsData?.total || 0;
  const totalPages = Math.ceil(totalProducts / limit);
  const message = `Showing ${limit * (page - 1) + 1} - ${Math.min(
    totalProducts,
    limit * page
  )} of ${totalProducts}`;

  const handleEditClick = (productId: number) => {
    setSelectedProductId(productId);
    openUpdateModal();
  };

  const handleDeleteClick = (productId: number) => {
    setSelectedProductId(productId);
    openDeleteModal();
  };

  const rows = products.map((product: ProductResponse) => (
    <Table.Tr key={`${product.id}-${product.name}`}>
      <Table.Td>
        <Group>
          <Image
            src={getImageUrl(product.image)}
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
      <Table.Td>{product.cook_time}</Table.Td>
      <Table.Td>{product.rating}</Table.Td>
      <Table.Td>
        <Group gap={16}>
          <Tooltip label="Edit">
            <ActionIcon
              variant="light"
              color="blue"
              onClick={() => handleEditClick(product.id)}
            >
              <IconEdit size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Delete">
            <ActionIcon
              variant="light"
              color="red"
              onClick={() => handleDeleteClick(product.id)}
            >
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

      <TextInput
        placeholder="Search products by name..."
        leftSection={<IconSearch size={18} />}
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
          setPage(1); // Reset to page 1 on search
        }}
        mb={20}
      />

      {isLoading ? (
        <Group justify="center" py={40}>
          <Loader />
        </Group>
      ) : (
        <>
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
          <Group justify="flex-end" mt={16}>
            <Text size="sm">{message}</Text>
            <Pagination
              total={totalPages}
              value={page}
              onChange={setPage}
              withPages={false}
            />
          </Group>
        </>
      )}

      <UpdateProductModal
        opened={openedUpdateModal}
        onClose={closeUpdateModal}
        productId={selectedProductId}
      />
      <CreateProductModal
        opened={openedCreateModal}
        onClose={closeCreateModal}
      />
      <DeleteProductModal
        productId={selectedProductId}
        opened={openedDeleteModal}
        onClose={closeDeleteModal}
      />
    </Paper>
  );
};

export default ProductPage;
