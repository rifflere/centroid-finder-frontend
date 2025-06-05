import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';

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
            <Box sx={{ flexGrow: 1, marginBottom: 2}}>
              <AppBar position="static">
                <Toolbar>
                  <Image src="/icon.ico" width="50" height="50" alt="logo"></Image>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/">Automated Resource Tracker </Link>
                  </Typography>
                  <Button variant="text" color="string" href="/videos">Select a Video</Button>
                </Toolbar>
              </AppBar>
            </Box>

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
              <li><a href="https://www.linkedin.com/in/rebecca-riffle/" target="_blank" rel="noopener noreferrer">Rebecca Riffle</a></li>
              <li><a href="" target="_blank" rel="noopener noreferrer">Augy Markham</a></li>   
              <li><a href="https://www.linkedin.com/in/dev-tylergilmore/" target="_blank" rel="noopener noreferrer">Tyler Gilmore</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
