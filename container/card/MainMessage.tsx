import React from 'react';
import TypeIt from "typeit-react";

const MainMessage = () => {
    return (
        <TypeIt
            as={'h3'}
            options={{
                speed: 150,
            }}>
            안녕하세요?<br/>
            저희 부부 인생에 선물같이 찾아온 아기 우윤슬이 세상에 태어난지 어느덧 1년이 되었습니다.<br/>
            첫 돌을 기념하는 뜻으로 조촐한 자축의 자리를 마련하였으니<br/>
            많이 오셔서 축하해 주세요^^🎉🥳🎈🎁
        </TypeIt>
    );
};

export default MainMessage;
