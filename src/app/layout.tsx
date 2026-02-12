import "./globals.css";
import Footer from "@/components/layout/footer";

import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-gray-200 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
