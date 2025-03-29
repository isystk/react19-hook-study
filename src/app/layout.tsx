import "@/styles/globals.scss";
import {Metadata} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {APP_DESCRIPTION, APP_NAME} from "@/constants/app";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

type Props = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_DESCRIPTION,
};

export default function RootLayout({children}: Readonly<Props>) {
    return (
        <html lang="ja">
            <body
                className={`${geistSans.variable} ${geistMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
