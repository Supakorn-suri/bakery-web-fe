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
  IconChartPie,
  IconListDetails,
  IconProgressCheck,
} from "@tabler/icons-react";
import {
  AppShell,
  Group,
  ActionIcon,
  Affix,
  Transition,
  Menu,
  Button,
  Anchor,
} from "@mantine/core";

interface BakeryLayoutProps {
  children?: React.ReactNode;
  role: "baker" | "member";
}

const memberMenuItems = [
  { icon: IconUser, label: "Profile", path: "/account" },
  { icon: IconHistory, label: "Order history", path: "/account/orders" },
  { icon: IconHeart, label: "My Favorites", path: "/account/favorites" },
];

const bakerMenuItems = [
  { icon: IconChartPie, label: "Dashboard", path: "/dashboard" },
  { icon: IconListDetails, label: "Products Management", path: "/products" },
  { icon: IconProgressCheck, label: "Orders Management", path: "/orders" },
];

const BakeryLayout = ({ children, role = "member" }: BakeryLayoutProps) => {
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
            <Anchor c="dark" fw="bold" href="/home" underline="never">
              BakeStory
            </Anchor>
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
                  {role === "member"
                    ? memberMenuItems.map((item, index) => (
                        <Menu.Item
                          key={index}
                          leftSection={<item.icon size={14} />}
                          onClick={() => router.replace(item.path)}
                        >
                          {item.label}
                        </Menu.Item>
                      ))
                    : bakerMenuItems.map((item, index) => (
                        <Menu.Item
                          key={index}
                          leftSection={<item.icon size={14} />}
                          onClick={() => router.replace(item.path)}
                        >
                          {item.label}
                        </Menu.Item>
                      ))}
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
