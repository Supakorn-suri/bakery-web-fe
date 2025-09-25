import HomeLayout from '@/components/Layout/HomeLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <HomeLayout>{children}</HomeLayout>;
}

