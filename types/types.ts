export type Article = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  publishedAt: string;
  heroImage: string;
  content: string;
  category: string;
};

export type ArticlesRetorno = {
  page: number;
  totalPages: number;
  data: Article[];
};
