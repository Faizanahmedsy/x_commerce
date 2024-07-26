import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers"; //This is where I have all the providers

const inter = Inter({ subsets: ["latin"] });

// Meta is used for seo
export const metadata: Metadata = {
  title: {
    template: "%s | Jil's X commerce",
    default: "Jil's X commerce",
  },
  description: "A good e commerce app",
};

//This is the main file that will be rendered by Next.js

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Inter.className is used when we want this fonts in our entire app, if you want to use the fonts only in some part of the ui try inter.variable
      @see https://nextjs.org/docs/pages/api-reference/components/font#css-variables
      */}
      <body className={inter.className}>
        {/* We are wrapping our entire app including landing page and admin page
        with Providers */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
