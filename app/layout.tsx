import "./globals.css";
import Providers from "@/components/providers";
import { Inter } from "next/font/google";

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
return ( <html lang="en"> <body className={inter.className}> <Providers>{children}</Providers> </body> </html>
);
}
