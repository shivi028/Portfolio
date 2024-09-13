import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";

 
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shivi's Protfolio",
  description: "About Shivi Professional Information",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

//           antialiased ${geistSans.variable} ${geistMono.variable}
