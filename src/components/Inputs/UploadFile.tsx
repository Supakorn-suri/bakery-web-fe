"use client";
import React, { useMemo } from "react";
import { Text, Card, ActionIcon, Group, Stack, Image } from "@mantine/core";
import { IconCircleX, IconPhoto } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";

interface UploadFileProps extends DropzoneProps {
  label?: string;
  files: FileWithPath[];
  onClear: () => void;
  displayImage?: string;
}

export const getImageUrl = (imagePath: string): string => {
  if (!imagePath) return "";
  if (imagePath.startsWith("/uploads")) {
    const imgUrl = `http://localhost:8080${imagePath}`;
    return imgUrl;
  }
  return imagePath;
};

export const UploadFile: React.FC<UploadFileProps> = ({
  label = "Upload File",
  files,
  onClear,
  loading,
  displayImage,
  ...rest
}) => {
  // Process displayImage URL or create object URL for files
  const imageUrl = useMemo(() => {
    if (displayImage) {
      return getImageUrl(displayImage);
    }
    if (files?.length > 0 && files[0].type.startsWith("image/")) {
      return URL.createObjectURL(files[0]);
    }
    return null;
  }, [displayImage, files]);
  // console.log("imageUrl", imageUrl);
  return (
    <Stack gap={6} w="100%">
      <Text size="sm">{label}</Text>
      {(files?.length === 0 || loading) && !displayImage ? (
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
          <Group gap={8} w="100%" wrap="nowrap">
            <Group gap={8} wrap="nowrap">
              <Image
                src={imageUrl || ""}
                h={80}
                w={80}
                fit="cover"
                style={{ borderRadius: 6 }}
              />
              <Text size="sm" lineClamp={2}>
                {files[0]?.name || displayImage|| "file_name"}
              </Text>
            </Group>

            <ActionIcon onClick={onClear} variant="subtle" color="red">
              <IconCircleX size={18} />
            </ActionIcon>
          </Group>
        </Card>
      )}
    </Stack>
  );
};
