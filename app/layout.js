import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/sharedComponents/Navbar.jsx";
import Footer from "./Components/sharedComponents/Footer.jsx"
import "./globals.css";

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
         <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
