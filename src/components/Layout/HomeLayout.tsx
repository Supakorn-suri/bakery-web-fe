"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import { IconArrowUp, IconArrowUpRight } from "@tabler/icons-react";
import {
  AppShell,
  Burger,
  Group,
  ActionIcon,
  Affix,
  Button,
  Text,
  Transition,
} from "@mantine/core";

import MobileNavbar from "@/components/Navbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";

import classes from "./HomeLayout.module.css";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll, scrollTo] = useWindowScroll();
  const router = useRouter();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
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
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text fw="bold">BakeStory</Text>
            <Navbar />
            <Button
              className={classes.button_gradient}
              rightSection={<IconArrowUpRight size={14} />}
              onClick={() => router.replace("/register")}
            >
              Sweet Picks
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <MobileNavbar />

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

export default HomeLayout;
