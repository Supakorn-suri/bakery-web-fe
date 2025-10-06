import React from "react";
import BakeryLayout from "@/components/Layout/BakeryLayout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BakeryLayout>{children}</BakeryLayout>;
}
