import { Group, UnstyledButton } from '@mantine/core';
import React from "react";
import classes from "./MobileNavbar.module.css";

const Navbar = () => {
  return (
    <Group ml="xl" gap={0} visibleFrom="sm">
      <UnstyledButton className={classes.control}>Home</UnstyledButton>
      <UnstyledButton className={classes.control}>Features</UnstyledButton>
      <UnstyledButton className={classes.control}>Our Bakery</UnstyledButton>
      <UnstyledButton className={classes.control}>For Members</UnstyledButton>
    </Group>
  );
};

export default Navbar;
