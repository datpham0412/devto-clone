import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "DevTo Clone",
  description: "A clone of dev.to built with Next.js and T3 Stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
