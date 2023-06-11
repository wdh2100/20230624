import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

export const prefix =
    process.env.NODE_ENV === "production"
        ? "https://wdh2100.github.io/20230624/"
        : "";

const TopHeaderImageBox = () => {
    return <Box component="span" sx={{p: 2}}>
        <div style={{width: '100%', height: '500px', position: 'relative'}}>
            <Image src={`${prefix}/photo/medium/230526우윤슬-071.jpg`} fill priority
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={'main'} quality={100}/>
        </div>
    </Box>
}


export default TopHeaderImageBox;