import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(ARTICLES_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticleMeta(slug: string): ArticleMeta {
  const fullPath = path.join(ARTICLES_DIR, slug + ".mdx");
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
  };
}
