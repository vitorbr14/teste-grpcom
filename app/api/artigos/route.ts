import articles from "@/data/artigos";
import { mockDelay } from "@/utils/mockDelay";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await mockDelay();
  const { searchParams } = new URL(req.url);

  // paginação
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 5);

  const totalItems = articles.length;
  const totalPages = Math.ceil(totalItems / limit);

  const start = (page - 1) * limit;
  const end = start + limit;

  // Sliçando o array de artigos para simular a paginação
  const data = articles.slice(start, end);

  return NextResponse.json({ data, page, totalPages });
}
