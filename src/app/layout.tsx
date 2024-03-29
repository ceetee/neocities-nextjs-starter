import type { Metadata } from "next";

import "./globals.css";
import {css} from "@/styled-system/css";

export const metadata: Metadata = {
  title: "neocities starter",
  description: "welcome in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={css({
        backdropFilter: 'hue-rotate(45deg)',
      })}>{children}</body>
    </html>
  );
}
