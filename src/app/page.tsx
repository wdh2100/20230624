'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from 'next/navigation';
import TypeIt from "typeit-react";
import {prefix} from "../../container/card/TopHeaderImageBox";


export default function Door() {
    const router = useRouter();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push(`${prefix}/card`);
        }, 10000)
        return () => {
            clearTimeout(timeoutId);
        }
    })
    return (
        <main className={styles.main}>
            <div style={{zIndex: 100, color: 'black', width: '100%', textAlign: 'center'}}>
                <TypeIt
                    as='h1'
                    options={{
                        speed: 150,
                        loop: true,
                        loopDelay: 5000
                    }}>
                    <br/>
                    안녕하세요?
                    <br/>
                    저는 우윤슬👶입니다
                    <br/>
                    첫생일에 초대합니다🎉
                </TypeIt>
            </div>
            <Link href={`${prefix}/card`}>
                <Image src={`${prefix}/photo/medium/230526우윤슬-061.jpg`} fill alt={'door'} quality={75} priority
                       style={{maxWidth: '460px', margin: '0 auto'}}/>
            </Link>
        </main>
    )
}
