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
            router.push(`${prefix}card`);
        }, 5000)
        return () => {
            clearTimeout(timeoutId);
        }
    })
    return (
        <main className={styles.main}>
            <div style={{zIndex: 100, color: 'black', width: '100%', textAlign: 'center', marginTop: '25px'}}>
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

            <div style={{width: '100%', height: '500px', position: 'relative'}}>
                <Link href={`${prefix}card`} prefetch>
                    <Image src={`${prefix}/photo/medium/230526우윤슬-320.jpg`} fill priority
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={'main'}
                           quality={100}/>
                </Link>
            </div>
        </main>
    )
}
