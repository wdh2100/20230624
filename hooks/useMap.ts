import {useEffect} from 'react';

function useMap() {

    useEffect(() => {
        const birthDayParty = new naver.maps.LatLng(37.1064982, 127.1918814),
            map = new naver.maps.Map('map', {
                center: birthDayParty.destinationPoint(0, 500),
                zoom: 15
            }),
            marker = new naver.maps.Marker({
                map: map,
                position: birthDayParty
            });

        const contentString = [
            '<div style="color: black">',
            '   <h3>송담고택</h3>',
            '   <p>경기 용인시 처인구 이동읍 어진로 780<br />',
            '      <br />',
            '       <a href="http://www.songdam.kr/" target="_blank">http://www.songdam.kr</a>',
            '   </p>',
            '</div>'
        ].join('');

        const infowindow = new naver.maps.InfoWindow({
            content: contentString
        });

        infowindow.open(map, marker);
    }, []);

}

export default useMap;