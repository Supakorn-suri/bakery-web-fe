"use client";

import {
  MantineProvider as MantineThemeProvider,
  ColorSchemeScript,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dropzone/styles.css";

import theme from "./theme";

type Props = {
  children?: React.ReactNode;
};
const MantineProvider = ({ children }: Props) => (
  <>
    <ColorSchemeScript />
    <MantineThemeProvider theme={theme}>
      <Notifications position="bottom-center" />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineThemeProvider>
  </>
);

export default MantineProvider;
