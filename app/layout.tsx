import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";


const openSans = Open_Sans({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Link Up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={cn(
          `${openSans.className} antialiased`,
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem = {false}
            storageKey="linkup-theme"
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
