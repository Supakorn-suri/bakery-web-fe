"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Container, Tabs } from "@mantine/core";

const tabs = ["Profile", "Orders", "Favorites"];

const TabLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Container size="md" mt={100}>
      <Tabs value={pathname} onChange={(value: string) => router.push(value)}>
        <Tabs.List>
          <Tabs.Tab value="/account">Profile</Tabs.Tab>
          <Tabs.Tab value="/account/orders">Orders</Tabs.Tab>
          <Tabs.Tab value="/account/favorites">Favorites</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      {children}
    </Container>
  );
};

export default TabLayout;
