import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import TimelineContextProvider from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description:
    "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
    icons: {
    icon: '/favicon.svg', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <TimelineContextProvider>
          <Navbar />

          <main className="flex-1 mt-15">{children}</main>

          <Footer />
        </TimelineContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
