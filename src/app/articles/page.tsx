import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Tejaswi Vinnakota",
  description:
    "Long-form articles on AI alignment, product strategy, and building trustworthy systems.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base">
          Long-form articles on AI alignment, product strategy, and the
          philosophy of building systems that remain trustworthy at scale.
        </p>
      </section>

      <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-xs text-zinc-400 font-mono">
                {new Date(article.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </span>
              <span className="text-lg font-medium text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4 transition-colors">
                {article.title}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {article.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
