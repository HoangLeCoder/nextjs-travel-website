import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
    title: "Harry Travel",
    description:
        "Travel UI/UX App for Camping created by Harry when practicing Nextjs framework",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // <NextUIProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    <main className="relative overflow-hidden">{children}</main>
                    <Footer />
                </body>
            </html>
        // </NextUIProvider>
    );
}
