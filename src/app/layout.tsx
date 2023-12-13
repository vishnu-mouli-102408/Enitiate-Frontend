"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
          <body className={inter.className}>{children}</body>
        </RecoilRoot>
      </QueryClientProvider>
    </html>
  );
}
