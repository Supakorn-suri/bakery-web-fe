"use client";

import { Group, UnstyledButton } from "@mantine/core";
import React from "react";
import classes from "./MobileNavbar.module.css";

const Navbar = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Group ml="xl" gap={0} visibleFrom="sm">
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
      </UnstyledButton>{" "}
    </Group>
  );
};

export default Navbar;
