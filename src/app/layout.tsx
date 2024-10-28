import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "DevTo Clone",
  description: "A clone of dev.to built with Next.js and T3 Stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
