import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Profile from "@/components/Profile/index";
import NavBottom from "@/components/NavBottom/NavBottom";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        <main>
          <div className="container">
            <div className="flex gap-x-3">
              <Profile />
              <div className="grow">
                <NavBottom />
                {children}
              </div>
            </div>
                <Footer/>
          </div>
        </main>
      </body>
    </html>
  );
}
