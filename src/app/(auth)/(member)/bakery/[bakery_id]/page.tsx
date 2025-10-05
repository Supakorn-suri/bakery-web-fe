import BakeryDetail from "@/components/Detail/BakeryDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BakeryDetail bakeryId={slug} />;
}
