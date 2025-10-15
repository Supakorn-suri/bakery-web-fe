"use client";

import { UnstyledButton } from "@mantine/core";
import React from "react";
import classes from "./NavItem.module.css";

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface NavItemProps {
  items: NavItem[];
}

export const NavItem = ({ items }: NavItemProps) => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {items.map((item) => (
        <UnstyledButton
          key={item.sectionId}
          className={classes.control}
          onClick={() => handleScroll(item.sectionId)}
        >
          {item.label}
        </UnstyledButton>
      ))}
    </>
  );
};
