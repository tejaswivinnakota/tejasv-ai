import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold tracking-tight mt-10 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300 mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-zinc-950 text-zinc-100 rounded-lg p-4 overflow-x-auto my-6 text-sm font-mono">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-zinc-700 dark:text-zinc-300">
        {children}
      </ol>
    ),
    ...components,
  };
}
