import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/content/site";

const cmu = localFont({
  variable: "--font-cmu",
  src: [
    { path: "../../fonts/cmu/cmu-serif-500-roman.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/cmu/cmu-serif-500-italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/cmu/cmu-serif-700-roman.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/cmu/cmu-serif-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: `${profile.name} / CV`,
  description: `CV of ${profile.name}, ${profile.role}.`,
  robots: { index: false, follow: true },
};

export default function CvLayout({ children }: LayoutProps<"/cv">) {
  return <div className={`cv-root ${cmu.variable}`}>{children}</div>;
}
