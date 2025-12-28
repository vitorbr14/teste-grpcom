import { BiCalendar, BiUser } from "react-icons/bi";
import "./Artigo.css";
import { Article } from "@/types/types";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { notFound } from "next/navigation";
dayjs.locale("pt-br");
export default async function Artigo({ id }: { id: string }) {
  const response = await fetch(`http://localhost:3000/api/artigos/${id}`);
  const artigo: Article = await response.json();

  if (response.status === 404) {
    notFound();
  }

  return (
    <>
      <header className="artigo-header">
        <Image
          src={artigo.heroImage}
          alt={artigo.title}
          fill
          priority
          sizes="100vw"
          className="artigo-hero-img"
        />

        <div className="artigo-hero-overlay" />

        <div className="container-artigo">
          <span className="assunto-artigo">{artigo.category}</span>
          <h1 className="title-artigo">{artigo.title}</h1>
        </div>
      </header>

      <div className="container-inside-artigo">
        <div className="artigo-summary">
          <div className="artigo-excerpt">
            <h2>{artigo.subtitle}</h2>
          </div>
          <hr />
        </div>

        <div className="artigo-infos">
          <div className="meta-item">
            <div className="meta-icon">
              <BiUser />
            </div>
            <div className="meta-content">
              <span className="meta-value">{artigo.author}</span>
              <span className="meta-label">Autor</span>
            </div>
          </div>

          <div className="meta-item">
            <div className="meta-icon">
              <BiCalendar />
            </div>
            <div className="meta-content">
              <span className="meta-value">
                {dayjs(artigo.publishedAt).format("DD [de] MMMM [de] YYYY")}
              </span>
              <span className="meta-label">Publicado</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="artigo-content">
          <p>{artigo.content}</p>
        </div>

        <hr />
      </div>
    </>
  );
}
