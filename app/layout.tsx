import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlaexSerif = IBM_Plex_Serif({ subsets: ["latin"], variable: '--font-ibm-plex-serif', weight:['400', '700']});

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlaexSerif.variable}`}>{children}</body>
    </html>
  );
}
