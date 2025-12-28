export default function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "3rem", color: "#ff6347" }}>
        404 - Artigo não encontrado
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        O artigo que você está procurando não existe ou foi removido.
      </p>
      <a href="/" style={{ color: "black", textDecoration: "underline" }}>
        Voltar para a página inicial
      </a>
    </div>
  );
}
