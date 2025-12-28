import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Artigo from "../../../features/artigo/components/Artigo";
import { notFound } from "next/navigation";

// Mock do next /navigation
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

const notFoundMock = notFound as unknown as jest.MockedFunction<
  typeof notFound
>;

describe("ArtigoDetails Page", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    notFoundMock.mockClear();
  });

  it("renderiza o artigo quando encontra", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: async () => ({
        id: "teste",
        title: "titulo",
        subtitle: "subtitle",
        author: "author",
        publishedAt: "2025-11-20",
        category: "categoria",
        heroImage: "/link.jpg",
        content: "content",
      }),
    });

    const ArtigoResolved = await Artigo({ id: "abc" });

    render(ArtigoResolved);

    expect(screen.getByText("titulo")).toBeInTheDocument();
    expect(screen.getByText("subtitle")).toBeInTheDocument();
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
