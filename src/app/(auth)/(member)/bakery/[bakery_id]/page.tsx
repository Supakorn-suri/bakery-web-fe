import ProductDetail from '@/features/products/components/ProductDetail';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail bakeryId={slug} />;
}
