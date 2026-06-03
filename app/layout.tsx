import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "@/components/providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "N.O.B.S Technologies",
  description: "Smart Solutions. Secure Connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}

          {/* Floating WhatsApp Button (global) */}
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}