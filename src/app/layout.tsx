import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { profile } from "@/content/site";
import "./globals.css";

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

const description = `${profile.name} is an ${profile.role} in ${profile.location}. Kotlin, Jetpack Compose and KMP apps for banking, fintech and privacy, with 1M+ downloads.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: `${profile.name} / Android & KMP Engineer`,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} / Android & KMP Engineer`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} / Android & KMP Engineer`,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Avaloq" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Android", "Kotlin", "Kotlin Multiplatform", "Jetpack Compose", "Mobile security"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${code.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-clip">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
