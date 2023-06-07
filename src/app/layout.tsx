import './globals.css'
import {Inter} from 'next/font/google'
import {Metadata} from 'next';
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '우윤슬 돌잔치',
    description: '우윤슬 돌잔치(20230624)',
    openGraph: {
        title: '우윤슬 돌잔치',
        description: '우윤슬 돌잔치(20230624)',
        images: 'https://github.com/wdh2100/20230624/blob/main/public/photo/small/230526%EC%9A%B0%EC%9C%A4%EC%8A%AC-320.jpg',
        url: 'https://github.com/wdh2100/20230624',
    },
    icons: {
        icon: `https://github.com/wdh2100/20230624/blob/main/src/app/favicon.ico`,
    },
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
