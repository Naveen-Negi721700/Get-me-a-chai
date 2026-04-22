import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me A Chai -Fund your Project with Chai",
  description: "This website is a platform that allows users to fund their projects using Chai, a popular stablecoin in the DeFi ecosystem. Users can create campaigns for their projects and receive funding from supporters who believe in their ideas. The platform provides a seamless and secure way for project creators to connect with potential backers and bring their ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] ">
          
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
