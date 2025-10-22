import ProductDetail from '@/features/products/components/ProductDetail';

export default async function Page({
  params,
}: {
  params: Promise<{ bakery_id: string }>;
}) {
  const { bakery_id } = await params;
  return <ProductDetail bakeryId={bakery_id} />;
}
