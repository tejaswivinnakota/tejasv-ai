export default function About() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I'm Tejaswi Vinnakota — a product leader with experience in AI,
          enterprise software, and product-led growth. I've spent my career
          building products at the intersection of complex systems and real
          human needs.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I'm especially interested in the philosophy and practice of AI
          alignment: how we build systems that remain reliable, interpretable,
          and value-aligned as they scale. This site is where I think out loud
          about those questions.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Background
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I hold an MBA from the University of Texas at Austin (McCombs) and a
          B.S. in Computer Science from the University of Texas at Dallas. My
          work spans product management, data science, and strategy across
          industries including legal tech, healthcare, and enterprise SaaS.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Connect
        </h2>
        <div className="flex flex-col gap-1 text-sm">
          <a
            href="https://www.linkedin.com/in/tejaswivinnakota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-500 transition-colors w-fit"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
