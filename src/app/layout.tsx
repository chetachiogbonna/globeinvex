import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Global Investment",
  description: "Global Invest: Your Passport to Prosperity",
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} justify-center antialiased`}
        // className={`justify-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default Layout