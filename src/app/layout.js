import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Review, Details",
  description: "Post & Read movie reviews for JOJO App",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarWrapper />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
