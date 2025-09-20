import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {Inter} from "next/font/google";
import Chat from "@/components/Chat";

// This generates a CSS variable (--font-inter)
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Thoryn",
    description: "The battle tested OAuth SAML IdP solution!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NavBar></NavBar>

        {children}
        <Chat/>
        </body>
        </html>
    );
}
