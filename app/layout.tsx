import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

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
        <nav className="bg-[#32006e] p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              ProjectSync
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/signin"
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
