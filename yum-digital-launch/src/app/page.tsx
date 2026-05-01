export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -top-48 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-linear-to-b from-zinc-200/90 via-zinc-100/40 to-transparent blur-3xl dark:from-zinc-800/50 dark:via-zinc-950/20 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-200/80 to-transparent dark:via-zinc-800" />
      </div>

      <section
        className="relative z-10 mx-auto max-w-lg text-center"
        aria-labelledby="coming-soon-heading"
      >
        
        <h1
          className="mb-4 bg-linear-to-b from-zinc-900 to-zinc-600 bg-clip-text text-7xl font-semibold tracking-tight text-transparent dark:from-zinc-50 dark:to-zinc-400"
        >
          Coming soon
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          We&apos;re preparing the full experience. Stay tuned for the launch.
        </p>

        <div
          className="mt-12 flex items-center justify-center gap-3"
          aria-hidden
        >
          <span className="h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="flex gap-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500 [animation-delay:0ms]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500 [animation-delay:150ms]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-zinc-400 dark:bg-zinc-500 [animation-delay:300ms]" />
          </span>
          <span className="h-1 w-12 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        </div>
      </section>
    </div>
  );
}
