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
        description: '23년 6월 24일 12시',
        images: {
            url: `https://wdh2100.github.io/20230624/photo/small/230526우윤슬-029.jpg`,
            width: 720,
            height: 480,
        },
        url: 'https://github.com/wdh2100/20230624',
        type: 'website',
    },
    icons: {
        icon: `https://wdh2100.github.io/20230624/icon/favicon.ico`,
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
