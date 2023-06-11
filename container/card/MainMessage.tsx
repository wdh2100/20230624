import React from 'react';
import TypeIt from "typeit-react";

const MainMessage = () => {
    return (
        <>
            <h3 style={{textAlign: "center"}}>
                아빠 우도형 | 엄마 윤이경
                <br/>
                2023년 6월 24일 토요일 오후 12시</h3>
            <h2 style={{textAlign: "center"}}>송담고택</h2>
            <TypeIt
                as='h5'
                options={{
                    speed: 150,
                }}>
                안녕하세요?<br/>
                저희 부부 인생에 선물🎁같은 찾아온 아기 우윤슬이 세상에 태어난지 어느덧 1년이🎂 되었습니다.<br/> 첫 돌을 기념하는 뜻으로 조촐한 자축의 자리를 마련하였으니
                많이
                오셔서
                축하해 주세요^^
            </TypeIt>
        </>
    );
};

export default MainMessage;
