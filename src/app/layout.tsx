import "@/styles/globals.scss";
import {Metadata} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


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
    title: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
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
