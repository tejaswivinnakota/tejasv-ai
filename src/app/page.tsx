import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Tejaswi Vinnakota
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          Product leader focused on AI and enterprise software. Writing about
          model alignment, product strategy, and the philosophy of building
          systems that remain trustworthy at scale.
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            href="/about"
            className="font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            About me
          </Link>
          <Link
            href="/resume"
            className="font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            Resume
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Writing
          </h2>
          <Link
            href="/articles"
            className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            All articles →
          </Link>
        </div>

        {articles.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            Long-form articles coming soon.
          </p>
        ) : (
          <ul className="flex flex-col gap-6">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col gap-0.5"
                >
                  <span className="text-xs text-zinc-400 font-mono">
                    {new Date(
                      article.date + "T00:00:00"
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:underline underline-offset-4">
                    {article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
