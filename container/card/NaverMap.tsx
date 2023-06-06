import React from 'react';
import Script from 'next/script';
import useMap from "../../hooks/useMap";
import styles from "@/app/page.module.css";

const CLIENT_ID = 'lhwi4yf1te'


const NaverMap = () => {
    useMap();

    return (
        <div style={{paddingTop: '1rem'}}>
            <h1>송담고택</h1>
            <div>경기 용인시 처인구 이동읍 어진로 780</div>
            <div className={styles.center} id="map" style={{width: '100%', height: '500px'}}></div>
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
            <Script
                strategy='beforeInteractive'
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`}/>
        </div>
    );
};

export default NaverMap;
