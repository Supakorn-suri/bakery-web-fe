import { ReactNode } from "react";
import { mantineHtmlProps } from "@mantine/core";
import { Caveat } from "next/font/google";

import { QueryProvider } from "@/components/providers/QueryProvider";
import { MantineProvider } from "@/components/providers/MantineProvider";

export const caveat = Caveat({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "BakeStory",
  description: "Freshly baked happiness, just for you",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={caveat.variable} {...mantineHtmlProps}>
      <body>
        <QueryProvider>
          <MantineProvider>{children}</MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
