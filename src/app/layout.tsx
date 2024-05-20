import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./header";
import Footer from "./footer";

export const metadata = {
  title: "Queue",
  description: "Automatic scheduler for Discord",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="h-screen">
          <TRPCReactProvider>
            <div className="grid h-screen grid-rows-[auto_1fr_auto]">
              <Header />
              {children}
              <Footer />
            </div>
          </TRPCReactProvider>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
