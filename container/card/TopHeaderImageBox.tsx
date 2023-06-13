import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const prefix =
    process.env.NODE_ENV === "production"
        ? "https://wdh2100.github.io/20230624/"
        : "";

const TopHeaderImageBox = () => {
    return (
        <div style={{height: '100vh'}}>
            <Box component="span" sx={{p: 2}}>
                <div style={{width: '100%', height: '70vh', position: 'relative'}}>
                    <Image src={`${prefix}/photo/main/card-image.gif`} fill priority
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={'main'} quality={100}/>
                </div>
            </Box>
            <h3 style={{textAlign: "center"}}>
                <b style={{color: 'green'}}>아빠</b> 우도형 <Link href={'https://20191116.github.io/'}>❤️</Link> <b
                style={{color: 'pink'}}>엄마</b> 윤이경
            </h3>
            <h2 style={{textAlign: "center"}}>
                2023년 6월 24일 토요일 오후 12시<br/>송담고택</h2>
        </div>
    )
}


export default TopHeaderImageBox;