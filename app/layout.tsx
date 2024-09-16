import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const guton = localFont({
  src: [
    {
      path: './fonts/Guton-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Guton-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-guton",
});

export const metadata: Metadata = {
  title: "SAMMA",
  description: "SAMMA - Quiet the Mind, Open the Heart ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${guton.variable} antialiased flex flex-col min-h-screen bg-[#8B4A3B] text-[#F5E6D3]`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
