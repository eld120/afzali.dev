import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Seyamack Afzali",
  description: "Custom Software Development for specialty retailers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <head>
          <link rel="icon" href="/static/logos/terminal.svg" sizes="32x32" type="image/svg" />
        </head>

        <body className={inter.className}>
          <header>
            {/* navbar */}
            <NavBar />
            <hr className="mb-8" />
          </header>
          {children}
          <hr className="my-8" />
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
