import './globals.css'
import {Inter} from 'next/font/google'
import {Metadata} from 'next';
import React from "react";
import Script from "next/script";
import Head from "next/head"

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
        icon: `https://wdh2100.github.io/20230624/icon/favicon.ico`
    },
}

const CLIENT_ID = 'lhwi4yf1te'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="kr">
        <Head>
            <title>우윤슬 돌잔치</title>
            <meta name="title" content="우윤슬 돌잔치"/>
            <meta name="description" content="23년 6월 24일 12시"/>
            <meta property="og:title" content="우윤슬 돌잔치"/>
            <meta property="og:description" content="23년 6월 24일 12시"/>
            <meta property="og:url" content="https://wdh2100.github.io/20230624"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="https://wdh2100.github.io/20230624/photo/small/230526우윤슬-029.jpg"/>
            <meta property="og:image:width" content="720"/>
            <meta property="og:image:height" content="480"/>
        </Head>
        <body className={inter.className}>
        <link rel="icon" href="https://wdh2100.github.io/20230624/icon/favicon.ico" type="image/x-icon"
              sizes="any"/>
        {children}
        <Script
            strategy='beforeInteractive'
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`}/>
        </body>
        </html>
    )
}
