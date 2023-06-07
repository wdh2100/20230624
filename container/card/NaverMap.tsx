import React, {useEffect} from 'react';
import styles from "@/app/page.module.css";

const NaverMap = () => {
    useEffect(() => {
        const birthDayPartyLocation = new naver.maps.LatLng(37.1064982, 127.1918814),
            map = new naver.maps.Map('map', {
                center: birthDayPartyLocation.destinationPoint(0, 500),
                zoom: 15
            }),
            marker = new naver.maps.Marker({
                map: map,
                position: birthDayPartyLocation
            });

        const contentString = [
            '<div style="color: black">',
            '   <h3>송담고택</h3>',
            '   <p>경기 용인시 처인구 이동읍 어진로 780<br />',
            '</div>'
        ].join('');

        const infowindow = new naver.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);
    }, []);

    return (
        <div style={{paddingTop: '1rem'}}>
            <h1>송담고택</h1>
            <div>경기 용인시 처인구 이동읍 어진로 780</div>
            <div className={styles.center} id="map" style={{width: '100%', height: '500px'}}></div>
        </div>
    );
};

export default NaverMap;
