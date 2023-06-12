'use client';

import styles from './page.module.css'
import React, {useEffect} from "react";
import {useRouter} from 'next/navigation';
import TypeIt from "typeit-react";
import {Stack} from "@mui/system";
import {prefix} from "../../container/card/TopHeaderImageBox";
import Image from "next/image";
import Link from "next/link";

export default function Door() {
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push(`${prefix}card`);
        }, 8000)
        return () => {
            clearTimeout(timeoutId);
        }
    })
    return (
        <main className={styles.main}>
            <Stack spacing={2}>
                <div style={{
                    zIndex: 100,
                    color: 'black',
                    width: '100%',
                    height: '100px',
                    textAlign: 'center',
                    marginTop: '25px'
                }}>
                    <TypeIt
                        as='h3'
                        options={{
                            speed: 90,
                        }}>
                        안녕하세요?
                        <br/>
                        저는 우윤슬👶입니다
                        <br/>
                        저의 첫 생일
                        <br/>
                        잔치에 초대합니다🎉
                    </TypeIt>
                </div>

                <div>
                    <Link href={`${prefix}card`} prefetch>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            width: '100vw',
                            height: '70vh'
                        }}
                        >

                            <Image src={`${prefix}/photo/medium/230526우윤슬-320.jpg`} fill priority
                                   alt={'main'}
                                   quality={100}/>

                        </div>
                    </Link>
                </div>
            </Stack>

        </main>
    )
}
