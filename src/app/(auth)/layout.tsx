import BakeryLayout from '@/components/Layout/BakeryLayout';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return <BakeryLayout>{children}</BakeryLayout>;
}

