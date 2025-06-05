import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/link';
import { Button, ButtonGroup, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button href="/">Home</Button>
          <Button href="/videos">Videos</Button>
          <Button href="/preview/file-123">Process</Button>
        </ButtonGroup>
        <main>{children}</main>
        <footer style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem 0",
          backgroundColor: "#fff", // optional: give contrast if needed
        }}>
          <Typography variant="body2" component="body2">ART Salamander Solutions &#169; 2025</Typography>
          <div id="created-by" style={{ textAlign: "center" }}>
            <i>This project was created by Green River College students of the Cohort 20 Software Development BAS program.</i>
            <ul id="student-linkedin" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {/* link your LinkedIn Portfolios inside of the hrefs*/}
              <li><a href="" target="_blank" rel="noopener noreferrer">Rebecca Riffle</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">Augy Markham</a></li>   
              <li><a href="https://www.linkedin.com/in/dev-tylergilmore/" target="_blank" rel="noopener noreferrer">Tyler Gilmore</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
