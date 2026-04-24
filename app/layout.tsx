import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, SITE_URL } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Christo Sam Mathew",
    "Flutter Developer",
    "Full-Stack Developer",
    "BLE",
    "IoT",
    "Device Integration",
    ".NET",
    "Node.js",
    "React",
    "Kochi",
    "Kerala",
    "India",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    worksFor: { "@type": "Organization", name: "Digital Core Technologies" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Kannur University" },
      { "@type": "CollegeOrUniversity", name: "University of Mysore" },
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "BLE",
      "IoT",
      "React",
      ".NET",
      "Node.js",
      "Azure",
    ],
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
