import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Year End Party 2023",
  description: "Happy holidays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#128D66] min-h-screen">
          <div className="mx-8 bg-[#F8F7F2]">{children}</div>
        </div>
      </body>
    </html>
  );
}
