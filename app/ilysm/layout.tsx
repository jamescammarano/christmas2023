import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "boom_boom",
  description: "ilysm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#EEDE03] min-h-screen">
          <div className="mx-8 bg-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
