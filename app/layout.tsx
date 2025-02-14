import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import Layout from "@/components/layout/Layout";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-inter antialiased`}>
        <Script 
          src="https://cdn.passage.id/passage-web.js"
          strategy="beforeInteractive"
        />
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
