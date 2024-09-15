import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Samma",
  description: "Samma - Quiet the Mind, Open the Heart ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${guton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
