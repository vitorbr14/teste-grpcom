import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArtigosPage from "./page";

// mock do link
jest.mock("next/link", () => {
  return ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
});

describe("ArtigosPage", () => {
  beforeEach(() => {
    // mock da chamada pra api
    global.fetch = jest.fn();
  });

  it("renderiza os artigos vindos da API", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        data: [
          {
            id: 1,
            title: "Como aprender React do zero em 2025",
            subtitle: "Guia completo para iniciantes",
            author: "Vitor",
            publishedAt: "2025-12-20",
            heroImage: "/images/react.jpg",
            content: "Conteúdo completo aqui...",
          },
          {
            id: 2,
            title: "Next.js 15: o que mudou e por que você deveria usar",
            subtitle: "Novidades do App Router e Server Actions",
            author: "Ana Silva",
            publishedAt: "2025-12-15",
            heroImage: "/images/nextjs.jpg",
            content: "...",
          },
          {
            id: 3,
            title: "Testes no Next.js com Jest e Testing Library",
            subtitle: "Boas práticas que ninguém te conta",
            author: "Vitor",
            publishedAt: "2025-12-10",
            heroImage: "/images/testing.jpg",
            content: "...",
          },
          {
            id: 4,
            title: "Deploy grátis do seu site Next.js na Vercel",
            subtitle: "Passo a passo em 10 minutos",
            author: "João Mendes",
            publishedAt: "2025-12-05",
            heroImage: "/images/vercel.jpg",
            content: "...",
          },
          {
            id: 5,
            title: "Tailwind CSS vs CSS Modules: qual usar?",
            subtitle: "Comparação real em projeto grande",
            author: "Maria Oliveira",
            publishedAt: "2025-11-30",
            heroImage: "/images/tailwind.jpg",
            content: "...",
          },
          {
            id: 6,
            title: "TypeScript avançado: tips que vão salvar sua vida",
            subtitle: "Utility types, infer, conditional types",
            author: "Vitor",
            publishedAt: "2025-11-25",
            heroImage: "/images/ts.jpg",
            content: "...",
          },
          {
            id: 7,
            title: "Por que Server Components são o futuro do React",
            subtitle: "Performance, SEO e simplicidade",
            author: "Pedro Alves",
            publishedAt: "2025-11-20",
            heroImage: "/images/server-components.jpg",
            content: "...",
          },
        ],
      }),
    });
    const searchParams = Promise.resolve({});
    const ui = await ArtigosPage({ searchParams });

    render(ui);

    expect(
      screen.getByText("Como aprender React do zero em 2025")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Next.js 15: o que mudou e por que você deveria usar")
    ).toBeInTheDocument();
  });

  it("o botão proximo deve aparecer quando chama mais de 6 artigos", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        data: [
          {
            id: 1,
            title: "Como aprender React do zero em 2025",
            subtitle: "Guia completo para iniciantes",
            author: "Vitor",
            publishedAt: "2025-12-20",
            heroImage: "/images/react.jpg",
            content: "Conteúdo completo aqui...",
          },
          {
            id: 2,
            title: "Next.js 15: o que mudou e por que você deveria usar",
            subtitle: "Novidades do App Router e Server Actions",
            author: "Ana Silva",
            publishedAt: "2025-12-15",
            heroImage: "/images/nextjs.jpg",
            content: "...",
          },
          {
            id: 3,
            title: "Testes no Next.js com Jest e Testing Library",
            subtitle: "Boas práticas que ninguém te conta",
            author: "Vitor",
            publishedAt: "2025-12-10",
            heroImage: "/images/testing.jpg",
            content: "...",
          },
          {
            id: 4,
            title: "Deploy grátis do seu site Next.js na Vercel",
            subtitle: "Passo a passo em 10 minutos",
            author: "João Mendes",
            publishedAt: "2025-12-05",
            heroImage: "/images/vercel.jpg",
            content: "...",
          },
          {
            id: 5,
            title: "Tailwind CSS vs CSS Modules: qual usar?",
            subtitle: "Comparação real em projeto grande",
            author: "Maria Oliveira",
            publishedAt: "2025-11-30",
            heroImage: "/images/tailwind.jpg",
            content: "...",
          },
          {
            id: 6,
            title: "TypeScript avançado: tips que vão salvar sua vida",
            subtitle: "Utility types, infer, conditional types",
            author: "Vitor",
            publishedAt: "2025-11-25",
            heroImage: "/images/ts.jpg",
            content: "...",
          },
          {
            id: 7,
            title: "Por que Server Components são o futuro do React",
            subtitle: "Performance, SEO e simplicidade",
            author: "Pedro Alves",
            publishedAt: "2025-11-20",
            heroImage: "/images/server-components.jpg",
            content: "...",
          },
        ],
      }),
    });

    const searchParams = Promise.resolve({});
    const ui = await ArtigosPage({ searchParams });

    render(ui);

    // Checa se o botão aparece
    expect(screen.getByText("Próximo")).toBeInTheDocument();
  });

  it("o botão proximo NÃO deve aparecer quando chama mais de 6 artigos", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({
        data: [
          {
            id: 1,
            title: "Como aprender React do zero em 2025",
            subtitle: "Guia completo para iniciantes",
            author: "Vitor",
            publishedAt: "2025-12-20",
            heroImage: "/images/react.jpg",
            content: "Conteúdo completo aqui...",
          },
          {
            id: 2,
            title: "Next.js 15: o que mudou e por que você deveria usar",
            subtitle: "Novidades do App Router e Server Actions",
            author: "Ana Silva",
            publishedAt: "2025-12-15",
            heroImage: "/images/nextjs.jpg",
            content: "...",
          },
          {
            id: 3,
            title: "Testes no Next.js com Jest e Testing Library",
            subtitle: "Boas práticas que ninguém te conta",
            author: "Vitor",
            publishedAt: "2025-12-10",
            heroImage: "/images/testing.jpg",
            content: "...",
          },
        ],
      }),
    });

    const searchParams = Promise.resolve({});
    const ui = await ArtigosPage({ searchParams });

    render(ui);

    // Checa se o botão aparece
    expect(screen.queryByText("Próximo")).not.toBeInTheDocument();
  });
});
