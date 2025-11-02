
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demanual AI Event Manager - Organize Your Schedule",
  description: "A beautiful event management application with Firebase authentication and Google Calendar-like interface",
  authors: [{ name: "Demanual AI Event Manager" }],
  openGraph: {
    title: "Demanual AI Event Manager - Organize Your Schedule",
    description: "A beautiful event management application with Firebase authentication and Google Calendar-like interface",
    type: "website",
    images: [
      {
        url: "https://demanualai.com/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75",
        width: 1200,
        height: 630,
        alt: "Demanual AI Event Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@demanual_ai",
    images: ["https://demanualai.com/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          {children}
          <Toaster richColors />
        </AuthProvider>
      </body>
    </html>
  );
}