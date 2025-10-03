"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useHeadroom, useWindowScroll } from "@mantine/hooks";
import {
  IconArrowUp,
  IconLogout,
  IconUser,
  IconHistory,
  IconHeart,
  IconUserFilled,
} from "@tabler/icons-react";
import {
  AppShell,
  Group,
  ActionIcon,
  Affix,
  Text,
  Transition,
  Menu,
  Button,
} from "@mantine/core";

const BakeryLayout = ({ children }: { children: React.ReactNode }) => {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          transform: `translate3d(0, ${pinned ? 0 : "-110px"}, 0)`,
          transition: "transform 400ms ease",
        }}
      >
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text fw="bold">BakeStory</Text>
            <Group>
              <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <Button
                    color="#4A2E1F"
                    variant="light"
                    leftSection={<IconUserFilled size={16} />}
                  >
                    name@mail.com
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconUser size={14} />}>
                    Profile
                  </Menu.Item>
                  <Menu.Item leftSection={<IconHistory size={14} />}>
                    Order history
                  </Menu.Item>
                  <Menu.Item leftSection={<IconHeart size={14} />}>
                    My Favorites
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item
                    color="red"
                    leftSection={<IconLogout size={14} />}
                    onClick={() => router.replace("/home")}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main p="0" mih="100dvh" w="100%" style={{ overflow: "hidden" }}>
        {children}
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles: any) => (
              <ActionIcon
                style={transitionStyles}
                variant="light"
                color="white"
                radius="xl"
                size="lg"
                onClick={() => scrollTo({ y: 0 })}
              >
                <IconArrowUp size={24} stroke={2.5} />
              </ActionIcon>
            )}
          </Transition>
        </Affix>
      </AppShell.Main>
    </AppShell>
  );
};

export default BakeryLayout;
