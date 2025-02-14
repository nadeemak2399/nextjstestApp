import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapClient from "./components/BootstrapClient";


import Header from "./Header";
import Footer from "./Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Make Your Own Custom Patches UK | FREE Artwork",
  description: "Get top-quality custom patches in the UK with free artwork, free shipping, & a low minimum order! Embroidered patches, PVC, woven, leather, & printed patches.",
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <meta name="google-site-verification" content="-vn76eVhBU6SIHYSnPQobNclbNvCW_Gs0XWM6C4Ait8" />
        <link rel="icon" href="/nexuspatchesfav.png"/>
        <Header/>
        {children}
        <Footer/>
        <BootstrapClient />
      </body>
    </html>
  );
}
