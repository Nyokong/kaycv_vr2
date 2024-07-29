import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

{/* imported */}
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";

// components
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "Callmekay CV",
  description: "made by KS Nyokong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
