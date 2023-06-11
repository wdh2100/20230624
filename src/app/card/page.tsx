'use client'

import React from 'react';
import styles from "@/app/page.module.css";
import theme from "@/app/theme";
import CssBaseline from "@mui/material/CssBaseline";
import {Container, Stack, ThemeProvider} from "@mui/system";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TopHeaderImageBox from "../../../container/card/TopHeaderImageBox";
import PhotoList from "../../../container/card/PhotoList";
import NaverMap from "../../../container/card/NaverMap";
import Footer from "../../../container/card/Footer";

const TestItem = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Page = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main className={styles.main}>
                <Container maxWidth="sm">
                    <Stack spacing={2}>
                        <TopHeaderImageBox/>
                        <TestItem>아빠 우도형 | 엄마 윤이경</TestItem>
                        <TestItem>2023년 6월 24일 토요일 오후 12시</TestItem>
                        <TestItem>송담고택</TestItem>
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