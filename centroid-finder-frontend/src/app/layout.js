import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ART Centroid Finder - Salamander Tracker",
  description: "Track and preview salamander movement from videos",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <nav style={{ border: '2px solid', borderColor: 'blue' }}>
              <Link className="nav-link" href="/" style={{padding: 15}}>Home</Link>
              <Link className="nav-link" href="/videos" style={{padding: 15}}>Videos</Link>
              <Link className="nav-link" href="/preview/file-123" style={{padding: 15}}>Preview</Link>
            </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
