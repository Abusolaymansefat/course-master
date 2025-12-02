// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/sharedComponents/Navbar";
import Footer from "./Components/sharedComponents/Footer";
import "./globals.css";
import Providers from "./Providers/Providers.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CourseMaster",
  description: "Modern MERN E-Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
