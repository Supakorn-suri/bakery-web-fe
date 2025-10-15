import { ReactNode } from "react";

import { MainLayout } from "@/components/layouts/MainLayout";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const memberMenuItems = [
    { icon: "user", label: "Profile", path: "/account" },
    { icon: "history", label: "Order history", path: "/account/orders" },
    { icon: "heart", label: "My Favorites", path: "/account/favorites" },
  ];

  return (
    <MainLayout rightNavMode="menu" rightMenuItem={memberMenuItems}>
      {children}
    </MainLayout>
  );
}
