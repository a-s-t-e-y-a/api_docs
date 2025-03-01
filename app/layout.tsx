// import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from 'next/font/google';
  const ibmPlexSansJP = IBM_Plex_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
  });
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${ibmPlexSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
