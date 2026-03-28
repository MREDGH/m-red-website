import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Real Estate Development | Healthcare Real Estate Developer",
  description:
    "M Real Estate Development B.V. finds, acquires, and develops turnkey care real estate for private residential care and senior housing operators.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "M Real Estate Development",
    description:
      "Developing turnkey care real estate for healthcare operators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${openSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-offwhite">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
