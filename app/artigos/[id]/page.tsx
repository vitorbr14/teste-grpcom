import Artigo from "@/features/artigo/components/Artigo";
import TopBar from "@/features/components/TopBar";

export default async function ArtigoDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="">
      <TopBar variant="back" />
      <Artigo id={id} />
    </main>
  );
}
