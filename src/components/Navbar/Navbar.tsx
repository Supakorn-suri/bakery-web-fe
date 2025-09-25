import { Group, UnstyledButton } from '@mantine/core';
import React from "react";
import classes from "./MobileNavbar.module.css";

const Navbar = () => {
  return (
    <Group ml="xl" gap={0} visibleFrom="sm">
      <UnstyledButton className={classes.control}>Home</UnstyledButton>
      <UnstyledButton className={classes.control}>Blog</UnstyledButton>
      <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
      <UnstyledButton className={classes.control}>Support</UnstyledButton>
    </Group>
  );
};

export default Navbar;
