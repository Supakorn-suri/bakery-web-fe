import { ReactNode } from "react";

import TabLayout from "@/components/layouts/TabLayout";

export default function AccountLayout({ children }: { children: ReactNode }) {
  const tabs = [
    { label: "Profile", path: "/account" },
    { label: "Orders", path: "/account/orders" },
    { label: "Favorites", path: "/account/favorites" },
  ];

  return <TabLayout tabs={tabs}>{children}</TabLayout>;
}
