import { ReactNode } from "react";

import { MainLayout } from "@/components/layouts/MainLayout";

export default function HomePageLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { label: "Features", sectionId: "features" },
    { label: "Our Bakery", sectionId: "our-bakery" },
    { label: "Reviews", sectionId: "reviews" },
    { label: "For Members", sectionId: "for-members" },
  ];
  return (
    <MainLayout
      centerNav={navItems}
      mobileNavItem={navItems}
      rightNavMode="button"
      rightButton={{ label: "Sweet Picks", path: "/register" }}
    >
      {children}
    </MainLayout>
  );
}
