import { BiCalendar } from "react-icons/bi";
import "./ArtigoCard.css";
import { Article } from "@/types/types";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Image from "next/image";
dayjs.locale("pt-br");
export default function ArtigoCard({ artigo }: { artigo: Article }) {
  return (
    <article className="artigo-card">
      <div className="card-header">
        <span className="assunto">{artigo.category}</span>
        <div className="card-img-wrap">
          <Image
            src={artigo.heroImage}
            alt={artigo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // ajusta o tamanho da imagem conforme a tela...o "fill" sempre vai pegar 100vw,
            // ja o size vai avisar o tamanho da imagem pro navegador!!!!
            className="card-img"
          />
        </div>
      </div>

      <div className="card-body">
        <h1 className={`titulo-artigo-card`}>{artigo.title}</h1>

        <h2 className="subtitulo-artigo-card">{artigo.subtitle}</h2>
      </div>

      <div className="card-footer">
        <div className="footer-date">
          <BiCalendar />
          <span>
            {dayjs(artigo.publishedAt).format("D [de] MMMM [de] YYYY")}
          </span>
        </div>
      </div>
    </article>
  );
}
