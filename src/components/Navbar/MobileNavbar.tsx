"use client";

import { AppShell, UnstyledButton } from "@mantine/core";
import React from "react";

import classes from "./MobileNavbar.module.css";

const MobileNavbar = ({ onClick }: { onClick: () => void }) => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      onClick();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppShell.Navbar py="md" px={4}>
      <UnstyledButton
        className={classes.control}
        onClick={() => handleScroll("home")}
      >
        Home
      </UnstyledButton>
      <UnstyledButton
        className={classes.control}
        onClick={() => handleScroll("features")}
      >
        Features
      </UnstyledButton>
      <UnstyledButton
        className={classes.control}
        onClick={() => handleScroll("our-bakery")}
      >
        Our Bakery
      </UnstyledButton>
      <UnstyledButton
        className={classes.control}
        onClick={() => handleScroll("for-members")}
      >
        For Members
      </UnstyledButton>
    </AppShell.Navbar>
  );
};

export default MobileNavbar;
