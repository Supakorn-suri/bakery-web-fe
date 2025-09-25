import { AppShell, UnstyledButton } from '@mantine/core'
import React from 'react'
import classes from "./MobileNavbar.module.css";

const MobileNavbar = () => {
  return (
    <AppShell.Navbar py="md" px={4}>
    <UnstyledButton className={classes.control}>Home</UnstyledButton>
    <UnstyledButton className={classes.control}>Blog</UnstyledButton>
    <UnstyledButton className={classes.control}>Contacts</UnstyledButton>
    <UnstyledButton className={classes.control}>Support</UnstyledButton>
  </AppShell.Navbar>
  )
}

export default MobileNavbar