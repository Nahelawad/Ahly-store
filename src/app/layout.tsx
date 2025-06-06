import type { Metadata } from "next";
import { Geist, Geist_Mono,Bebas_Neue} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Bebas_Font=Bebas_Neue({
  subsets:['latin'],
  weight:['400'],
  variable:"--font-bebas",
});




export const metadata: Metadata = {
  title: "AHLY STORE",
  description: "The Club Of The Century",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Bebas_Font.variable} antialiased background `}
      >
        {children}
      </body>
    </html>
  );
}
