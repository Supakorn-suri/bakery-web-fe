"use client";

import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  Group,
  Modal,
  Flex,
  ModalProps,
} from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";

import { UploadFile } from "../Input/UploadFile";

const CreateProductModal = ({ opened, onClose, ...rest }: ModalProps) => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [cookTime, setCookTime] = useState<string>("");
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const handleDropFile = (droppedFiles: FileWithPath[]) => {
    console.log(droppedFiles);
    setFiles(droppedFiles);
  };

  const handleSubmit = () => {
    const newProduct = {
      name: productName,
      price,
      cookTime,
      image: files[0],
    };
    console.log("New product:", newProduct);
    close();
  };
  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={onClose}
      title="Create Product"
      {...rest}
    >
      <Flex direction="column" gap={16}>
        <TextInput
          label="Product Name"
          placeholder="e.g. Croissant"
          value={productName}
          onChange={(e: any) => setProductName(e.currentTarget.value)}
        />
        <UploadFile
          name="file"
          label="Upload Product Image"
          multiple={false}
          onDrop={handleDropFile}
          accept={["image/png", "image/jpeg"]}
          maxSize={5 * 1024 ** 2}
          files={files}
          onClear={() => setFiles([])}
        />
        <NumberInput
          hideControls
          label="Price (THB)"
          placeholder="e.g. 150"
          value={price}
          onChange={setPrice}
          min={0}
        />
        <TextInput
          label="Cook Time"
          placeholder="e.g. 30 min"
          value={cookTime}
          onChange={(e: any) => setCookTime(e.currentTarget.value)}
        />
        <Group justify="flex-end" mt="md">
          <Button radius="md" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button radius="md" onClick={handleSubmit}>
            Confirm
          </Button>
        </Group>
      </Flex>
    </Modal>
  );
};

export default CreateProductModal;
