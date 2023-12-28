import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Figtree } from "next/font/google";
import type { ReactNode } from "react";

const figtree: NextFont = Figtree({
  weight: ["600", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Preview Card",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
