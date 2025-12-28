import articles from "@/data/artigos";
import { mockDelay } from "@/utils/mockDelay";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const findArtigo = articles.find((artigo) => artigo.id === id);
  await mockDelay();
  if (!findArtigo) {
    return NextResponse.json(
      { message: "Artigo não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(findArtigo);
}
