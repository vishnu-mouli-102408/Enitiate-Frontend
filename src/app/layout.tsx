"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <body className={inter.className}>
            {children}
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js" />
            <Script src="https://unpkg.com/flowbite@2.2.0/dist/flowbite.js" />
            <Script src="/node_modules/flowbite/dist/flowbite.min.js" />
          </body>
        </RecoilRoot>
      </QueryClientProvider>
    </html>
  );
}
