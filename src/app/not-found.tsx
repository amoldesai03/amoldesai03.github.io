import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col justify-center gap-8">
      <p className="label text-muted">404 / Not found</p>
      <h1 className="display text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">Wrong screen</h1>
      <Link href="/" className="self-start rounded-full bg-ink px-5 py-3 text-paper transition-colors hover:bg-accent hover:text-on-accent">
        Back to the portfolio
      </Link>
    </main>
  );
}
