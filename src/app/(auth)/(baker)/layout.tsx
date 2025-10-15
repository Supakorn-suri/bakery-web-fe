import { ReactNode } from "react";

import { MainLayout } from "@/components/layouts/MainLayout";

export default function BakerLayout({ children }: { children: ReactNode }) {
  const bakerMenuItems = [
    { icon: "chartPie", label: "Dashboard", path: "/dashboard" },
    { icon: "listDetails", label: "Products Management", path: "/products" },
    { icon: "progressCheck", label: "Orders Management", path: "/orders" },
  ];

  return (
    <MainLayout rightNavMode="menu" rightMenuItem={bakerMenuItems}>
      {children}
    </MainLayout>
  );
}
