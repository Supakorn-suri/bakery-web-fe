"use client";

import React, { useEffect } from "react";
import { Flex, Card, Title, Stack, Skeleton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { ProfileCard } from "@/features/profiles/components/ProfileCard";
import { getMemberProfile } from "@/features/profiles/apis/memberProfile";
import { UpdateMemberModal } from "@/features/profiles/components/UpdateMemberModal";
import { MemberProfileResponse } from "@/features/profiles/types/member";

const ProfilePage = () => {
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);

  // GET profile
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery<MemberProfileResponse>({
    queryKey: ["member"],
    queryFn: getMemberProfile,
    refetchOnWindowFocus: true,
    refetchOnMount: "always",
  });

  useEffect(() => {
    if (error) {
      notifications.show({
        title: "Error",
        message: "Failed to load profile",
        color: "red",
      });
    }
  }, [error]);

  return (
    <Flex direction="column" py={16}>
      <Title order={2} mb={16}>
        Profile
      </Title>

      {isLoading || !profile ? (
        <Card shadow="sm" radius="md" p={24} w="100%" withBorder>
          <Stack align="center" gap={16}>
            <Skeleton height={100} circle my="auto" />
            <Skeleton height={16} mt={6} radius="xl" />
            <Skeleton height={16} mt={6} radius="xl" />
            <Skeleton height={16} mt={6} radius="xl" />
          </Stack>
        </Card>
      ) : (
        <ProfileCard
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          onEdit={openEdit}
          disableEdit={isLoading}
        />
      )}

      {profile && (
        <UpdateMemberModal
          opened={openedEdit}
          close={closeEdit}
          defaultData={profile}
        />
      )}
    </Flex>
  );
};

export default ProfilePage;
