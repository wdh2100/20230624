import './globals.css'
import {Inter} from 'next/font/google'
import {Metadata} from 'next';
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '우윤슬 돌잔치',
    description: '우윤슬 돌잔치(20230624)',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="kr">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
