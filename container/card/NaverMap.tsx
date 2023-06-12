import React, {useEffect} from 'react';
import styles from "@/app/page.module.css";
import CopyToClipboardButton from "./CopyToClipboardButton";

const NaverMap = () => {
    useEffect(() => {
        const birthDayPartyLocation = new naver.maps.LatLng(37.1064982, 127.1918814),
            map = new naver.maps.Map('map', {
                center: birthDayPartyLocation.destinationPoint(0, 0),
                zoom: 16,
                draggable: false,
                pinchZoom: false,
                scrollWheel: false,
                keyboardShortcuts: false,
                disableDoubleTapZoom: true,
                disableDoubleClickZoom: true,
                disableTwoFingerTapZoom: true
            }),
            marker = new naver.maps.Marker({
                map: map,
                position: birthDayPartyLocation
            });

        const contentString = [
            '<div style="color: black">',
            '   <h3>송담고택</h3>',
            '   <h4>경기 용인시 처인구 이동읍 어진로 780</h4>',
            '</div>'
        ].join('');

        const infowindow = new naver.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);
    }, []);

    return (
        <div style={{paddingTop: '1rem'}}>
            <h1>🏠송담고택</h1>
            <h3 style={{display: 'inline-block'}}>경기 용인시 처인구 이동읍 어진로 780</h3>
            <CopyToClipboardButton/>
            <div className={styles.center} id="map" style={{width: '100%', height: '250px'}}></div>
        </div>
    );
};

export default NaverMap;
