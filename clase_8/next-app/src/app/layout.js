import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />

          <main className="flex justify-center w-full p-5 bg-slate-50">
            <div className="w-full xl:w-[80%]">{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}