import HomeLayout from '@/components/Layout/HomeLayout';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <HomeLayout>{children}</HomeLayout>;
}

