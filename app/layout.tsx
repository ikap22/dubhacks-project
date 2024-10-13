import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "DubHacks Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-gray-100 text-gray-900">
        <NavBar />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
