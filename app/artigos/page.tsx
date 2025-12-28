import ArtigoCard from "@/features/artigos/components/ArtigoCard";
import { ArtigosGrid } from "@/features/artigos/components/ArtigosGrid";
import TopBar from "@/features/components/TopBar";
import { ArticlesRetorno } from "@/types/types";
import Link from "next/link";
import "./page.css";
import { Metadata } from "next";
import NotFoundPage from "../not-found";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

type ArtigosPageProps = {
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Artigos | Insights, Tecnologia e Desenvolvimento",
  description:
    "Confira nossos artigos sobre tecnologia, desenvolvimento web, carreira em programação e boas práticas de software. Conteúdo direto ao ponto, feito para quem constrói de verdade.",
};
export default async function ArtigosPage({ searchParams }: ArtigosPageProps) {
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page ?? 1);
  const limit = Number(resolvedSearchParams.limit ?? 6);

  const response = await fetch(
    `http://localhost:3000/api/artigos?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  const artigo: ArticlesRetorno = await response.json();

  return (
    <main className="main-artigos container">
      <TopBar variant="text" />

      <ArtigosGrid>
        {artigo.data.length < 1 ? (
          <span>A lista de artigos está vazia.</span>
        ) : (
          artigo.data.map((item) => (
            <div className="grid-item" key={item.id}>
              <Link href={`/artigos/${item.id}`}>
                <ArtigoCard artigo={item} />
              </Link>
            </div>
          ))
        )}
      </ArtigosGrid>

      <div className="wrapper-pagination">
        {page > 1 && (
          <Link
            href={`/artigos?page=${page - 1}&limit=${limit}`}
            className="btn-pagination"
            prefetch={false}
          >
            Anterior
          </Link>
        )}

        {artigo.data.length >= limit && (
          <Link
            href={`/artigos?page=${page + 1}&limit=${limit}`}
            className="btn-pagination"
            prefetch={false}
          >
            Próximo
          </Link>
        )}
      </div>
    </main>
  );
}
