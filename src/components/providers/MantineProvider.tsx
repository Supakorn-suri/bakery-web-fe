"use client";

import { ReactNode } from 'react';
import {
  MantineProvider as MantineThemeProvider,
  ColorSchemeScript,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";

import theme from "../../app/theme";

interface MantineProviderProps {
  children?: ReactNode;
}

export const MantineProvider = ({ children }: MantineProviderProps) => (
  <>
    <ColorSchemeScript />
    <MantineThemeProvider theme={theme}>
      <Notifications position="top-center" />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineThemeProvider>
  </>
);
