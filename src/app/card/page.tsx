'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import theme from "@/app/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {Container, Stack, ThemeProvider} from "@mui/system";
import TopHeaderImageBox from "../../../container/card/TopHeaderImageBox";
import PhotoList from "../../../container/card/PhotoList";
import NaverMap from "../../../container/card/NaverMap";
import MapHotLink from "../../../container/card/MapHotLink";
import Navigation from "../../../container/card/Navigation";
import MainMessage from "../../../container/card/MainMessage";
import localFont from "next/font/local";

const amsterdamFont = localFont({
    src: [{
        path: '../../../public/font/Amsterdam.woff2'
    }]
})

const Page = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main className={styles.main} style={{background: '#efe9d9'}}>
                <Container maxWidth="md" className={amsterdamFont.className}>
                    <Stack spacing={2}>
                        <TopHeaderImageBox/>
                        <MainMessage/>
                        <PhotoList/>
                        <NaverMap/>
                        <MapHotLink/>
                        <Navigation/>
                    </Stack>
                </Container>
            </main>
        </ThemeProvider>
    );
};

export default Page;