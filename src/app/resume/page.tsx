import type { Metadata } from "next";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: `${profile.name} / CV`,
  robots: { index: false, follow: true },
};

export default function Resume() {
  return (
    <main className="shell flex min-h-svh items-center">
      <meta httpEquiv="refresh" content={`0; url=${profile.cv}`} />
      <a href={profile.cv} className="link-underline text-xl">
        Open the CV
      </a>
    </main>
  );
}
