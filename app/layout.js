import { Assistant } from "next/font/google";
import Navbar from "@/utils/components/navbar/navbar";
import { LoadingProvider } from "@/utils/contexts/loadingContext";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import "./globals.css";
import FacebookNav from "@/utils/components/facebookNav/facebookNav";

const assistant = Assistant({ subsets: ["hebrew", "latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const token = getCookie("token", { cookies });
  return (
    <html lang="en">
      <body className={assistant.className}>
        {/* {token &&  */}
        <FacebookNav />
        {/* } */}
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
