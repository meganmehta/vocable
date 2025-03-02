import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "vocable",
  description: "megan's word of the day site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatMono.className}`}
      >
        {children}
        
      </body>
      
    </html>
  );
}
