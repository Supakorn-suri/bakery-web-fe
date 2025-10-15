"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import {
  IconArrowUp,
  IconArrowUpRight,
  IconLogout,
  IconUserFilled,
  IconUser,
  IconHistory,
  IconHeart,
  IconChartPie,
  IconListDetails,
  IconProgressCheck,
} from "@tabler/icons-react";
import {
  AppShell,
  Burger,
  Menu,
  Group,
  ActionIcon,
  Affix,
  Button,
  Anchor,
  Transition,
  AppShellProps,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import classes from "./MainLayout.module.css";
import { NavItem } from "../navbars/NavItem";
import { useAuthStore } from "@/features/auth/store/authStore";

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

interface RightButtonProps {
  label: string;
  path: string;
}

interface MainLayoutProps extends AppShellProps {
  children?: ReactNode;
  centerNav?: NavItem[];
  mobileNavItem?: NavItem[];
  rightNavMode?: "button" | "menu";
  rightMenuItem?: MenuItem[];
  rightButton?: RightButtonProps;
}

export const MainLayout = ({
  children,
  centerNav,
  rightNavMode = "button",
  mobileNavItem,
  rightMenuItem,
  rightButton = { label: "Home", path: "/home" },
  ...rest
}: MainLayoutProps) => {
  const { breakpoints } = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();
  const { user: currentUser, logout } = useAuthStore();
  const isWidthXsUp = useMediaQuery(`(min-width: ${breakpoints.xs})`);

  const iconMap: Record<string, React.ElementType> = {
    user: IconUser,
    history: IconHistory,
    heart: IconHeart,
    chartPie: IconChartPie,
    listDetails: IconListDetails,
    progressCheck: IconProgressCheck,
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      {...rest}
    >
      <AppShell.Header
        style={{
          transform: `translate3d(0, ${pinned ? 0 : "-110px"}, 0)`,
          transition: "transform 400ms ease",
        }}
      >
        <Group h="100%" px="md">
          {/* mobile nav */}
          {mobileNavItem && (
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          )}
          <Group justify="space-between" style={{ flex: 1 }}>
            {/* left */}
            <Anchor c="dark" fw="bold" href="/home" underline="never">
              BakeStory
            </Anchor>

            {/* center */}
            {centerNav && centerNav.length > 0 ? (
              <Group ml="xl" gap={0} visibleFrom="sm">
                <NavItem items={centerNav} />
              </Group>
            ) : null}

            {/* right */}
            {rightNavMode === "button" ? (
              <Button
                className={classes.button_gradient}
                rightSection={<IconArrowUpRight size={14} />}
                onClick={() => router.replace(rightButton.path)}
              >
                {rightButton.label}
              </Button>
            ) : (
              // member | baker menu
              <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  {isWidthXsUp ? (
                    <Button
                      color="#4A2E1F"
                      variant="light"
                      leftSection={<IconUserFilled size={16} />}
                    >
                      {currentUser?.email ?? "-"}
                    </Button>
                  ) : (
                    <ActionIcon color="#4A2E1F" variant="light">
                      <IconUserFilled size={16} />
                    </ActionIcon>
                  )}
                </Menu.Target>
                <Menu.Dropdown>
                  {rightMenuItem &&
                    rightMenuItem.map((item, index) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <Menu.Item
                          key={index}
                          leftSection={<Icon size={14} />}
                          onClick={() => router.replace(item.path)}
                        >
                          {item.label}
                        </Menu.Item>
                      );
                    })}
                  <Menu.Divider />
                  <Menu.Item
                    color="red"
                    leftSection={<IconLogout size={14} />}
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
          </Group>
        </Group>
      </AppShell.Header>

      {/* Mobile Navbar */}
      {mobileNavItem && mobileNavItem.length > 0 ? (
        <AppShell.Navbar py="md" px={4} onClick={toggle}>
          <NavItem items={mobileNavItem} />
        </AppShell.Navbar>
      ) : null}

      <AppShell.Main p="0" mih="100dvh" w="100%" style={{ overflow: "hidden" }}>
        {children}
        <Affix position={{ bottom: 72, right: 20 }}>
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
