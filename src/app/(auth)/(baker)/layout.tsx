import React from "react";
import BakeryLayout from "@/components/Layout/BakeryLayout";

export default function BakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BakeryLayout role="baker">{children}</BakeryLayout>;
}
