import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { sleep } from "@/lib/utils";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone Yt Music",
  description: "Clone Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("before RootLayout sleep...");
  await sleep(2000);
  console.log("after RootLayout sleep...");

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Sidebar>
            {children}
            </Sidebar>
        </ThemeProvider>
        </body>
    </html>
  );
}
