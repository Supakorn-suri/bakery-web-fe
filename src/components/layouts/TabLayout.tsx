"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Container, Tabs, ContainerProps } from "@mantine/core";

interface TabItem {
  label: string;
  path: string;
}

interface TabLayoutProps extends ContainerProps {
  tabs: TabItem[];
  children?: React.ReactNode;
}

const TabLayout = ({ children, tabs, ...rest }: TabLayoutProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Container size="md" mt={100} {...rest}>
      <Tabs
        value={pathname}
        onChange={(value: string | null) => {
          if (value) router.push(value);
        }}
      >
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.path} value={tab.path}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {children}
    </Container>
  );
};

export default TabLayout;
