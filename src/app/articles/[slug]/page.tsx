import { notFound } from "next/navigation";
import { getAllSlugs, getArticleMeta } from "@/lib/articles";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const meta = getArticleMeta(slug);
    return {
      title: `${meta.title} — Tejaswi Vinnakota`,
      description: meta.description,
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const validSlugs = getAllSlugs();
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  let MDXContent: React.ComponentType;
  try {
    const mod = await import(`../../../../../content/articles/${slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  const meta = getArticleMeta(slug);

  return (
    <article className="flex flex-col gap-8 max-w-2xl">
      <header className="flex flex-col gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <time dateTime={meta.date} className="text-xs text-zinc-400 font-mono">
          {new Date(meta.date + "T00:00:00").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
          {meta.description}
        </p>
      </header>

      <div className="prose-styles">
        <MDXContent />
      </div>
    </article>
  );
}
