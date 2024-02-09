import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Credits from "@/components/layout/Credits";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dine Store!",
  description: "E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
     
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className=''>{children}</main> <Footer />
          <Credits />
        </Providers>
      </body>
    </html>
  );
}
