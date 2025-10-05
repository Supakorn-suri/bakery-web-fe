import TabLayout from '@/components/Layout/TabLayout';

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TabLayout>{children}</TabLayout>;
}
