// RootLayout.tsx
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "./components/CursorGlow"; // This will be our new client-side component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} antialiased bg-darkGray`}>
        {children}
        <CursorGlow />
      </body>
    </html>
  );
}
