'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import theme from "@/app/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {Container, Stack, ThemeProvider} from "@mui/system";
import TopHeaderImageBox from "../../../container/card/TopHeaderImageBox";
import PhotoList from "../../../container/card/PhotoList";
import NaverMap from "../../../container/card/NaverMap";
import Footer from "../../../container/card/Footer";

const Page = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main className={styles.main}>
                <Container maxWidth="sm">
                    <Stack spacing={2}>
                        <TopHeaderImageBox/>
                        <h3 style={{textAlign: "center"}}>
                            아빠 우도형 | 엄마 윤이경
                            <br/>
                            2023년 6월 24일 토요일 오후 12시</h3>
                        <h2 style={{textAlign: "center"}}>송담고택</h2>
                        <PhotoList/>
                        <NaverMap/>
                        <Footer/>
                    </Stack>
                </Container>
            </main>
        </ThemeProvider>
    );
};

export default Page;