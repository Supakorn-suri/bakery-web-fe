"use client";
import React from "react";
import {
  Text,
  Card,
  ActionIcon,
  Group,
  Stack,
  Image,
} from "@mantine/core";
import { IconCircleX, IconPhoto } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";

interface UploadFileProps extends DropzoneProps {
  label?: string;
  files: FileWithPath[];
  onClear: () => void;
}

export const UploadFile: React.FC<UploadFileProps> = ({
  label = "Upload File",
  files,
  onClear,
  loading,
  ...rest
}) => {
  return (
    <Stack gap={6} w="100%">
      <Text size="sm">{label}</Text>
      {files?.length === 0 || loading ? (
        <Dropzone radius={8} loading={loading} {...rest}>
          <Dropzone.Idle>
            <Stack gap={8} align="center" py={8}>
              <IconPhoto
                size={32}
                color="var(--mantine-color-dimmed)"
                stroke={1.5}
              />
              <Text size="sm" color="dimmed">
                Select file or Drag & drop
              </Text>
            </Stack>
          </Dropzone.Idle>
        </Dropzone>
      ) : (
        <Card radius="md" withBorder w="100%" p={8}>
          {files?.map((file, index) => {
            const fileUrl = URL.createObjectURL(file);
            // console.log('files', file.type);
            return (
              <Group key={index} gap={8} w="100%" wrap="nowrap">
                {file.type.startsWith("image/") ? (
                  <Group gap={8} wrap="nowrap">
                    <Image
                      src={fileUrl}
                      h={80}
                      w={80}
                      fit="cover"
                      style={{ borderRadius: 6 }}
                    />
                    <Text size="sm" lineClamp={2}>
                      {file.name}
                      {file.name}
                    </Text>
                  </Group>
                ) : (
                  <Text c="red">
                    unsupported display for file type : {file.type}
                  </Text>
                )}
                <ActionIcon onClick={onClear} variant="subtle" color="red">
                  <IconCircleX size={18} />
                </ActionIcon>
              </Group>
            );
          })}
        </Card>
      )}
    </Stack>
  );
};
