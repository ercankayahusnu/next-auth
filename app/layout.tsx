"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Tüm uygulamayı SessionProvider ile sarmaladık */}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
