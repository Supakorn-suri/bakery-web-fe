import React from "react";
import HomeLayout from "@/components/Layout/HomeLayout";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout>{children}</HomeLayout>;
}
